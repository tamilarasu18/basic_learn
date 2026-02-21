"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  getTrackSections,
  getTrackMeta,
  getSectionLabel,
} from "@/data/registry";
import ProgressRing from "@/components/ProgressRing";
import { useEffect, useState } from "react";
import { getCompletedCount } from "@/lib/progress";

export default function TrackPage() {
  const params = useParams();
  const trackId = params.track as string;
  const meta = getTrackMeta(trackId);
  const sections = getTrackSections(trackId);
  const sectionLabel = getSectionLabel(trackId);
  const [completedCounts, setCompletedCounts] = useState<
    Record<number, number>
  >({});

  useEffect(() => {
    if (!sections) return;
    const counts: Record<number, number> = {};
    sections.forEach((section) => {
      const ids = section.topics.map((t) => t.id);
      counts[section.id] = getCompletedCount(ids);
    });
    setCompletedCounts(counts);
  }, [sections]);

  if (!meta || !sections) {
    return (
      <div>
        <h1>Track not found</h1>
        <Link href="/">← Back Home</Link>
      </div>
    );
  }

  const totalTopics = sections.reduce((s, m) => s + m.topics.length, 0);
  const totalCompleted = Object.values(completedCounts).reduce(
    (s, c) => s + c,
    0,
  );
  const overallProgress =
    totalTopics > 0 ? (totalCompleted / totalTopics) * 100 : 0;

  return (
    <>
      <div className="track-header">
        <div className="track-breadcrumb">
          <Link href="/">Home</Link>
          <span className="track-breadcrumb-sep">›</span>
          <span>{meta.name}</span>
        </div>
        <h1 className="track-title">
          {meta.icon} {meta.name}
        </h1>
        <p className="track-desc">{meta.description}</p>
        <div className="track-progress">
          <div className="track-progress-bar">
            <div
              className="track-progress-fill"
              style={{ width: `${overallProgress}%` }}
            />
          </div>
          <span className="track-progress-text">
            {totalCompleted}/{totalTopics} topics
          </span>
        </div>
      </div>

      <div className="months-grid">
        {sections.map((section, i) => {
          const count = completedCounts[section.id] || 0;
          const progress =
            section.topics.length > 0
              ? (count / section.topics.length) * 100
              : 0;
          return (
            <Link
              key={section.id}
              href={`/${trackId}/section-${section.id}`}
              className={`month-card animate-fade-in animate-delay-${i + 1}`}
            >
              <div className="month-card-header">
                <span className="month-card-number">
                  {sectionLabel} {section.id}
                </span>
                <ProgressRing progress={progress} />
              </div>
              <div className="month-card-title">
                {section.icon} {section.title}
              </div>
              <div className="month-card-topics">
                {section.topics.map((topic) => (
                  <div key={topic.id} className="month-card-topic">
                    <span className="month-card-topic-dot" />
                    <span>{topic.title}</span>
                  </div>
                ))}
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
