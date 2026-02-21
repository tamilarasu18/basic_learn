"use client";
import Link from "next/link";
import { tracks } from "@/data/tracks";
import { useEffect, useState } from "react";
import { getProgress } from "@/lib/progress";

export default function Home() {
  const [xp, setXp] = useState(0);
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    const p = getProgress();
    setXp(p.xp);
    setCompleted(p.completedTopics.length);
  }, []);

  return (
    <>
      <div className="landing-hero">
        <div className="landing-badge">🚀 100% Free &amp; Offline</div>
        <h1 className="landing-title">
          Learn Tech
          <br />
          <span className="gradient-text">The Fun Way</span>
        </h1>
        <p className="landing-subtitle">
          Master DSA, frameworks, and cutting-edge tech through interactive
          lessons, live code playgrounds, algorithm visualizations, and gamified
          quizzes.
        </p>
        <div className="landing-stats">
          <div className="landing-stat">
            <div className="landing-stat-value">8</div>
            <div className="landing-stat-label">Learning Tracks</div>
          </div>
          <div className="landing-stat">
            <div className="landing-stat-value">200+</div>
            <div className="landing-stat-label">Topics</div>
          </div>
          <div className="landing-stat">
            <div className="landing-stat-value">{xp}</div>
            <div className="landing-stat-label">Your XP</div>
          </div>
          <div className="landing-stat">
            <div className="landing-stat-value">{completed}</div>
            <div className="landing-stat-label">Completed</div>
          </div>
        </div>
      </div>

      <div className="tracks-grid">
        {tracks.map((track, i) => (
          <Link
            key={track.id}
            href={track.status === "active" ? `/${track.id}` : "#"}
            className={`track-card animate-fade-in animate-delay-${i + 1} ${track.status === "coming-soon" ? "coming-soon" : ""}`}
            style={{ "--card-gradient": track.gradient } as React.CSSProperties}
          >
            <div className="track-card-icon">{track.icon}</div>
            <div className="track-card-header">
              <div className="track-card-title">{track.name}</div>
              <span
                className={`track-card-badge ${track.status === "active" ? "active" : "soon"}`}
              >
                {track.status === "active" ? "Active" : "Coming Soon"}
              </span>
            </div>
            <div className="track-card-desc">{track.description}</div>
            <div className="track-card-meta">
              <span className="track-card-meta-item">
                📖 {track.topicCount} topics
              </span>
              <span className="track-card-meta-item">
                ⏱️ ~{track.estimatedHours}h
              </span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
