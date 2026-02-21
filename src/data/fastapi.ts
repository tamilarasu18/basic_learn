import { Section } from "./types";

export const fastapiSections: Section[] = [
  {
    id: 1,
    title: "Getting Started",
    icon: "🐍",
    topics: [
      {
        id: "fastapi-intro",
        title: "What is FastAPI?",
        difficulty: "easy",
        shortDesc: "Modern Python web framework for APIs",
        theory:
          "<h3>FastAPI Overview</h3><p>FastAPI is a modern, high-performance Python web framework. It leverages Python type hints for automatic validation, serialization, and documentation.</p><h3>Key Features</h3><ul><li>Automatic OpenAPI/Swagger docs</li><li>Type-safe with Pydantic</li><li>Async support (ASGI)</li><li>Faster than Flask and Django REST</li></ul>",
        codeExample: `// FastAPI concepts in JS\n// Python: from fastapi import FastAPI\n// app = FastAPI()\n\nconst routes = [];\n\nfunction get(path) {\n  return function(handler) {\n    routes.push({ method: 'GET', path, handler: handler.name });\n  };\n}\n\nfunction post(path) {\n  return function(handler) {\n    routes.push({ method: 'POST', path, handler: handler.name });\n  };\n}\n\n// @app.get("/")\nget("/")(function root() { return { message: "Hello World" }; });\n\n// @app.get("/items/{item_id}")\nget("/items/{item_id}")(function readItem() { return { item_id: 42 }; });\n\npost("/items/")(function createItem() { return { status: "created" }; });\n\nconsole.log("FastAPI Routes:");\nroutes.forEach(r => console.log("  " + r.method + " " + r.path + " → " + r.handler));`,
        quiz: [
          {
            question: "FastAPI uses which server standard?",
            options: ["WSGI", "ASGI", "CGI", "HTTP/3"],
            answer: 1,
          },
          {
            question: "FastAPI generates docs automatically using?",
            options: ["Postman", "OpenAPI/Swagger", "JSDoc", "GraphQL"],
            answer: 1,
          },
        ],
      },
      {
        id: "pydantic",
        title: "Pydantic Models",
        difficulty: "easy",
        shortDesc: "Data validation with type-safe models",
        theory:
          "<h3>Pydantic</h3><p>Pydantic models define data schemas with Python type hints. FastAPI uses them for request body validation, response serialization, and automatic documentation.</p>",
        codeExample: `// Pydantic model concept in JS\nclass BaseModel {\n  constructor(data, schema) {\n    for (const [field, rules] of Object.entries(schema)) {\n      const value = data[field];\n      if (rules.required && (value === undefined || value === null)) {\n        throw new Error(field + " is required");\n      }\n      if (value !== undefined && rules.type && typeof value !== rules.type) {\n        throw new Error(field + " must be " + rules.type);\n      }\n      this[field] = value !== undefined ? value : rules.default;\n    }\n  }\n}\n\nconst itemSchema = {\n  name: { type: 'string', required: true },\n  price: { type: 'number', required: true },\n  description: { type: 'string', required: false, default: null },\n  tax: { type: 'number', required: false, default: 0 }\n};\n\ntry {\n  const item = new BaseModel({ name: "Widget", price: 9.99, tax: 1.5 }, itemSchema);\n  console.log("Valid item:", JSON.stringify(item));\n  \n  const bad = new BaseModel({ price: "not a number" }, itemSchema);\n} catch (e) {\n  console.log("Validation error:", e.message);\n}`,
        quiz: [
          {
            question: "Pydantic validates data using?",
            options: [
              "JSON Schema",
              "Python type hints",
              "XML Schema",
              "Regular expressions",
            ],
            answer: 1,
          },
        ],
      },
      {
        id: "path-query",
        title: "Path & Query Parameters",
        difficulty: "easy",
        shortDesc: "Handle URL parameters and query strings",
        theory:
          "<h3>Parameters</h3><ul><li><strong>Path params</strong> — <code>/items/{item_id}</code> — required, part of URL</li><li><strong>Query params</strong> — <code>/items?skip=0&limit=10</code> — optional, for filtering</li></ul>",
        codeExample: `// Path and Query parameters\nfunction parseRoute(url) {\n  const [path, query] = url.split('?');\n  const pathParts = path.split('/').filter(Boolean);\n  const queryParams = {};\n  if (query) {\n    query.split('&').forEach(p => {\n      const [k, v] = p.split('=');\n      queryParams[k] = v;\n    });\n  }\n  return { pathParts, queryParams };\n}\n\nconst urls = [\n  '/items/42',\n  '/items?skip=0&limit=10',\n  '/users/5/posts?sort=date&order=desc'\n];\n\nurls.forEach(url => {\n  const parsed = parseRoute(url);\n  console.log("URL:", url);\n  console.log("  Path:", parsed.pathParts.join(" / "));\n  console.log("  Query:", JSON.stringify(parsed.queryParams));\n});`,
        quiz: [
          {
            question: "Path parameters are?",
            options: ["Optional", "Required", "Headers", "Cookies"],
            answer: 1,
          },
        ],
      },
      {
        id: "crud-operations",
        title: "CRUD Operations",
        difficulty: "medium",
        shortDesc: "Create, Read, Update, Delete with FastAPI",
        theory:
          "<h3>RESTful CRUD</h3><ul><li><strong>POST</strong> → Create</li><li><strong>GET</strong> → Read</li><li><strong>PUT/PATCH</strong> → Update</li><li><strong>DELETE</strong> → Delete</li></ul>",
        codeExample: `// CRUD operations simulation\nconst db = [];\nlet nextId = 1;\n\nfunction createItem(name, price) {\n  const item = { id: nextId++, name, price };\n  db.push(item);\n  console.log("CREATE:", JSON.stringify(item));\n  return item;\n}\n\nfunction getItems() {\n  console.log("READ ALL:", JSON.stringify(db));\n  return db;\n}\n\nfunction updateItem(id, updates) {\n  const item = db.find(i => i.id === id);\n  if (item) { Object.assign(item, updates); console.log("UPDATE:", JSON.stringify(item)); }\n  else console.log("Not found:", id);\n}\n\nfunction deleteItem(id) {\n  const idx = db.findIndex(i => i.id === id);\n  if (idx >= 0) { db.splice(idx, 1); console.log("DELETE: item", id); }\n}\n\ncreateItem("Laptop", 999);\ncreateItem("Mouse", 29);\ncreateItem("Keyboard", 79);\ngetItems();\nupdateItem(2, { price: 39 });\ndeleteItem(1);\ngetItems();`,
        quiz: [
          {
            question: "Which HTTP method is for creating resources?",
            options: ["GET", "POST", "PUT", "DELETE"],
            answer: 1,
          },
        ],
      },
      {
        id: "async-await",
        title: "Async Endpoints",
        difficulty: "medium",
        shortDesc: "Asynchronous request handling",
        theory:
          "<h3>Async in FastAPI</h3><p>FastAPI supports both sync and async endpoints. Use <code>async def</code> for I/O-bound operations (database queries, HTTP calls). Sync endpoints run in a thread pool.</p>",
        codeExample: `// Async/await concept\nasync function fetchFromDB(query) {\n  return new Promise(resolve => {\n    setTimeout(() => resolve({ rows: [{ id: 1, name: "Item" }] }), 100);\n  });\n}\n\nasync function handleRequest() {\n  console.log("1. Request received");\n  \n  // Concurrent async operations\n  const [users, items] = await Promise.all([\n    fetchFromDB("SELECT * FROM users"),\n    fetchFromDB("SELECT * FROM items")\n  ]);\n  \n  console.log("2. Data fetched:", JSON.stringify(users));\n  console.log("3. Response sent");\n}\n\nhandleRequest();\nconsole.log("Async endpoints don't block the event loop!");`,
        quiz: [
          {
            question: "Async endpoints are best for?",
            options: [
              "CPU-bound tasks",
              "I/O-bound tasks",
              "Static files",
              "Templates",
            ],
            answer: 1,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Advanced FastAPI",
    icon: "🔧",
    topics: [
      {
        id: "auth-jwt",
        title: "Authentication & JWT",
        difficulty: "hard",
        shortDesc: "Secure APIs with JWT tokens",
        theory:
          "<h3>JWT Authentication</h3><p>JSON Web Tokens encode user info in a signed token. Flow: login → receive token → send token in headers → server validates.</p>",
        codeExample: `// JWT concept\nfunction createToken(payload, secret) {\n  const header = btoa(JSON.stringify({ alg: "HS256", typ: "JWT" }));\n  const body = btoa(JSON.stringify({ ...payload, exp: Date.now() + 3600000 }));\n  const signature = btoa(secret + "." + header + "." + body);\n  return header + "." + body + "." + signature;\n}\n\nfunction verifyToken(token) {\n  const parts = token.split(".");\n  const payload = JSON.parse(atob(parts[1]));\n  console.log("Decoded:", JSON.stringify(payload));\n  console.log("Expired:", payload.exp < Date.now());\n  return payload;\n}\n\nconst token = createToken({ user_id: 42, role: "admin" }, "mysecret");\nconsole.log("Token:", token.substring(0, 50) + "...");\nverifyToken(token);`,
        quiz: [
          {
            question: "JWT tokens are sent in which header?",
            options: [
              "X-Token",
              "Authorization: Bearer",
              "Cookie",
              "Content-Type",
            ],
            answer: 1,
          },
        ],
      },
      {
        id: "middleware-cors",
        title: "Middleware & CORS",
        difficulty: "medium",
        shortDesc: "Cross-origin requests and request processing",
        theory:
          "<h3>Middleware</h3><p>Middleware processes requests before they reach your endpoint and responses before they reach the client. CORS middleware is essential for frontend-backend communication.</p>",
        codeExample: `// Middleware chain concept\nfunction loggingMiddleware(request, next) {\n  console.log("→ " + request.method + " " + request.path);\n  const start = Date.now();\n  const response = next(request);\n  console.log("← " + response.status + " (" + (Date.now() - start) + "ms)");\n  return response;\n}\n\nfunction corsMiddleware(request, next) {\n  const response = next(request);\n  response.headers = {\n    ...response.headers,\n    'Access-Control-Allow-Origin': '*',\n    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'\n  };\n  return response;\n}\n\n// Simulate request\nconst request = { method: 'GET', path: '/api/items' };\nconst handler = (req) => ({ status: 200, body: { items: [] }, headers: {} });\n\nloggingMiddleware(request, (req) => corsMiddleware(req, handler));`,
        quiz: [
          {
            question: "CORS stands for?",
            options: [
              "Cross-Origin Resource Sharing",
              "Cross-Origin Response System",
              "Client-Origin Request Service",
              "Cross-Output Resource Standard",
            ],
            answer: 0,
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
        id: "fastapi-rest-design",
        title: "REST API Design Interview",
        difficulty: "medium",
        shortDesc: "Design scalable APIs with proper conventions",
        theory: `<h3>REST Principles for Interviews</h3><ul><li><strong>Resources as nouns</strong> — /users, /orders (not /getUsers)</li><li><strong>HTTP verbs for actions</strong> — GET read, POST create, PUT update, DELETE remove</li><li><strong>Status codes</strong> — 200 OK, 201 Created, 400 Bad Request, 404 Not Found, 500 Server Error</li><li><strong>Pagination</strong> — ?page=1&limit=20 or cursor-based</li><li><strong>Versioning</strong> — /api/v1/users</li></ul><div class="info-box"><div class="info-box-title">💡 Interview Tip</div>When designing an API, start by listing the resources and their relationships, then map CRUD operations to endpoints.</div>`,
        codeExample: `// REST API design exercise
const apiDesign = {
  "E-Commerce API": [
    { method: "GET",    path: "/api/v1/products",          desc: "List all products" },
    { method: "GET",    path: "/api/v1/products/:id",      desc: "Get product by ID" },
    { method: "POST",   path: "/api/v1/products",          desc: "Create product" },
    { method: "PUT",    path: "/api/v1/products/:id",      desc: "Update product" },
    { method: "DELETE", path: "/api/v1/products/:id",      desc: "Delete product" },
    { method: "GET",    path: "/api/v1/products/:id/reviews", desc: "Get product reviews" },
    { method: "POST",   path: "/api/v1/orders",            desc: "Create order" },
    { method: "GET",    path: "/api/v1/users/:id/orders",  desc: "User's orders" },
  ]
};

Object.entries(apiDesign).forEach(([name, endpoints]) => {
  console.log("=== " + name + " ===\\n");
  endpoints.forEach(e => {
    const pad = e.method.padEnd(7);
    console.log(pad + e.path.padEnd(35) + e.desc);
  });
});

console.log("\\n=== Status Code Cheat Sheet ===");
console.log("2xx: 200 OK, 201 Created, 204 No Content");
console.log("4xx: 400 Bad Request, 401 Unauthorized, 404 Not Found");
console.log("5xx: 500 Internal Server Error");`,
        quiz: [
          {
            question: "Correct endpoint for fetching users?",
            options: [
              "/getUsers",
              "/api/v1/users",
              "/fetchAllUsers",
              "/users/getAll",
            ],
            answer: 1,
          },
          {
            question: "201 status code means?",
            options: ["OK", "Created", "Not Found", "Server Error"],
            answer: 1,
          },
        ],
      },
      {
        id: "fastapi-async-interview",
        title: "Async & Concurrency",
        difficulty: "hard",
        shortDesc: "ASGI, event loops, and concurrent requests",
        theory: `<h3>Async Interview Topics</h3><ul><li><strong>WSGI vs ASGI</strong> — WSGI is sync (Flask, Django). ASGI is async (FastAPI, Starlette).</li><li><strong>Event Loop</strong> — single-threaded, handles I/O without blocking</li><li><strong>async def vs def</strong> — async for I/O tasks, sync runs in thread pool</li><li><strong>When NOT to use async</strong> — CPU-bound tasks (use ProcessPoolExecutor)</li></ul>`,
        codeExample: `// Async vs sync performance comparison
async function asyncIO(label, ms) {
  return new Promise(resolve => setTimeout(() => {
    console.log("  " + label + " completed (" + ms + "ms)");
    resolve(label);
  }, ms));
}

async function sequential() {
  console.log("Sequential (3 API calls):");
  const start = Date.now();
  await asyncIO("API 1", 100);
  await asyncIO("API 2", 100);
  await asyncIO("API 3", 100);
  console.log("  Total: ~" + (Date.now() - start) + "ms\\n");
}

async function concurrent() {
  console.log("Concurrent (3 API calls):");
  const start = Date.now();
  await Promise.all([
    asyncIO("API 1", 100),
    asyncIO("API 2", 100),
    asyncIO("API 3", 100)
  ]);
  console.log("  Total: ~" + (Date.now() - start) + "ms");
}

console.log("=== ASGI Advantage ===\\n");
sequential().then(() => concurrent());`,
        quiz: [
          {
            question: "ASGI supports?",
            options: [
              "Only sync",
              "Only async",
              "Both sync and async",
              "Neither",
            ],
            answer: 2,
          },
          {
            question: "CPU-bound tasks should use?",
            options: [
              "async def",
              "ProcessPoolExecutor",
              "Event loop",
              "Thread pool",
            ],
            answer: 1,
          },
        ],
      },
      {
        id: "fastapi-top-questions",
        title: "Top Python Backend Questions",
        difficulty: "medium",
        shortDesc: "Common FastAPI and Python interview questions",
        theory: `<h3>Frequently Asked</h3><ol><li>FastAPI vs Flask vs Django — when to use each?</li><li>How does dependency injection work in FastAPI?</li><li>Explain Pydantic validation</li><li>What is an ORM? SQLAlchemy vs Tortoise?</li><li>How to handle database migrations?</li><li>JWT vs Session-based auth?</li><li>How to test FastAPI endpoints?</li></ol>`,
        codeExample: `// Framework comparison for interviews
const frameworks = {
  FastAPI: {
    type: "Async API framework",
    bestFor: "High-performance APIs, microservices",
    speed: "⚡ Fastest (async + Starlette)",
    docs: "✅ Auto-generated Swagger/OpenAPI",
    orm: "SQLAlchemy, Tortoise ORM",
    learning: "Easy (if you know Python types)"
  },
  Flask: {
    type: "Micro framework",
    bestFor: "Simple apps, prototypes",
    speed: "🐢 Sync only (WSGI)",
    docs: "❌ Manual (use Flasgger)",
    orm: "SQLAlchemy, Peewee",
    learning: "Easiest"
  },
  Django: {
    type: "Full-stack framework",
    bestFor: "Large apps, CMS, admin panels",
    speed: "🐢 Sync (async support improving)",
    docs: "❌ Manual (DRF has browsable API)",
    orm: "Built-in Django ORM",
    learning: "Steeper (batteries included)"
  }
};

Object.entries(frameworks).forEach(([name, info]) => {
  console.log("=== " + name + " ===");
  Object.entries(info).forEach(([k, v]) => console.log("  " + k + ": " + v));
  console.log("");
});`,
        quiz: [
          {
            question: "FastAPI is faster than Flask because?",
            options: [
              "More features",
              "Written in C",
              "Async + ASGI",
              "Older codebase",
            ],
            answer: 2,
          },
          {
            question: "Django is best for?",
            options: [
              "Microservices",
              "Full-stack apps with admin",
              "CLI tools",
              "Mobile apps",
            ],
            answer: 1,
          },
        ],
      },
    ],
  },
];
