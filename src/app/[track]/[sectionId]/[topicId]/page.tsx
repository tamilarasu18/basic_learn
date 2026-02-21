"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  getTrackSections,
  getTrackMeta,
  getSectionLabel,
} from "@/data/registry";
import CodePlayground from "@/components/CodePlayground";
import Quiz from "@/components/Quiz";
import { useState, useEffect } from "react";
import { markTopicComplete, isTopicCompleted } from "@/lib/progress";

export default function TopicLessonPage() {
  const params = useParams();
  const trackId = params.track as string;
  const sectionSlug = params.sectionId as string;
  const topicId = params.topicId as string;
  const sectionNum = parseInt(sectionSlug.replace("section-", ""), 10);
  const meta = getTrackMeta(trackId);
  const sections = getTrackSections(trackId);
  const section = sections?.find((s) => s.id === sectionNum);
  const topic = section?.topics.find((t) => t.id === topicId);
  const sectionLabel = getSectionLabel(trackId);
  const [completed, setCompleted] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (topic) setCompleted(isTopicCompleted(topic.id));
  }, [topic]);

  if (!meta || !section || !topic) {
    return (
      <div>
        <h1>Topic not found</h1>
        <Link href={`/${trackId}`}>← Back to {meta?.name || trackId}</Link>
      </div>
    );
  }

  const topicIndex = section.topics.findIndex((t) => t.id === topicId);
  const prevTopic = topicIndex > 0 ? section.topics[topicIndex - 1] : null;
  const nextTopic =
    topicIndex < section.topics.length - 1
      ? section.topics[topicIndex + 1]
      : null;

  const handleComplete = () => {
    if (completed) return;
    markTopicComplete(topic.id);
    setCompleted(true);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="lesson-container">
      <div className="lesson-header">
        <div className="track-breadcrumb">
          <Link href="/">Home</Link>
          <span className="track-breadcrumb-sep">›</span>
          <Link href={`/${trackId}`}>{meta.name}</Link>
          <span className="track-breadcrumb-sep">›</span>
          <Link href={`/${trackId}/section-${section.id}`}>
            {sectionLabel} {section.id}
          </Link>
          <span className="track-breadcrumb-sep">›</span>
          <span>{topic.title}</span>
        </div>
        <h1 className="lesson-title">{topic.title}</h1>
        <div className="lesson-meta">
          <span className="lesson-meta-item">
            {meta.icon} {sectionLabel} {section.id}: {section.title}
          </span>
          <span className={`lesson-difficulty ${topic.difficulty}`}>
            {topic.difficulty}
          </span>
        </div>
        <div className="lesson-nav">
          {prevTopic && (
            <Link
              href={`/${trackId}/section-${section.id}/${prevTopic.id}`}
              className="lesson-nav-btn"
            >
              ← {prevTopic.title}
            </Link>
          )}
          {nextTopic && (
            <Link
              href={`/${trackId}/section-${section.id}/${nextTopic.id}`}
              className="lesson-nav-btn"
              style={{ marginLeft: "auto" }}
            >
              {nextTopic.title} →
            </Link>
          )}
        </div>
      </div>

      <div className="lesson-section">
        <h2 className="lesson-section-title">
          <span className="lesson-section-icon">📚</span> Theory
        </h2>
        <div
          className="lesson-theory"
          dangerouslySetInnerHTML={{ __html: topic.theory }}
        />
      </div>

      <div className="lesson-section">
        <h2 className="lesson-section-title">
          <span className="lesson-section-icon">💻</span> Code Playground
        </h2>
        <CodePlayground defaultCode={topic.codeExample} />
      </div>

      {topic.quiz.length > 0 && (
        <div className="lesson-section">
          <h2 className="lesson-section-title">
            <span className="lesson-section-icon">🧠</span> Quiz
          </h2>
          <Quiz topicId={topic.id} questions={topic.quiz} />
        </div>
      )}

      <div className="lesson-section" style={{ textAlign: "center" }}>
        <button
          className={`lesson-complete-btn ${completed ? "completed" : ""}`}
          onClick={handleComplete}
        >
          {completed ? "✅ Completed!" : "🏆 Mark as Complete (+50 XP)"}
        </button>
      </div>

      {showToast && <div className="xp-toast">🎉 +50 XP! Topic completed!</div>}
    </div>
  );
}
