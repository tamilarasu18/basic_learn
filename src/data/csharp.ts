import { Section } from "./types";

export const csharpSections: Section[] = [
  {
    id: 1,
    title: "C# Fundamentals",
    icon: "💎",
    topics: [
      {
        id: "csharp-intro",
        title: "C# Basics",
        difficulty: "easy",
        shortDesc: "Variables, types, and control flow",
        theory:
          "<h3>C# Overview</h3><p>C# is a modern, object-oriented language by Microsoft. Used for web (ASP.NET), desktop (WPF), games (Unity), and mobile (MAUI).</p><h3>Type System</h3><ul><li><strong>Value types</strong> — int, double, bool, struct</li><li><strong>Reference types</strong> — string, class, array, object</li><li><strong>var</strong> — implicit typing</li></ul>",
        codeExample: `// C# concepts in JS\n// Value types\nlet age = 25;        // int\nlet price = 19.99;   // double\nlet isActive = true; // bool\nlet name = "C#";     // string\n\nconsole.log("Variables:", name, age, price, isActive);\n\n// Control flow\nfor (let i = 0; i < 5; i++) {\n  if (i % 2 === 0) console.log(i + " is even");\n  else console.log(i + " is odd");\n}\n\n// String interpolation: $"Hello {name}"\nconsole.log("Hello " + name + "! Version: " + 12);\n\n// Switch expression (C# 8+)\nconst grade = 'B';\nconst result = { A: "Excellent", B: "Good", C: "Average", D: "Poor" }[grade] || "Unknown";\nconsole.log("Grade " + grade + ":", result);`,
        quiz: [
          {
            question: "C# is developed by?",
            options: ["Google", "Meta", "Microsoft", "Apple"],
            answer: 2,
          },
        ],
      },
      {
        id: "oop",
        title: "Object-Oriented Programming",
        difficulty: "medium",
        shortDesc: "Classes, inheritance, interfaces, polymorphism",
        theory:
          "<h3>OOP in C#</h3><ul><li><strong>Encapsulation</strong> — private/public access modifiers</li><li><strong>Inheritance</strong> — base/derived classes</li><li><strong>Polymorphism</strong> — virtual/override methods</li><li><strong>Abstraction</strong> — abstract classes and interfaces</li></ul>",
        codeExample: `// OOP concepts\nclass Animal {\n  constructor(name, sound) {\n    this.name = name;\n    this.sound = sound;\n  }\n  speak() { return this.name + " says " + this.sound; }\n}\n\nclass Dog extends Animal {\n  constructor(name) { super(name, "Woof!"); }\n  fetch(item) { return this.name + " fetches " + item; }\n}\n\nclass Cat extends Animal {\n  constructor(name) { super(name, "Meow!"); }\n  purr() { return this.name + " is purring..."; }\n}\n\nconst animals = [new Dog("Rex"), new Cat("Whiskers"), new Dog("Buddy")];\nanimals.forEach(a => console.log(a.speak()));\nconsole.log(animals[0].fetch("ball"));\nconsole.log(animals[1].purr());\nconsole.log("\\nPolymorphism: same method, different behavior!");`,
        quiz: [
          {
            question: "Which OOP principle hides internal details?",
            options: [
              "Inheritance",
              "Encapsulation",
              "Polymorphism",
              "Abstraction",
            ],
            answer: 1,
          },
        ],
      },
      {
        id: "linq",
        title: "LINQ",
        difficulty: "medium",
        shortDesc: "Language Integrated Query for data",
        theory:
          "<h3>LINQ (Language Integrated Query)</h3><p>Query collections with SQL-like syntax directly in C#. Works with arrays, lists, databases (Entity Framework), XML, and JSON.</p><h3>Key Methods</h3><ul><li>Where, Select, OrderBy</li><li>GroupBy, Join, Aggregate</li><li>First, Single, Any, All</li></ul>",
        codeExample: `// LINQ concepts using JS array methods\nconst products = [\n  { name: 'Laptop', price: 999, category: 'Electronics' },\n  { name: 'Book', price: 15, category: 'Education' },\n  { name: 'Phone', price: 699, category: 'Electronics' },\n  { name: 'Pen', price: 2, category: 'Office' },\n  { name: 'Tablet', price: 499, category: 'Electronics' },\n  { name: 'Notebook', price: 5, category: 'Education' },\n];\n\n// Where + Select\nconst expensive = products.filter(p => p.price > 100).map(p => p.name);\nconsole.log("Expensive:", expensive.join(", "));\n\n// OrderBy\nconst sorted = [...products].sort((a,b) => a.price - b.price);\nconsole.log("Cheapest:", sorted[0].name, "$" + sorted[0].price);\n\n// GroupBy\nconst grouped = {};\nproducts.forEach(p => (grouped[p.category] = grouped[p.category] || []).push(p.name));\nObject.entries(grouped).forEach(([cat, items]) => console.log(cat + ":", items.join(", ")));\n\n// Aggregate\nconst total = products.reduce((s, p) => s + p.price, 0);\nconsole.log("Total value: $" + total);`,
        quiz: [
          {
            question: "LINQ stands for?",
            options: [
              "Linear Integrated Query",
              "Language Integrated Query",
              "List Internal Query",
              "Linked Query",
            ],
            answer: 1,
          },
        ],
      },
      {
        id: "async-csharp",
        title: "Async/Await in C#",
        difficulty: "hard",
        shortDesc: "Asynchronous programming with Tasks",
        theory:
          "<h3>Async Programming</h3><p>C# uses <code>async/await</code> with <code>Task</code> for non-blocking operations. Similar to JS Promises but with stronger typing.</p><h3>Key Concepts</h3><ul><li><code>Task</code> = Promise</li><li><code>Task&lt;T&gt;</code> = Promise&lt;T&gt;</li><li><code>async Task</code> = async function</li></ul>",
        codeExample: `// Async patterns\nasync function fetchUserData(userId) {\n  console.log("Fetching user " + userId + "...");\n  return new Promise(resolve => setTimeout(() => resolve({ id: userId, name: "User" + userId }), 100));\n}\n\nasync function fetchOrders(userId) {\n  console.log("Fetching orders for " + userId + "...");\n  return new Promise(resolve => setTimeout(() => resolve([{ id: 1, total: 99 }]), 100));\n}\n\nasync function main() {\n  // Sequential\n  const user = await fetchUserData(1);\n  console.log("User:", JSON.stringify(user));\n  \n  // Parallel (Task.WhenAll equivalent)\n  const [user2, orders] = await Promise.all([\n    fetchUserData(2),\n    fetchOrders(1)\n  ]);\n  console.log("Parallel results:", JSON.stringify(user2), JSON.stringify(orders));\n}\n\nmain();`,
        quiz: [
          {
            question: "C# Task is equivalent to JS?",
            options: ["Callback", "Promise", "Observable", "Generator"],
            answer: 1,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "ASP.NET Core",
    icon: "🌐",
    topics: [
      {
        id: "aspnet-intro",
        title: "ASP.NET Core Basics",
        difficulty: "medium",
        shortDesc: "Build web APIs and MVC applications",
        theory:
          "<h3>ASP.NET Core</h3><p>A cross-platform framework for building web APIs, MVC apps, and microservices. Uses middleware pipeline, dependency injection, and controller pattern.</p>",
        codeExample: `// ASP.NET Core controller concept\nclass TodoController {\n  constructor() { this.todos = [{ id: 1, text: "Learn C#", done: false }]; }\n  \n  // GET /api/todos\n  getAll() {\n    console.log("GET /api/todos");\n    return this.todos;\n  }\n  \n  // POST /api/todos\n  create(text) {\n    const todo = { id: Date.now(), text, done: false };\n    this.todos.push(todo);\n    console.log("POST /api/todos:", JSON.stringify(todo));\n    return todo;\n  }\n  \n  // PUT /api/todos/:id\n  toggle(id) {\n    const todo = this.todos.find(t => t.id === id);\n    if (todo) { todo.done = !todo.done; console.log("PUT:", JSON.stringify(todo)); }\n  }\n}\n\nconst ctrl = new TodoController();\nconsole.log(JSON.stringify(ctrl.getAll()));\nctrl.create("Build API");\nctrl.toggle(1);\nconsole.log(JSON.stringify(ctrl.getAll()));`,
        quiz: [
          {
            question: "ASP.NET Core runs on?",
            options: [
              "Windows only",
              "Cross-platform",
              "Linux only",
              ".NET Framework only",
            ],
            answer: 1,
          },
        ],
      },
      {
        id: "entity-framework",
        title: "Entity Framework Core",
        difficulty: "hard",
        shortDesc: "ORM for database operations",
        theory:
          "<h3>Entity Framework Core</h3><p>An ORM (Object-Relational Mapper) that lets you work with databases using C# objects instead of SQL. Supports Code First migrations.</p>",
        codeExample: `// Entity Framework concept - Code First\nclass Product {\n  constructor(id, name, price) {\n    this.id = id; this.name = name; this.price = price;\n  }\n}\n\nclass DbContext {\n  constructor() { this.products = []; }\n  add(entity) { this.products.push(entity); }\n  find(id) { return this.products.find(p => p.id === id); }\n  where(predicate) { return this.products.filter(predicate); }\n  saveChanges() { console.log("Changes saved to database!"); }\n}\n\nconst db = new DbContext();\ndb.add(new Product(1, "Laptop", 999));\ndb.add(new Product(2, "Mouse", 29));\ndb.add(new Product(3, "Monitor", 499));\ndb.saveChanges();\n\nconsole.log("Find #2:", JSON.stringify(db.find(2)));\nconsole.log("Expensive:", JSON.stringify(db.where(p => p.price > 100)));`,
        quiz: [
          {
            question: "EF Core is a?",
            options: ["Database", "ORM", "API Framework", "Testing Tool"],
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
        id: "csharp-oop-interview",
        title: "OOP Deep Dive",
        difficulty: "hard",
        shortDesc: "SOLID principles, design patterns, and OOP traps",
        theory: `<h3>SOLID Principles</h3><ul><li><strong>S</strong>ingle Responsibility — one class, one job</li><li><strong>O</strong>pen/Closed — open for extension, closed for modification</li><li><strong>L</strong>iskov Substitution — subtypes must be substitutable</li><li><strong>I</strong>nterface Segregation — many specific interfaces > one general</li><li><strong>D</strong>ependency Inversion — depend on abstractions, not concretions</li></ul><h3>Common Patterns</h3><p>Repository, Factory, Singleton, Observer, Strategy</p>`,
        codeExample: `// SOLID principles demonstrated
// S: Single Responsibility
class UserValidator { validate(user) { return user.name && user.email; } }
class UserRepository { save(user) { console.log("Saved:", user.name); } }
class UserService {
  constructor() {
    this.validator = new UserValidator();
    this.repo = new UserRepository();
  }
  createUser(user) {
    if (!this.validator.validate(user)) throw new Error("Invalid user");
    this.repo.save(user);
  }
}

// O: Open/Closed (Strategy pattern)
class Discount {
  constructor(strategy) { this.strategy = strategy; }
  apply(price) { return this.strategy(price); }
}
const percent10 = price => price * 0.9;
const flat50 = price => price - 50;
const noDiscount = price => price;

console.log("=== SOLID Principles ===");
const svc = new UserService();
svc.createUser({ name: "Alice", email: "alice@test.com" });

console.log("\\n=== Strategy Pattern ===");
console.log("10% off $100:", new Discount(percent10).apply(100));
console.log("$50 off $100:", new Discount(flat50).apply(100));
console.log("No discount $100:", new Discount(noDiscount).apply(100));`,
        quiz: [
          {
            question: "SOLID 'S' stands for?",
            options: ["Secure", "Single Responsibility", "Static", "Simple"],
            answer: 1,
          },
          {
            question: "Dependency Inversion means?",
            options: [
              "Use concrete classes",
              "Depend on abstractions",
              "Avoid interfaces",
              "Use global state",
            ],
            answer: 1,
          },
        ],
      },
      {
        id: "csharp-value-ref",
        title: "Value vs Reference Types",
        difficulty: "medium",
        shortDesc: "Stack vs heap, boxing, and memory management",
        theory: `<h3>Value vs Reference Types</h3><ul><li><strong>Value types</strong> (stack) — int, double, bool, struct, enum. Copied on assignment.</li><li><strong>Reference types</strong> (heap) — string, class, array, object. Reference copied, data shared.</li><li><strong>Boxing</strong> — wrapping a value type in object (expensive)</li><li><strong>Unboxing</strong> — extracting value from object</li></ul><div class="info-box"><div class="info-box-title">💡 Interview Trap</div>String is a reference type but behaves like a value type (immutable). String concatenation in a loop creates many objects — use StringBuilder!</div>`,
        codeExample: `// Value vs Reference type behavior
// Value type: copied on assignment
let a = 10;
let b = a;  // b gets a COPY
b = 20;
console.log("Value types:");
console.log("  a:", a, "(unchanged)");
console.log("  b:", b, "(independent copy)");

// Reference type: reference shared
const obj1 = { name: "Alice" };
const obj2 = obj1;  // obj2 points to SAME object
obj2.name = "Bob";
console.log("\\nReference types:");
console.log("  obj1:", obj1.name, "(changed!)");
console.log("  obj2:", obj2.name, "(same reference)");

// String immutability
console.log("\\nString immutability:");
let str = "Hello";
let str2 = str;
str = str + " World";  // creates NEW string
console.log("  str:", str);
console.log("  str2:", str2, "(unchanged — strings are immutable!)");

// StringBuilder equivalent
console.log("\\nString concatenation in loops:");
console.log("  BAD: str += item (creates new string each time)");
console.log("  GOOD: use array.join() or StringBuilder in C#");`,
        quiz: [
          {
            question: "struct in C# is a?",
            options: [
              "Reference type",
              "Value type",
              "Static type",
              "Generic type",
            ],
            answer: 1,
          },
          {
            question:
              "String is immutable — concatenation in loops should use?",
            options: [
              "+= operator",
              "StringBuilder",
              "String.Format",
              "char array",
            ],
            answer: 1,
          },
        ],
      },
      {
        id: "csharp-top-questions",
        title: "Top C# Interview Questions",
        difficulty: "medium",
        shortDesc: "Most asked C# and .NET questions",
        theory: `<h3>Frequently Asked</h3><ol><li>abstract class vs interface?</li><li>IEnumerable vs IQueryable?</li><li>async/await — how it works under the hood?</li><li>What is dependency injection?</li><li>Garbage collection generations?</li><li>What are delegates and events?</li><li>sealed, virtual, override keywords?</li><li>.NET vs .NET Framework vs .NET Core?</li></ol>`,
        codeExample: `// Key C# interview answers
const qa = [
  {
    q: "abstract class vs interface?",
    a: "Abstract: partial implementation, single inheritance. Interface: contract only (C# 8+ allows defaults), multiple inheritance."
  },
  {
    q: "IEnumerable vs IQueryable?",
    a: "IEnumerable: in-memory filtering (LINQ to Objects). IQueryable: builds expression tree, translates to SQL (EF Core)."
  },
  {
    q: "Dependency Injection in ASP.NET?",
    a: "Built-in DI container. Register in Program.cs: AddSingleton, AddScoped, AddTransient. Inject via constructor."
  },
  {
    q: "GC Generations?",
    a: "Gen 0: short-lived (collected first). Gen 1: medium. Gen 2: long-lived. LOH for objects > 85KB."
  },
  {
    q: ".NET vs .NET Framework?",
    a: ".NET (5+): cross-platform, modern, open-source. .NET Framework: Windows-only, legacy. Use .NET 8+ for new projects."
  }
];

console.log("=== C# Interview Quick-Fire ===\\n");
qa.forEach((item, i) => {
  console.log((i+1) + ". " + item.q);
  console.log("   → " + item.a + "\\n");
});`,
        quiz: [
          {
            question: "IQueryable translates to?",
            options: ["In-memory operations", "SQL queries", "XML", "JSON"],
            answer: 1,
          },
          {
            question: "For new projects, use?",
            options: [".NET Framework 4.8", ".NET 8+", ".NET Core 2.1", "Mono"],
            answer: 1,
          },
        ],
      },
    ],
  },
];
