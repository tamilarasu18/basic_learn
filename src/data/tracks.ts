export interface Track {
  id: string;
  name: string;
  icon: string;
  description: string;
  gradient: string;
  status: "active" | "coming-soon";
  topicCount: number;
  estimatedHours: number;
}

export const tracks: Track[] = [
  {
    id: "dsa",
    name: "Data Structures & Algorithms",
    icon: "🧮",
    description:
      "Master problem-solving patterns from arrays to graphs. 6-month structured roadmap with interactive visualizations.",
    gradient: "var(--gradient-purple)",
    status: "active",
    topicCount: 36,
    estimatedHours: 120,
  },
  {
    id: "nextjs",
    name: "Next.js",
    icon: "⚛️",
    description:
      "Build full-stack React applications with SSR, API routes, middleware, and modern deployment strategies.",
    gradient: "var(--gradient-blue)",
    status: "active",
    topicCount: 30,
    estimatedHours: 80,
  },
  {
    id: "angular",
    name: "Angular",
    icon: "🅰️",
    description:
      "Enterprise-grade frontend development with components, services, RxJS, and reactive forms.",
    gradient: "var(--gradient-red)",
    status: "active",
    topicCount: 28,
    estimatedHours: 90,
  },
  {
    id: "flutter",
    name: "Flutter",
    icon: "📱",
    description:
      "Cross-platform mobile development with widgets, state management, and beautiful animations.",
    gradient: "var(--gradient-cyan)",
    status: "active",
    topicCount: 32,
    estimatedHours: 85,
  },
  {
    id: "fastapi",
    name: "FastAPI",
    icon: "⚡",
    description:
      "Build blazing-fast Python APIs with automatic docs, Pydantic validation, and async support.",
    gradient: "var(--gradient-green)",
    status: "active",
    topicCount: 24,
    estimatedHours: 60,
  },
  {
    id: "ai-ml",
    name: "AI / Machine Learning",
    icon: "🤖",
    description:
      "From Python basics to neural networks. Learn NumPy, Pandas, Scikit-learn, and deep learning fundamentals.",
    gradient: "var(--gradient-orange)",
    status: "active",
    topicCount: 40,
    estimatedHours: 150,
  },
  {
    id: "csharp",
    name: "C# & .NET",
    icon: "🔷",
    description:
      "Modern C# development with OOP, LINQ, ASP.NET Core, Entity Framework, and design patterns.",
    gradient: "var(--gradient-pink)",
    status: "active",
    topicCount: 35,
    estimatedHours: 100,
  },
  {
    id: "genai",
    name: "Generative AI",
    icon: "✨",
    description:
      "Prompt engineering, LLM APIs, RAG pipelines, fine-tuning, and building AI agents from scratch.",
    gradient: "var(--gradient-yellow)",
    status: "active",
    topicCount: 20,
    estimatedHours: 50,
  },
];
