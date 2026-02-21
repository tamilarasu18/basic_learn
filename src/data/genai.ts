import { Section } from "./types";

export const genaiSections: Section[] = [
  {
    id: 1,
    title: "Foundations",
    icon: "🌟",
    topics: [
      {
        id: "genai-intro",
        title: "What is Generative AI?",
        difficulty: "easy",
        shortDesc: "Understanding LLMs, diffusion models, and beyond",
        theory:
          "<h3>Generative AI</h3><p>AI that creates new content — text (ChatGPT), images (DALL-E, Midjourney), code (Copilot), audio, video. Powered by large neural networks trained on massive datasets.</p><h3>Key Models</h3><ul><li><strong>LLMs</strong> — GPT, Claude, Gemini, Llama</li><li><strong>Image Gen</strong> — Stable Diffusion, DALL-E</li><li><strong>Code</strong> — Copilot, CodeLlama</li></ul>",
        codeExample: `// GenAI model types\nconst models = {\n  "Text (LLMs)": ["GPT-4", "Claude", "Gemini", "Llama 3"],\n  "Image": ["DALL-E 3", "Midjourney", "Stable Diffusion"],\n  "Code": ["GitHub Copilot", "CodeLlama", "StarCoder"],\n  "Audio": ["Whisper", "ElevenLabs", "Bark"],\n  "Video": ["Sora", "Runway", "Pika"]\n};\n\nfor (const [type, list] of Object.entries(models)) {\n  console.log(type + ":");\n  list.forEach(m => console.log("  • " + m));\n}\n\nconsole.log("\\nKey concept: These models learn PATTERNS");\nconsole.log("from data and generate NEW content");`,
        quiz: [
          {
            question: "ChatGPT is based on which type of model?",
            options: ["CNN", "RNN", "Transformer (LLM)", "GAN"],
            answer: 2,
          },
          {
            question: "Generative AI creates?",
            options: [
              "Only text",
              "Only images",
              "New content across modalities",
              "Only code",
            ],
            answer: 2,
          },
        ],
      },
      {
        id: "prompt-engineering",
        title: "Prompt Engineering",
        difficulty: "easy",
        shortDesc: "Craft effective prompts for LLMs",
        theory:
          "<h3>Prompt Engineering</h3><p>The art of writing effective inputs to get desired outputs from LLMs.</p><h3>Techniques</h3><ul><li><strong>Zero-shot</strong> — no examples</li><li><strong>Few-shot</strong> — provide examples</li><li><strong>Chain of Thought</strong> — step-by-step reasoning</li><li><strong>System prompts</strong> — set persona/rules</li></ul>",
        codeExample: `// Prompt engineering patterns\nconst prompts = {\n  "Zero-shot": "Translate 'Hello World' to French",\n  "Few-shot": [\n    "English: Hello → French: Bonjour",\n    "English: Goodbye → French: Au revoir",\n    "English: Thank you → French: ???"\n  ],\n  "Chain of Thought": [\n    "Problem: If a store has 45 apples and sells 12, how many are left?",\n    "Let me think step by step:",\n    "1. Starting apples: 45",\n    "2. Apples sold: 12",\n    "3. Remaining: 45 - 12 = 33",\n    "Answer: 33 apples"\n  ],\n  "System Prompt": "You are a senior Python developer. Respond with code examples and clear explanations."\n};\n\nfor (const [technique, content] of Object.entries(prompts)) {\n  console.log("=== " + technique + " ===");\n  if (Array.isArray(content)) content.forEach(l => console.log("  " + l));\n  else console.log("  " + content);\n  console.log("");\n}`,
        quiz: [
          {
            question: "Few-shot prompting provides?",
            options: [
              "No examples",
              "One example",
              "Multiple examples",
              "Only system prompts",
            ],
            answer: 2,
          },
        ],
      },
      {
        id: "llm-apis",
        title: "Working with LLM APIs",
        difficulty: "medium",
        shortDesc: "OpenAI, Google Gemini, and Claude APIs",
        theory:
          "<h3>LLM APIs</h3><p>Most GenAI apps use API calls to hosted models. Common providers: OpenAI, Google, Anthropic. Key parameters: temperature, max_tokens, top_p, system message.</p>",
        codeExample: `// LLM API call pattern\nasync function chatCompletion(messages, options = {}) {\n  const config = {\n    model: options.model || "gpt-4",\n    temperature: options.temperature || 0.7,\n    max_tokens: options.max_tokens || 1000,\n    messages: messages\n  };\n  \n  console.log("API Request:");\n  console.log("  Model:", config.model);\n  console.log("  Temperature:", config.temperature);\n  console.log("  Messages:", config.messages.length);\n  config.messages.forEach(m => console.log("    [" + m.role + "]:", m.content.substring(0, 50)));\n  \n  // Simulated response\n  return { content: "AI-generated response here", tokens: 42 };\n}\n\nconst messages = [\n  { role: "system", content: "You are a helpful coding assistant" },\n  { role: "user", content: "Explain recursion in simple terms" }\n];\n\nchatCompletion(messages, { temperature: 0.3 });\n\nconsole.log("\\nTemperature guide:");\nconsole.log("  0.0 = deterministic (factual)");\nconsole.log("  0.7 = balanced (default)");\nconsole.log("  1.0 = creative (brainstorming)");`,
        quiz: [
          {
            question: "Temperature of 0 means?",
            options: [
              "Random output",
              "Deterministic output",
              "No output",
              "Creative output",
            ],
            answer: 1,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Building AI Apps",
    icon: "🔨",
    topics: [
      {
        id: "rag",
        title: "RAG Pipelines",
        difficulty: "hard",
        shortDesc: "Retrieval Augmented Generation for custom knowledge",
        theory:
          "<h3>RAG (Retrieval Augmented Generation)</h3><p>Combine LLMs with your own data. Instead of fine-tuning, RAG retrieves relevant context from a knowledge base and includes it in the prompt.</p><h3>Pipeline</h3><ol><li>Ingest documents → chunk → embed → store in vector DB</li><li>Query → embed → search vector DB → retrieve relevant chunks</li><li>Combine chunks + query → send to LLM → response</li></ol>",
        codeExample: `// RAG pipeline concept\n// Step 1: Create embeddings (simplified as word frequency)\nfunction embed(text) {\n  const words = text.toLowerCase().split(/\\W+/).filter(Boolean);\n  const freq = {};\n  words.forEach(w => freq[w] = (freq[w] || 0) + 1);\n  return freq;\n}\n\n// Step 2: Similarity search\nfunction cosineSimilarity(a, b) {\n  const keys = new Set([...Object.keys(a), ...Object.keys(b)]);\n  let dot = 0, magA = 0, magB = 0;\n  keys.forEach(k => { dot += (a[k]||0) * (b[k]||0); magA += (a[k]||0)**2; magB += (b[k]||0)**2; });\n  return dot / (Math.sqrt(magA) * Math.sqrt(magB) || 1);\n}\n\n// Knowledge base\nconst docs = [\n  "JavaScript is a programming language for web development",\n  "Python is great for machine learning and data science",\n  "React is a JavaScript library for building user interfaces"\n];\n\nconst docEmbeddings = docs.map(d => embed(d));\n\n// Query\nconst query = "What language is used for ML?";\nconst queryEmbed = embed(query);\n\nconsole.log("Query:", query);\nconst scores = docEmbeddings.map((e, i) => ({doc: docs[i], score: cosineSimilarity(queryEmbed, e)}));\nscores.sort((a,b) => b.score - a.score);\nscores.forEach(s => console.log("  [" + s.score.toFixed(3) + "]", s.doc));`,
        quiz: [
          {
            question: "RAG stands for?",
            options: [
              "Random Access Generation",
              "Retrieval Augmented Generation",
              "Rapid AI Growth",
              "Real-time Automated Grounding",
            ],
            answer: 1,
          },
        ],
      },
      {
        id: "ai-agents",
        title: "AI Agents",
        difficulty: "hard",
        shortDesc: "Build autonomous AI agents with tools",
        theory:
          "<h3>AI Agents</h3><p>Agents are LLMs that can use tools (search, code execution, APIs) to accomplish tasks autonomously. They follow a loop: Think → Act → Observe → Repeat.</p><h3>Key Concepts</h3><ul><li><strong>Tool use</strong> — functions the agent can call</li><li><strong>Planning</strong> — break tasks into steps</li><li><strong>Memory</strong> — conversation history and context</li></ul>",
        codeExample: `// AI Agent concept\nclass AIAgent {\n  constructor(tools) {\n    this.tools = tools;\n    this.memory = [];\n  }\n  \n  think(task) {\n    console.log("🤔 Thinking:", task);\n    // Determine which tool to use\n    for (const tool of this.tools) {\n      if (task.toLowerCase().includes(tool.keyword)) return tool;\n    }\n    return null;\n  }\n  \n  act(tool, input) {\n    console.log("🔧 Using tool:", tool.name);\n    const result = tool.execute(input);\n    console.log("📋 Result:", result);\n    this.memory.push({ tool: tool.name, input, result });\n    return result;\n  }\n}\n\nconst tools = [\n  { name: "Calculator", keyword: "calculate", execute: (expr) => eval(expr) + "" },\n  { name: "Search", keyword: "search", execute: (q) => "Results for: " + q },\n  { name: "Weather", keyword: "weather", execute: (city) => city + ": 25°C, Sunny" },\n];\n\nconst agent = new AIAgent(tools);\nconst tasks = ["calculate 15 * 23", "search for Next.js docs", "weather in Tokyo"];\ntasks.forEach(task => {\n  const tool = agent.think(task);\n  if (tool) agent.act(tool, task.split(tool.keyword)[1].trim());\n  console.log("");\n});`,
        quiz: [
          {
            question: "AI Agent loop is?",
            options: [
              "Input → Output",
              "Think → Act → Observe",
              "Train → Test",
              "Encode → Decode",
            ],
            answer: 1,
          },
        ],
      },
      {
        id: "fine-tuning",
        title: "Fine-Tuning Models",
        difficulty: "hard",
        shortDesc: "Customize LLMs for specific tasks",
        theory:
          "<h3>Fine-Tuning</h3><p>Adapt a pre-trained model to your specific domain by training it further on specialized data. Methods:</p><ul><li><strong>Full fine-tuning</strong> — update all weights (expensive)</li><li><strong>LoRA/QLoRA</strong> — update small adapter layers (efficient)</li><li><strong>Instruction tuning</strong> — teach model to follow instructions</li></ul>",
        codeExample: `// Fine-tuning concept\nclass PreTrainedModel {\n  constructor(knowledge) {\n    this.knowledge = knowledge;\n    this.fineTuned = {};\n  }\n  \n  predict(input) {\n    // Check fine-tuned knowledge first\n    if (this.fineTuned[input]) return this.fineTuned[input];\n    // Fall back to general knowledge\n    return this.knowledge[input] || "I don't know about: " + input;\n  }\n  \n  fineTune(trainingData) {\n    console.log("Fine-tuning with", trainingData.length, "examples...");\n    trainingData.forEach(({input, output}) => {\n      this.fineTuned[input] = output;\n    });\n    console.log("Fine-tuning complete!");\n  }\n}\n\nconst model = new PreTrainedModel({\n  "capital of France": "Paris",\n  "2+2": "4"\n});\n\nconsole.log("Before fine-tuning:");\nconsole.log(model.predict("capital of France"));\nconsole.log(model.predict("company policy"));\n\nmodel.fineTune([\n  { input: "company policy", output: "Remote work allowed 3 days/week" },\n  { input: "vacation days", output: "25 days per year" },\n]);\n\nconsole.log("\\nAfter fine-tuning:");\nconsole.log(model.predict("company policy"));\nconsole.log(model.predict("vacation days"));`,
        quiz: [
          {
            question: "LoRA fine-tuning is popular because?",
            options: [
              "It's free",
              "It trains faster with less resources",
              "It works without data",
              "It replaces the model",
            ],
            answer: 1,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Interview Prep",
    icon: "🎯",
    topics: [
      {
        id: "genai-transformers",
        title: "Transformer Architecture",
        difficulty: "hard",
        shortDesc: "Attention mechanism and how LLMs work",
        theory: `<h3>The Transformer</h3><p>Foundation of all modern LLMs. Introduced in "Attention Is All You Need" (2017).</p><ul><li><strong>Self-Attention</strong> — each token attends to all others, learns relationships</li><li><strong>Multi-Head Attention</strong> — multiple attention heads capture different patterns</li><li><strong>Positional Encoding</strong> — adds position info (transformers have no inherent order)</li><li><strong>Feed-Forward Network</strong> — processes each position independently</li></ul><div class="info-box"><div class="info-box-title">💡 Interview Key</div>Be able to explain: "Self-attention lets the model weigh the importance of every other word when processing each word."</div>`,
        codeExample: `// Simplified self-attention mechanism
function selfAttention(tokens) {
  // Each token creates Query, Key, Value vectors
  // Attention(Q,K,V) = softmax(Q·K^T / √d) · V
  
  const n = tokens.length;
  console.log("Input tokens:", tokens.join(", "));
  
  // Simulated attention scores (which tokens attend to which)
  const attentionMatrix = [];
  for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < n; j++) {
      // Higher score = more attention
      row.push(Math.random().toFixed(2));
    }
    // Normalize (softmax simplified)
    const sum = row.reduce((s, v) => s + parseFloat(v), 0);
    attentionMatrix.push(row.map(v => (parseFloat(v) / sum).toFixed(2)));
  }
  
  console.log("\\nAttention Matrix (who attends to whom):");
  console.log("       " + tokens.map(t => t.padEnd(8)).join(""));
  tokens.forEach((t, i) => {
    console.log(t.padEnd(7) + attentionMatrix[i].map(v => v.padEnd(8)).join(""));
  });
}

selfAttention(["The", "cat", "sat", "on", "mat"]);

console.log("\\nKey insight: 'sat' attends strongly to 'cat' (subject)");
console.log("and 'mat' (location) — learning relationships!");`,
        quiz: [
          {
            question: "Transformers use which key mechanism?",
            options: ["Recurrence", "Convolution", "Self-Attention", "Pooling"],
            answer: 2,
          },
          {
            question: "'Attention Is All You Need' was published in?",
            options: ["2015", "2017", "2019", "2022"],
            answer: 1,
          },
        ],
      },
      {
        id: "genai-hallucinations",
        title: "Hallucinations & Safety",
        difficulty: "medium",
        shortDesc: "LLM limitations and mitigation strategies",
        theory: `<h3>LLM Limitations</h3><ul><li><strong>Hallucinations</strong> — generating convincing but false information</li><li><strong>Bias</strong> — reflecting training data biases</li><li><strong>Context window</strong> — limited input/output length</li><li><strong>Knowledge cutoff</strong> — training data has a date limit</li></ul><h3>Mitigation Strategies</h3><ul><li>RAG — ground responses in real documents</li><li>Guardrails — input/output filtering</li><li>Temperature 0 — more deterministic outputs</li><li>Chain of Thought — step-by-step reasoning reduces errors</li><li>Human-in-the-loop — review before action</li></ul>`,
        codeExample: `// Hallucination detection strategies
const strategies = {
  "RAG (Retrieval)": {
    how: "Retrieve relevant docs → include in context",
    effectiveness: "⭐⭐⭐⭐ — grounds answers in real data",
    example: "Before: 'What's our policy?' → hallucinated answer. After: retrieves policy doc → accurate quote."
  },
  "Guardrails": {
    how: "Filter inputs/outputs for safety, relevance",
    effectiveness: "⭐⭐⭐ — catches harmful content",
    example: "Block: prompt injection, off-topic queries, PII in output"
  },
  "Low Temperature": {
    how: "Set temperature=0 for factual tasks",
    effectiveness: "⭐⭐ — reduces randomness",
    example: "For code generation and factual Q&A"
  },
  "Chain of Thought": {
    how: "Ask model to reason step-by-step",
    effectiveness: "⭐⭐⭐ — reduces logical errors",
    example: "'Let me think step by step...' prompt prefix"
  },
  "Citation Requirement": {
    how: "Ask model to cite sources for claims",
    effectiveness: "⭐⭐⭐ — makes verification possible",
    example: "Always include source document and page number"
  }
};

Object.entries(strategies).forEach(([name, info]) => {
  console.log("📋 " + name);
  console.log("  How: " + info.how);
  console.log("  Rating: " + info.effectiveness);
  console.log("  Example: " + info.example + "\\n");
});`,
        quiz: [
          {
            question: "Best mitigation for hallucinations?",
            options: [
              "Bigger model",
              "RAG with verified sources",
              "Higher temperature",
              "Longer prompts",
            ],
            answer: 1,
          },
          {
            question: "Knowledge cutoff means?",
            options: [
              "Model stops learning",
              "Training data has a date limit",
              "API has rate limits",
              "Context is full",
            ],
            answer: 1,
          },
        ],
      },
      {
        id: "genai-top-questions",
        title: "Top GenAI Interview Questions",
        difficulty: "medium",
        shortDesc: "Essential questions for AI/GenAI interviews",
        theory: `<h3>Frequently Asked</h3><ol><li>How do LLMs generate text (autoregressive)?</li><li>Explain tokenization (BPE, SentencePiece)</li><li>What is fine-tuning vs RAG? When to use each?</li><li>How do embeddings work?</li><li>Explain RLHF (Reinforcement Learning from Human Feedback)</li><li>What are guardrails and why needed?</li><li>Cost optimization for LLM applications?</li><li>Evaluate quality of generative AI outputs?</li></ol>`,
        codeExample: `// GenAI interview answers
const qa = [
  {
    q: "How do LLMs generate text?",
    a: "Autoregressive: predict next token based on all previous tokens. Repeat until stop token or max length."
  },
  {
    q: "Fine-tuning vs RAG?",
    a: "Fine-tune: change model behavior/style. RAG: add knowledge without retraining. RAG is cheaper, try it first."
  },
  {
    q: "What are embeddings?",
    a: "Dense vector representations of text. Similar meanings → close vectors. Used for search, clustering, RAG."
  },
  {
    q: "What is RLHF?",
    a: "Train a reward model from human preferences, then use RL (PPO) to optimize the LLM against that reward."
  },
  {
    q: "Cost optimization?",
    a: "Caching, smaller models for simple tasks, prompt compression, batching requests, using open-source for non-critical tasks."
  },
  {
    q: "Tokenization?",
    a: "Splits text into subword tokens. 'unhappiness' → 'un' + 'happiness'. BPE merges frequent byte pairs iteratively."
  }
];

console.log("=== GenAI Interview Quick-Fire ===\\n");
qa.forEach((item, i) => {
  console.log((i+1) + ". " + item.q);
  console.log("   → " + item.a + "\\n");
});`,
        quiz: [
          {
            question: "LLMs generate text how?",
            options: [
              "All at once",
              "Autoregressive (token by token)",
              "Character by character",
              "Word by word",
            ],
            answer: 1,
          },
          {
            question: "RAG vs fine-tuning — try first?",
            options: [
              "Fine-tuning",
              "RAG (cheaper, no retraining)",
              "Both equally",
              "Neither",
            ],
            answer: 1,
          },
        ],
      },
    ],
  },
];
