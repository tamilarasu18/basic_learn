import { Section } from "./types";

export const flutterSections: Section[] = [
  {
    id: 1,
    title: "Flutter Fundamentals",
    icon: "📱",
    topics: [
      {
        id: "flutter-intro",
        title: "What is Flutter?",
        difficulty: "easy",
        shortDesc: "Cross-platform UI toolkit by Google",
        theory:
          "<h3>Flutter Overview</h3><p>Flutter is Google's UI toolkit for building natively compiled apps for mobile, web, and desktop from a single Dart codebase.</p><h3>Why Flutter?</h3><ul><li><strong>Single codebase</strong> — iOS, Android, Web, Desktop</li><li><strong>Hot Reload</strong> — instant UI updates</li><li><strong>Widget-based</strong> — everything is a widget</li><li><strong>Native performance</strong> — compiled to ARM code</li></ul>",
        codeExample: `// Flutter uses Dart language\n// Basic Dart syntax\n\nfunction main() {\n  // Variables\n  const name = "Flutter";\n  let version = 3.0;\n  console.log("Hello " + name + " " + version);\n  \n  // Dart types (shown in JS)\n  const types = {\n    int: 42,\n    double: 3.14,\n    String: "Hello",\n    bool: true,\n    List: [1, 2, 3],\n    Map: { key: "value" }\n  };\n  \n  for (const [type, val] of Object.entries(types)) {\n    console.log(type + ": " + JSON.stringify(val));\n  }\n}\n\nmain();`,
        quiz: [
          {
            question: "Flutter uses which programming language?",
            options: ["JavaScript", "Kotlin", "Dart", "Swift"],
            answer: 2,
          },
          {
            question: "Flutter compiles to?",
            options: [
              "Web only",
              "Native ARM code",
              "Java bytecode",
              "Interpreted code",
            ],
            answer: 1,
          },
        ],
      },
      {
        id: "widgets",
        title: "Widgets",
        difficulty: "easy",
        shortDesc: "Everything in Flutter is a widget",
        theory:
          "<h3>Widget Tree</h3><p>Flutter UIs are built by composing widgets. Two types:</p><ul><li><strong>StatelessWidget</strong> — immutable, no internal state</li><li><strong>StatefulWidget</strong> — mutable, has internal state with setState()</li></ul><h3>Common Widgets</h3><p>Container, Text, Row, Column, Stack, ListView, Scaffold, AppBar, ElevatedButton</p>",
        codeExample: `// Widget concepts in JS\nclass StatelessWidget {\n  constructor(props) { this.props = props; }\n  build() { return "UI based on " + JSON.stringify(this.props); }\n}\n\nclass StatefulWidget {\n  constructor() { this.state = { count: 0 }; }\n  setState(newState) {\n    Object.assign(this.state, newState);\n    console.log("State updated, rebuild UI:", this.state);\n  }\n  increment() { this.setState({ count: this.state.count + 1 }); }\n}\n\nconst greeting = new StatelessWidget({ text: "Hello Flutter!" });\nconsole.log(greeting.build());\n\nconst counter = new StatefulWidget();\nconsole.log("Initial state:", counter.state);\ncounter.increment();\ncounter.increment();\ncounter.increment();`,
        quiz: [
          {
            question: "StatefulWidget uses ___ to update UI",
            options: ["render()", "setState()", "update()", "refresh()"],
            answer: 1,
          },
        ],
      },
      {
        id: "layouts",
        title: "Layout Widgets",
        difficulty: "easy",
        shortDesc: "Row, Column, Stack, and responsive design",
        theory:
          "<h3>Layout in Flutter</h3><ul><li><strong>Row</strong> — horizontal layout</li><li><strong>Column</strong> — vertical layout</li><li><strong>Stack</strong> — overlay widgets</li><li><strong>Expanded/Flexible</strong> — control how children fill space</li><li><strong>Padding/SizedBox</strong> — spacing</li></ul>",
        codeExample: `// Layout concepts\nfunction Row(...children) {\n  console.log("Row (horizontal): [" + children.join(" | ") + "]");\n}\n\nfunction Column(...children) {\n  children.forEach(c => console.log("  " + c));\n}\n\nconsole.log("=== Row Layout ===");\nRow("Icon", "Title", "Button");\n\nconsole.log("\\n=== Column Layout ===");\nColumn("Header", "Content Area", "Footer");\n\nconsole.log("\\n=== Flex Properties ===");\nconsole.log("MainAxisAlignment: start | center | end | spaceBetween");\nconsole.log("CrossAxisAlignment: start | center | end | stretch");`,
        quiz: [
          {
            question: "Which widget arranges children horizontally?",
            options: ["Column", "Row", "Stack", "ListView"],
            answer: 1,
          },
        ],
      },
      {
        id: "state-management",
        title: "State Management",
        difficulty: "hard",
        shortDesc: "Provider, Riverpod, BLoC patterns",
        theory:
          "<h3>State Management Solutions</h3><ul><li><strong>setState</strong> — simple, local state</li><li><strong>Provider</strong> — recommended by Flutter team</li><li><strong>Riverpod</strong> — improved Provider, compile-safe</li><li><strong>BLoC</strong> — Business Logic Component pattern</li><li><strong>GetX</strong> — simple but powerful</li></ul>",
        codeExample: `// Provider pattern (simplified)\nclass ChangeNotifier {\n  constructor() { this.listeners = []; }\n  addListener(fn) { this.listeners.push(fn); }\n  notifyListeners() { this.listeners.forEach(fn => fn()); }\n}\n\nclass CounterProvider extends ChangeNotifier {\n  constructor() { super(); this.count = 0; }\n  increment() {\n    this.count++;\n    console.log("Counter:", this.count);\n    this.notifyListeners();\n  }\n}\n\nconst provider = new CounterProvider();\nprovider.addListener(() => console.log("UI rebuilt! Count:", provider.count));\n\nprovider.increment();\nprovider.increment();\nprovider.increment();`,
        quiz: [
          {
            question: "Which state management is recommended by Flutter team?",
            options: ["Redux", "MobX", "Provider", "GetX"],
            answer: 2,
          },
        ],
      },
      {
        id: "navigation",
        title: "Navigation & Routing",
        difficulty: "medium",
        shortDesc: "Navigate between screens",
        theory:
          "<h3>Flutter Navigation</h3><ul><li><strong>Navigator.push/pop</strong> — imperative navigation</li><li><strong>Named routes</strong> — string-based routing</li><li><strong>GoRouter</strong> — declarative routing (recommended)</li></ul>",
        codeExample: `// Navigation concepts\nclass Navigator {\n  constructor() { this.stack = ['Home']; }\n  push(route) {\n    this.stack.push(route);\n    console.log("Navigated to:", route);\n    console.log("Stack:", this.stack.join(" → "));\n  }\n  pop() {\n    const removed = this.stack.pop();\n    console.log("Popped:", removed);\n    console.log("Stack:", this.stack.join(" → "));\n  }\n}\n\nconst nav = new Navigator();\nnav.push("Products");\nnav.push("Product Detail");\nnav.push("Cart");\nnav.pop();\nnav.pop();`,
        quiz: [
          {
            question: "Navigator.pop() does what?",
            options: [
              "Goes forward",
              "Goes back to previous screen",
              "Closes the app",
              "Opens a dialog",
            ],
            answer: 1,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Advanced Flutter",
    icon: "🎨",
    topics: [
      {
        id: "animations",
        title: "Animations",
        difficulty: "hard",
        shortDesc: "Implicit and explicit animations",
        theory:
          "<h3>Flutter Animations</h3><ul><li><strong>Implicit</strong> — AnimatedContainer, AnimatedOpacity (simple)</li><li><strong>Explicit</strong> — AnimationController + Tween (full control)</li><li><strong>Hero</strong> — shared element transitions</li></ul>",
        codeExample: `// Animation concepts\nclass AnimationController {\n  constructor(duration) {\n    this.duration = duration;\n    this.value = 0;\n  }\n  forward() {\n    const steps = 5;\n    for (let i = 0; i <= steps; i++) {\n      this.value = i / steps;\n      console.log("Animation: " + (this.value * 100).toFixed(0) + "% | value: " + this.value.toFixed(2));\n    }\n  }\n}\n\nclass Tween {\n  constructor(begin, end) { this.begin = begin; this.end = end; }\n  evaluate(t) { return this.begin + (this.end - this.begin) * t; }\n}\n\nconst controller = new AnimationController(300);\nconst opacity = new Tween(0.0, 1.0);\nconst size = new Tween(50, 200);\n\nconsole.log("=== Fade In + Scale Animation ===");\ncontroller.forward();`,
        quiz: [
          {
            question: "AnimatedContainer is which type of animation?",
            options: ["Explicit", "Implicit", "Hero", "Custom"],
            answer: 1,
          },
        ],
      },
      {
        id: "http-networking",
        title: "HTTP & Networking",
        difficulty: "medium",
        shortDesc: "API calls with http and dio packages",
        theory:
          "<h3>Networking in Flutter</h3><p>Use <code>http</code> package for simple requests or <code>dio</code> for advanced features (interceptors, cancellation, transformers).</p>",
        codeExample: `// API call pattern\nasync function fetchUsers() {\n  try {\n    console.log("Fetching users...");\n    // Simulated API response\n    const response = {\n      statusCode: 200,\n      body: JSON.stringify([\n        { id: 1, name: "Alice", email: "alice@example.com" },\n        { id: 2, name: "Bob", email: "bob@example.com" }\n      ])\n    };\n    \n    if (response.statusCode === 200) {\n      const users = JSON.parse(response.body);\n      users.forEach(u => console.log("User:", u.name, "-", u.email));\n      return users;\n    }\n  } catch (e) {\n    console.log("Error:", e.message);\n  }\n}\n\nfetchUsers();`,
        quiz: [
          {
            question: "Which package offers interceptors in Flutter?",
            options: ["http", "dio", "fetch", "axios"],
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
        id: "flutter-widget-lifecycle",
        title: "Widget Lifecycle Deep Dive",
        difficulty: "hard",
        shortDesc: "StatefulWidget lifecycle and rebuild triggers",
        theory: `<h3>Widget Lifecycle</h3><ol><li><strong>createState()</strong> — called once when widget first inserted</li><li><strong>initState()</strong> — initialize state, called once</li><li><strong>didChangeDependencies()</strong> — when inherited widget changes</li><li><strong>build()</strong> — called on every rebuild</li><li><strong>didUpdateWidget()</strong> — when parent rebuilds with new config</li><li><strong>setState()</strong> — triggers rebuild</li><li><strong>dispose()</strong> — cleanup (cancel timers, close streams)</li></ol><div class="info-box"><div class="info-box-title">💡 Interview Tip</div>Always mention dispose() for cleanup — forgetting it causes memory leaks.</div>`,
        codeExample: `// Flutter widget lifecycle simulation
class StatefulWidget {
  constructor(name) { this.name = name; this.state = null; }
  createState() {
    this.state = { mounted: true, buildCount: 0 };
    console.log("1. createState() — " + this.name);
    return this.state;
  }
  initState() {
    console.log("2. initState() — one-time setup");
    console.log("   Subscribe to streams, start animations here");
  }
  didChangeDependencies() {
    console.log("3. didChangeDependencies() — inherited widget changed");
  }
  build() {
    this.state.buildCount++;
    console.log("4. build() #" + this.state.buildCount + " — returns widget tree");
  }
  setState(fn) {
    fn();
    console.log("   setState() called → triggers rebuild");
    this.build();
  }
  dispose() {
    this.state.mounted = false;
    console.log("7. dispose() — cleanup! Cancel timers, close streams");
  }
}

const widget = new StatefulWidget("CounterPage");
widget.createState();
widget.initState();
widget.didChangeDependencies();
widget.build();
widget.setState(() => console.log("   Incrementing counter..."));
widget.dispose();`,
        quiz: [
          {
            question: "Where should you cancel stream subscriptions?",
            options: ["initState()", "build()", "dispose()", "setState()"],
            answer: 2,
          },
          {
            question: "build() is called?",
            options: [
              "Once",
              "On every setState",
              "Only on initState",
              "Never",
            ],
            answer: 1,
          },
        ],
      },
      {
        id: "flutter-state-comparison",
        title: "State Management Comparison",
        difficulty: "medium",
        shortDesc: "Provider vs Riverpod vs BLoC vs GetX",
        theory: `<h3>Interview Favorite: State Management</h3><ul><li><strong>setState</strong> — simple local state, bad for complex apps</li><li><strong>Provider</strong> — Google recommended, ChangeNotifier pattern</li><li><strong>Riverpod</strong> — improved Provider, compile-safe, testable</li><li><strong>BLoC</strong> — event-driven, great for large teams</li><li><strong>GetX</strong> — simple API, less boilerplate, debated best practices</li></ul><p>Know trade-offs: BLoC has more boilerplate but better testability. GetX is quick but tightly couples to framework.</p>`,
        codeExample: `// State management approaches compared
const approaches = {
  "setState": {
    complexity: "Low",
    scalability: "❌ Poor",
    testability: "❌ Hard",
    bestFor: "Simple counters, toggles"
  },
  "Provider": {
    complexity: "Medium",
    scalability: "✅ Good",
    testability: "✅ Good",
    bestFor: "Medium apps, Google recommended"
  },
  "Riverpod": {
    complexity: "Medium",
    scalability: "✅ Excellent",
    testability: "✅ Excellent",
    bestFor: "Apps needing compile-safe DI"
  },
  "BLoC": {
    complexity: "High",
    scalability: "✅ Excellent",
    testability: "✅ Excellent",
    bestFor: "Enterprise apps, large teams"
  },
  "GetX": {
    complexity: "Low",
    scalability: "⚠️ Medium",
    testability: "⚠️ Medium",
    bestFor: "Rapid prototyping"
  }
};

Object.entries(approaches).forEach(([name, info]) => {
  console.log("=== " + name + " ===");
  Object.entries(info).forEach(([k, v]) => console.log("  " + k + ": " + v));
  console.log("");
});`,
        quiz: [
          {
            question: "Which state manager is compile-safe?",
            options: ["Provider", "Riverpod", "setState", "GetX"],
            answer: 1,
          },
          {
            question: "BLoC is best for?",
            options: [
              "Quick prototypes",
              "Enterprise apps with large teams",
              "Simple counters",
              "Animations",
            ],
            answer: 1,
          },
        ],
      },
      {
        id: "flutter-top-questions",
        title: "Top Flutter Questions",
        difficulty: "medium",
        shortDesc: "Most asked Flutter interview questions",
        theory: `<h3>Commonly Asked</h3><ol><li>What is the difference between Hot Reload and Hot Restart?</li><li>Stateless vs Stateful widget?</li><li>What are Keys in Flutter and when to use them?</li><li>Explain the widget tree, element tree, and render tree</li><li>How does Flutter achieve 60fps?</li><li>What is the build context?</li><li>Navigator 1.0 vs 2.0 (GoRouter)?</li><li>How to handle platform-specific code?</li></ol>`,
        codeExample: `// Common Flutter interview answers
const qa = [
  {
    q: "Hot Reload vs Hot Restart?",
    a: "Hot Reload: preserves state, injects updated code. Hot Restart: full restart, loses state."
  },
  {
    q: "What are Keys?",
    a: "Keys preserve widget state when widgets move in the tree. Use ValueKey for lists with unique data."
  },
  {
    q: "How does Flutter achieve 60fps?",
    a: "Skia rendering engine draws directly to canvas. No bridge to native views (unlike React Native)."
  },
  {
    q: "Widget vs Element vs RenderObject?",
    a: "Widget: immutable config. Element: manages lifecycle. RenderObject: handles layout and painting."
  },
  {
    q: "When to use const constructors?",
    a: "Always when possible — prevents unnecessary rebuilds. const MyWidget() won't rebuild if parent rebuilds."
  }
];

console.log("=== Top Flutter Interview Q&A ===\\n");
qa.forEach((item, i) => {
  console.log((i+1) + ". " + item.q);
  console.log("   → " + item.a + "\\n");
});`,
        quiz: [
          {
            question: "Hot Reload preserves state?",
            options: ["True", "False"],
            answer: 0,
          },
          {
            question: "Flutter renders using?",
            options: [
              "Native UI widgets",
              "WebView",
              "Skia engine directly on canvas",
              "HTML/CSS",
            ],
            answer: 2,
          },
        ],
      },
    ],
  },
];
