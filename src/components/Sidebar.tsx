"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { tracks } from "@/data/tracks";
import { getProgress, updateStreak } from "@/lib/progress";

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [xp, setXp] = useState(0);
  const [streak, setStreak] = useState(0);
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    updateStreak();
    const p = getProgress();
    setXp(p.xp);
    setStreak(p.streak);
    setCompleted(p.completedTopics.length);
  }, [pathname]);

  const closeSidebar = () => setOpen(false);

  return (
    <>
      <button className="sidebar-toggle" onClick={() => setOpen(!open)}>
        {open ? "✕" : "☰"}
      </button>
      <div
        className={`sidebar-overlay ${open ? "open" : ""}`}
        onClick={closeSidebar}
      />
      <aside className={`sidebar ${open ? "open" : ""}`}>
        <Link href="/" className="sidebar-logo" onClick={closeSidebar}>
          <div className="sidebar-logo-icon">B</div>
          <div className="sidebar-logo-text">
            <span>Basic</span>Learning
          </div>
        </Link>

        <div className="sidebar-section">
          <div className="sidebar-section-title">Learning Tracks</div>
          {tracks.map((track) => (
            <Link
              key={track.id}
              href={track.status === "active" ? `/${track.id}` : "#"}
              className={`sidebar-link ${pathname.startsWith(`/${track.id}`) ? "active" : ""}`}
              onClick={closeSidebar}
            >
              <span className="sidebar-link-icon">{track.icon}</span>
              <span>
                {track.name.length > 20
                  ? track.name.slice(0, 20) + "…"
                  : track.name}
              </span>
              {track.status === "coming-soon" && (
                <span className="sidebar-link-badge">Soon</span>
              )}
            </Link>
          ))}
        </div>

        <div className="sidebar-stats">
          <div className="sidebar-stats-title">Your Progress</div>
          <div className="sidebar-stat-row">
            <span className="sidebar-stat-label">⚡ XP</span>
            <span className="sidebar-stat-value">{xp}</span>
          </div>
          <div className="sidebar-stat-row">
            <span className="sidebar-stat-label">🔥 Streak</span>
            <span className="sidebar-stat-value">{streak} days</span>
          </div>
          <div className="sidebar-stat-row">
            <span className="sidebar-stat-label">✅ Topics</span>
            <span className="sidebar-stat-value">{completed}</span>
          </div>
        </div>
      </aside>
    </>
  );
}
