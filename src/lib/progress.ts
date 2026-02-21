const STORAGE_KEY = "basiclearning_progress";

export interface ProgressData {
  completedTopics: string[];
  xp: number;
  streak: number;
  lastVisit: string;
  quizScores: Record<string, number>;
}

function getDefaultProgress(): ProgressData {
  return {
    completedTopics: [],
    xp: 0,
    streak: 0,
    lastVisit: "",
    quizScores: {},
  };
}

export function getProgress(): ProgressData {
  if (typeof window === "undefined") return getDefaultProgress();
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return getDefaultProgress();
    return JSON.parse(data);
  } catch {
    return getDefaultProgress();
  }
}

function saveProgress(data: ProgressData) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function markTopicComplete(topicId: string): number {
  const p = getProgress();
  if (!p.completedTopics.includes(topicId)) {
    p.completedTopics.push(topicId);
    p.xp += 50;
  }
  const today = new Date().toDateString();
  if (p.lastVisit !== today) {
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    p.streak = p.lastVisit === yesterday ? p.streak + 1 : 1;
    p.lastVisit = today;
  }
  saveProgress(p);
  return p.xp;
}

export function saveQuizScore(
  topicId: string,
  score: number,
  total: number,
): number {
  const p = getProgress();
  const pct = Math.round((score / total) * 100);
  const prevPct = p.quizScores[topicId] || 0;
  if (pct > prevPct) {
    p.quizScores[topicId] = pct;
    const xpGain = Math.round((score / total) * 30);
    p.xp += xpGain;
    saveProgress(p);
    return xpGain;
  }
  saveProgress(p);
  return 0;
}

export function isTopicCompleted(topicId: string): boolean {
  return getProgress().completedTopics.includes(topicId);
}

export function getCompletedCount(topicIds: string[]): number {
  const completed = getProgress().completedTopics;
  return topicIds.filter((id) => completed.includes(id)).length;
}

export function updateStreak(): void {
  const p = getProgress();
  const today = new Date().toDateString();
  if (p.lastVisit !== today) {
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    p.streak = p.lastVisit === yesterday ? p.streak + 1 : 1;
    p.lastVisit = today;
    saveProgress(p);
  }
}
