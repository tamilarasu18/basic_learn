export interface QuizQuestion {
  question: string;
  options: string[];
  answer: number;
}

export interface Topic {
  id: string;
  title: string;
  difficulty: "easy" | "medium" | "hard";
  shortDesc: string;
  theory: string;
  codeExample: string;
  quiz: QuizQuestion[];
}

export interface Section {
  id: number;
  title: string;
  icon: string;
  topics: Topic[];
}

export interface TrackData {
  trackId: string;
  sections: Section[];
}
