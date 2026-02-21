"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  getTrackSections,
  getTrackMeta,
  getSectionLabel,
} from "@/data/registry";
import { useEffect, useState } from "react";
import { isTopicCompleted } from "@/lib/progress";

export default function SectionPage() {
  const params = useParams();
  const trackId = params.track as string;
  const sectionSlug = params.sectionId as string;
  const sectionNum = parseInt(sectionSlug.replace("section-", ""), 10);
  const meta = getTrackMeta(trackId);
  const sections = getTrackSections(trackId);
  const section = sections?.find((s) => s.id === sectionNum);
  const sectionLabel = getSectionLabel(trackId);
  const [completedMap, setCompletedMap] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (!section) return;
    const map: Record<string, boolean> = {};
    section.topics.forEach((t) => {
      map[t.id] = isTopicCompleted(t.id);
    });
    setCompletedMap(map);
  }, [section]);

  if (!meta || !section) {
    return (
      <div>
        <h1>Section not found</h1>
        <Link href={`/${trackId}`}>← Back to {trackId}</Link>
      </div>
    );
  }

  return (
    <>
      <div className="track-header">
        <div className="track-breadcrumb">
          <Link href="/">Home</Link>
          <span className="track-breadcrumb-sep">›</span>
          <Link href={`/${trackId}`}>{meta.name}</Link>
          <span className="track-breadcrumb-sep">›</span>
          <span>
            {sectionLabel} {section.id}
          </span>
        </div>
        <h1 className="track-title">
          {section.icon} {sectionLabel} {section.id}: {section.title}
        </h1>
        <p className="track-desc">
          {section.topics.length} topics to master. Click any topic to start the
          interactive lesson.
        </p>
      </div>

      <div className="topics-grid">
        {section.topics.map((topic, i) => (
          <Link
            key={topic.id}
            href={`/${trackId}/section-${section.id}/${topic.id}`}
            className={`topic-item animate-fade-in animate-delay-${i + 1}`}
          >
            <div
              className={`topic-item-number ${completedMap[topic.id] ? "completed" : ""}`}
            >
              {completedMap[topic.id] ? "✓" : i + 1}
            </div>
            <div className="topic-item-content">
              <div className="topic-item-title">{topic.title}</div>
              <div className="topic-item-desc">{topic.shortDesc}</div>
            </div>
            <span className={`lesson-difficulty ${topic.difficulty}`}>
              {topic.difficulty}
            </span>
            <span className="topic-item-arrow">→</span>
          </Link>
        ))}
      </div>
    </>
  );
}
