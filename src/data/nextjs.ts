import { Section } from "./types";

export const nextjsSections: Section[] = [
  {
    id: 1,
    title: "Fundamentals",
    icon: "🏗️",
    topics: [
      {
        id: "intro-nextjs",
        title: "What is Next.js?",
        difficulty: "easy",
        shortDesc: "Overview of Next.js and its advantages over plain React",
        theory:
          '<h3>Next.js Overview</h3><p>Next.js is a React framework that provides server-side rendering, static site generation, file-based routing, and API routes out of the box. It solves key React pain points: SEO, performance, and routing.</p><h3>Key Features</h3><ul><li><strong>File-based routing</strong> — pages in /app directory become routes automatically</li><li><strong>Server Components</strong> — render on server by default, smaller bundles</li><li><strong>SSR & SSG</strong> — generate pages at build time or request time</li><li><strong>API Routes</strong> — build backend endpoints within your project</li></ul><div class="info-box"><div class="info-box-title">💡 Why Next.js?</div>Next.js gives you the best of both worlds: React\'s component model with server-side performance and SEO.</div>',
        codeExample: `// Basic Next.js page component (app/page.tsx)\n// This is a Server Component by default!\n\nexport default function HomePage() {\n  console.log("This runs on the server!");\n  return (\n    <div>\n      <h1>Welcome to Next.js</h1>\n      <p>This page is server-rendered</p>\n    </div>\n  );\n}\n\nconsole.log("Next.js uses file-based routing");\nconsole.log("app/page.tsx → /");\nconsole.log("app/about/page.tsx → /about");\nconsole.log("app/blog/[slug]/page.tsx → /blog/:slug");`,
        quiz: [
          {
            question: "Next.js pages are which type by default in App Router?",
            options: [
              "Client Components",
              "Server Components",
              "Static Components",
              "Hybrid Components",
            ],
            answer: 1,
          },
          {
            question: "What does file-based routing mean?",
            options: [
              "Routes defined in JSON",
              "File structure determines URL paths",
              "Each file is a separate app",
              "Routes use regex",
            ],
            answer: 1,
          },
        ],
      },
      {
        id: "file-routing",
        title: "File-Based Routing",
        difficulty: "easy",
        shortDesc: "App Router and file system conventions",
        theory:
          "<h3>App Router</h3><p>In Next.js 13+, the App Router uses the <code>app/</code> directory. Each folder becomes a route segment. Special files: <code>page.tsx</code> (UI), <code>layout.tsx</code> (shared layout), <code>loading.tsx</code> (loading state), <code>error.tsx</code> (error boundary).</p><h3>Dynamic Routes</h3><p>Use <code>[param]</code> folders for dynamic segments: <code>app/blog/[slug]/page.tsx</code></p>",
        codeExample: `// Dynamic route: app/blog/[slug]/page.tsx\nfunction BlogPost({ params }) {\n  console.log("Slug:", params.slug);\n  return <h1>Blog: {params.slug}</h1>;\n}\n\n// Route groups: (marketing)/about/page.tsx\n// Parallel routes: @modal/page.tsx\n// Catch-all: [...slug]/page.tsx\n\nconsole.log("page.tsx → renders the page UI");\nconsole.log("layout.tsx → wraps children with shared layout");\nconsole.log("loading.tsx → shows while page loads");\nconsole.log("error.tsx → error boundary for the segment");`,
        quiz: [
          {
            question: "Which file renders the page UI?",
            options: ["index.tsx", "page.tsx", "route.tsx", "view.tsx"],
            answer: 1,
          },
        ],
      },
      {
        id: "layouts-templates",
        title: "Layouts & Templates",
        difficulty: "easy",
        shortDesc: "Shared layouts and nested routing",
        theory:
          "<h3>Layouts</h3><p>Layouts wrap child pages and persist across navigations. The root layout wraps the entire app. Nested layouts compose automatically.</p><h3>Templates</h3><p>Templates are like layouts but re-mount on navigation — useful for enter/exit animations or per-page state reset.</p>",
        codeExample: `// Root Layout: app/layout.tsx\nfunction RootLayout({ children }) {\n  return (\n    <html><body>\n      <nav>Persistent Navbar</nav>\n      {children}\n      <footer>Persistent Footer</footer>\n    </body></html>\n  );\n}\n\n// Nested layout: app/dashboard/layout.tsx\nfunction DashboardLayout({ children }) {\n  return (\n    <div style={{display:'flex'}}>\n      <aside>Sidebar</aside>\n      <main>{children}</main>\n    </div>\n  );\n}\n\nconsole.log("Layouts persist across navigations");\nconsole.log("Templates re-mount on each navigation");`,
        quiz: [
          {
            question: "Layouts persist across navigations?",
            options: ["True", "False"],
            answer: 0,
          },
        ],
      },
      {
        id: "server-client",
        title: "Server vs Client Components",
        difficulty: "medium",
        shortDesc: "Understanding the rendering model",
        theory:
          '<h3>Server Components</h3><p>Default in App Router. Run only on the server. Can access databases, read files, use secrets. Zero bundle size impact.</p><h3>Client Components</h3><p>Add <code>"use client"</code> directive at top. Required for interactivity (useState, useEffect, onClick, browser APIs).</p><div class="info-box"><div class="info-box-title">💡 Rule of Thumb</div>Keep components server-side by default. Only add "use client" when you need interactivity or browser APIs.</div>',
        codeExample: `// Server Component (default) — no directive needed\nasync function ServerComp() {\n  // Can fetch data directly\n  const data = await fetch('https://api.example.com/data');\n  console.log("This runs on the server only");\n  return <div>Server rendered content</div>;\n}\n\n// Client Component — needs "use client"\n// "use client"\n// import { useState } from 'react';\nfunction ClientComp() {\n  // const [count, setCount] = useState(0);\n  console.log("Client components can use hooks");\n  console.log("useState, useEffect, onClick all need 'use client'");\n  return null;\n}\n\nconsole.log("Server: database access, secrets, zero JS bundle");\nconsole.log("Client: interactivity, hooks, browser APIs");`,
        quiz: [
          {
            question: "Which directive makes a component client-side?",
            options: [
              '"use server"',
              '"use client"',
              '"use browser"',
              '"use interactive"',
            ],
            answer: 1,
          },
          {
            question: "Can Server Components use useState?",
            options: ["Yes", "No"],
            answer: 1,
          },
        ],
      },
      {
        id: "data-fetching",
        title: "Data Fetching",
        difficulty: "medium",
        shortDesc: "Server-side data fetching and caching",
        theory:
          "<h3>Data Fetching in App Router</h3><p>Server Components can fetch data directly using async/await — no useEffect needed! Next.js extends fetch with caching and revalidation.</p><h3>Caching Strategies</h3><ul><li><code>force-cache</code> — cache forever (default)</li><li><code>no-store</code> — always fresh</li><li><code>revalidate: N</code> — cache for N seconds</li></ul>",
        codeExample: `// Server Component data fetching\nasync function fetchPosts() {\n  // Cached by default\n  const res = await fetch('https://jsonplaceholder.typicode.com/posts');\n  return res.json();\n}\n\n// Revalidate every 60 seconds\nasync function fetchWithRevalidation() {\n  const res = await fetch('https://api.example.com/data', {\n    next: { revalidate: 60 }\n  });\n  return res.json();\n}\n\n// No caching\nasync function fetchFresh() {\n  const res = await fetch('https://api.example.com/data', {\n    cache: 'no-store'\n  });\n  return res.json();\n}\n\nconsole.log("Server Components can fetch directly!");\nconsole.log("No useEffect or loading states needed");`,
        quiz: [
          {
            question: "Default caching behavior for fetch in Next.js?",
            options: [
              "No caching",
              "Cache forever",
              "Cache for 60s",
              "Cache for 1 hour",
            ],
            answer: 1,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Advanced Features",
    icon: "🚀",
    topics: [
      {
        id: "api-routes",
        title: "API Routes",
        difficulty: "medium",
        shortDesc: "Build backend endpoints with Route Handlers",
        theory:
          "<h3>Route Handlers</h3><p>Create API endpoints using <code>route.ts</code> files in the app directory. Export functions named after HTTP methods: GET, POST, PUT, DELETE.</p>",
        codeExample: `// app/api/hello/route.ts\nfunction GET(request) {\n  return new Response(JSON.stringify({ message: 'Hello!' }), {\n    headers: { 'Content-Type': 'application/json' }\n  });\n}\n\nfunction POST(request) {\n  // const body = await request.json();\n  return new Response(JSON.stringify({ status: 'created' }), {\n    status: 201\n  });\n}\n\nconsole.log("GET /api/hello → returns JSON message");\nconsole.log("POST /api/hello → creates resource");\nconsole.log("Route handlers replace pages/api from Pages Router");`,
        quiz: [
          {
            question: "Route handlers use which file name?",
            options: ["api.ts", "handler.ts", "route.ts", "endpoint.ts"],
            answer: 2,
          },
        ],
      },
      {
        id: "middleware",
        title: "Middleware",
        difficulty: "medium",
        shortDesc: "Run code before requests are completed",
        theory:
          "<h3>Next.js Middleware</h3><p>Middleware runs before a request is completed. Use it for authentication, redirects, headers, A/B testing. Create <code>middleware.ts</code> at the project root.</p>",
        codeExample: `// middleware.ts (project root)\nfunction middleware(request) {\n  const url = request.nextUrl;\n  console.log("Request to:", url.pathname);\n  \n  // Example: redirect if not authenticated\n  const isLoggedIn = false; // check cookie/token\n  if (url.pathname.startsWith('/dashboard') && !isLoggedIn) {\n    console.log("Redirecting to /login");\n    // return NextResponse.redirect(new URL('/login', request.url));\n  }\n  console.log("Middleware runs on every matched request");\n}\n\n// Config to match specific paths\nconst config = {\n  matcher: ['/dashboard/:path*', '/api/:path*']\n};\n\nconsole.log("Middleware runs BEFORE the request completes");\nconsole.log("Great for auth, redirects, headers");`,
        quiz: [
          {
            question: "Where does middleware.ts live?",
            options: ["In app/", "In pages/", "Project root", "In lib/"],
            answer: 2,
          },
        ],
      },
      {
        id: "server-actions",
        title: "Server Actions",
        difficulty: "medium",
        shortDesc: "Mutate data with server functions",
        theory:
          '<h3>Server Actions</h3><p>Functions that run on the server, called directly from client components. Use <code>"use server"</code> directive. Great for form submissions and data mutations.</p>',
        codeExample: `// Server Action (can be in a separate file)\n// "use server"\nasync function createPost(formData) {\n  const title = formData.get('title');\n  const content = formData.get('content');\n  console.log("Creating post:", title);\n  // await db.posts.create({ title, content });\n  // revalidatePath('/posts');\n}\n\n// Usage in a form (Server Component)\nfunction NewPostForm() {\n  return (\n    <form action={createPost}>\n      <input name="title" />\n      <textarea name="content" />\n      <button type="submit">Create</button>\n    </form>\n  );\n}\n\nconsole.log("Server Actions replace API routes for mutations");\nconsole.log("They run on the server, called from forms/buttons");`,
        quiz: [
          {
            question: "Server Actions use which directive?",
            options: [
              '"use client"',
              '"use server"',
              '"use action"',
              '"use mutation"',
            ],
            answer: 1,
          },
        ],
      },
      {
        id: "image-optimization",
        title: "Image Optimization",
        difficulty: "easy",
        shortDesc: "Automatic image optimization with next/image",
        theory:
          "<h3>next/image</h3><p>The Image component automatically optimizes images: lazy loading, responsive sizes, WebP/AVIF formats, prevents layout shift with required width/height.</p>",
        codeExample: `// Using next/image\n// import Image from 'next/image';\n\nfunction Gallery() {\n  return (\n    <div>\n      {/* Local image */}\n      {/* <Image src="/hero.jpg" alt="Hero" width={800} height={400} priority /> */}\n      \n      {/* Remote image */}\n      {/* <Image src="https://example.com/photo.jpg" alt="Photo" width={400} height={300} /> */}\n      \n      {/* Fill container */}\n      {/* <div style={{position:'relative', width:'100%', height:300}}>\n        <Image src="/bg.jpg" alt="BG" fill style={{objectFit:'cover'}} />\n      </div> */}\n    </div>\n  );\n}\n\nconsole.log("next/image features:");\nconsole.log("- Automatic lazy loading");\nconsole.log("- WebP/AVIF output");\nconsole.log("- Responsive sizes");\nconsole.log("- No layout shift (CLS)");`,
        quiz: [
          {
            question: "next/image requires width and height to prevent?",
            options: [
              "Large files",
              "Layout shift (CLS)",
              "Slow loading",
              "Low quality",
            ],
            answer: 1,
          },
        ],
      },
      {
        id: "ssg-isr",
        title: "SSG & ISR",
        difficulty: "hard",
        shortDesc: "Static generation and incremental regeneration",
        theory:
          "<h3>Static Site Generation (SSG)</h3><p>Pages generated at build time. Use <code>generateStaticParams</code> for dynamic routes. Fastest possible performance.</p><h3>ISR</h3><p>Incremental Static Regeneration updates static pages after deployment without rebuilding the entire site.</p>",
        codeExample: `// Static params for dynamic routes\nfunction generateStaticParams() {\n  // Return all possible slugs at build time\n  return [\n    { slug: 'hello-world' },\n    { slug: 'next-js-guide' },\n    { slug: 'react-tips' },\n  ];\n}\n\n// ISR: revalidate every 60 seconds\n// export const revalidate = 60;\n\nasync function BlogPost({ params }) {\n  const { slug } = params;\n  // const post = await getPost(slug);\n  console.log("Rendering blog post:", slug);\n  return null;\n}\n\nconsole.log("SSG: pages built at build time (fastest)");\nconsole.log("ISR: rebuild pages in background after N seconds");\nconsole.log("generateStaticParams: pre-render dynamic routes");`,
        quiz: [
          {
            question: "ISR stands for?",
            options: [
              "Internal Server Rendering",
              "Incremental Static Regeneration",
              "Immediate Server Response",
              "Integrated Static Resources",
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
        id: "nextjs-rendering-interview",
        title: "SSR vs SSG vs ISR",
        difficulty: "hard",
        shortDesc: "Explain rendering strategies like an expert",
        theory: `<h3>Key Interview Topic</h3><p>Interviewers love asking about rendering strategies. You must clearly explain when to use each:</p><ul><li><strong>SSR</strong> — dynamic pages (user dashboards, search results). Fresh data per request.</li><li><strong>SSG</strong> — static content (blogs, docs). Built once at build time.</li><li><strong>ISR</strong> — best of both. Static with background revalidation.</li><li><strong>CSR</strong> — interactive widgets, no SEO needed.</li></ul><div class="info-box"><div class="info-box-title">💡 Interview Answer</div>"I'd use SSG for marketing pages, ISR for product listings that update hourly, SSR for user-specific dashboards, and CSR for interactive charts."</div>`,
        codeExample: `// Rendering strategy decision tree
const scenarios = [
  { page: "Blog post", strategy: "SSG", reason: "Content rarely changes" },
  { page: "User dashboard", strategy: "SSR", reason: "User-specific data" },
  { page: "Product catalog", strategy: "ISR", reason: "Updates periodically" },
  { page: "Live stock ticker", strategy: "CSR", reason: "Real-time updates" },
  { page: "Landing page", strategy: "SSG", reason: "Static marketing content" },
  { page: "Search results", strategy: "SSR", reason: "Dynamic based on query" },
];

console.log("=== When to Use Each Rendering Strategy ===\\n");
scenarios.forEach(s => {
  console.log(s.page + " → " + s.strategy);
  console.log("  Why: " + s.reason + "\\n");
});`,
        quiz: [
          {
            question: "User dashboard should use?",
            options: ["SSG", "SSR", "ISR", "CSR"],
            answer: 1,
          },
          {
            question: "Blog posts are best rendered with?",
            options: ["SSR", "CSR", "SSG", "Streaming"],
            answer: 2,
          },
        ],
      },
      {
        id: "nextjs-performance-interview",
        title: "Performance Questions",
        difficulty: "medium",
        shortDesc: "Core Web Vitals and optimization techniques",
        theory: `<h3>Performance Interview Topics</h3><ul><li><strong>LCP</strong> — Largest Contentful Paint. Optimize with: priority images, preloading fonts, SSR.</li><li><strong>FID/INP</strong> — Interaction responsiveness. Reduce JS bundle, use Server Components.</li><li><strong>CLS</strong> — Cumulative Layout Shift. Use Image with width/height, font-display:swap.</li></ul><h3>Next.js Optimizations</h3><ul><li>Automatic code splitting per route</li><li>Image optimization with next/image</li><li>Font optimization with next/font</li><li>Route prefetching on link hover</li></ul>`,
        codeExample: `// Next.js performance best practices
const optimizations = {
  "Code Splitting": {
    what: "Each route loads only its JS",
    how: "Automatic with App Router",
    impact: "Smaller initial bundles"
  },
  "Image Optimization": {
    what: "Resize, compress, serve modern formats",
    how: "next/image component",
    impact: "70% smaller images"
  },
  "Server Components": {
    what: "Zero client-side JS for static parts",
    how: "Default in App Router",
    impact: "Smaller bundle, faster TTI"
  },
  "Dynamic Imports": {
    what: "Lazy-load components on demand",
    how: "next/dynamic or React.lazy",
    impact: "Faster initial page load"
  }
};

Object.entries(optimizations).forEach(([name, details]) => {
  console.log("📊 " + name);
  console.log("   What: " + details.what);
  console.log("   How: " + details.how);
  console.log("   Impact: " + details.impact + "\\n");
});`,
        quiz: [
          {
            question: "LCP stands for?",
            options: [
              "Last Content Paint",
              "Largest Contentful Paint",
              "Layout Content Pixel",
              "Loaded Component Paint",
            ],
            answer: 1,
          },
          {
            question: "Server Components reduce?",
            options: [
              "Server load",
              "Client JS bundle",
              "Database queries",
              "API calls",
            ],
            answer: 1,
          },
        ],
      },
      {
        id: "nextjs-common-questions",
        title: "Top 10 Interview Questions",
        difficulty: "medium",
        shortDesc: "Most frequently asked Next.js questions with answers",
        theory: `<h3>Frequently Asked Questions</h3><ol><li>What is the difference between pages/ and app/ router?</li><li>Server Components vs Client Components?</li><li>How does data fetching work in App Router?</li><li>What is middleware used for?</li><li>How do Server Actions differ from API routes?</li><li>Explain the Next.js caching strategy</li><li>How to handle authentication?</li><li>What is streaming and Suspense?</li><li>How does image optimization work?</li><li>When would you NOT use Next.js?</li></ol><div class="info-box"><div class="info-box-title">💡 Key Insight</div>For each question, prepare a concise answer (30 seconds) and a detailed follow-up (2 minutes).</div>`,
        codeExample: `// Quick-fire answers to common questions
const qa = [
  {
    q: "pages/ vs app/ router?",
    a: "app/ uses React Server Components, nested layouts, and streaming. pages/ is the legacy router."
  },
  {
    q: "Server vs Client Components?",
    a: "Server: no JS sent to browser, can access DB. Client: needs 'use client', can use hooks & interactivity."
  },
  {
    q: "When NOT to use Next.js?",
    a: "Simple SPAs without SEO needs, static documentation sites (use Astro), or when you need a non-React stack."
  },
  {
    q: "How does caching work?",
    a: "4 layers: Request Memoization, Data Cache, Full Route Cache, Router Cache. Each has its own invalidation."
  },
  {
    q: "Server Actions vs API Routes?",
    a: "Server Actions: form mutations, progressive enhancement. API Routes: public APIs, webhooks, external consumers."
  }
];

qa.forEach((item, i) => {
  console.log((i+1) + ". " + item.q);
  console.log("   → " + item.a + "\\n");
});`,
        quiz: [
          {
            question: "When would you NOT use Next.js?",
            options: [
              "E-commerce site",
              "Simple SPA without SEO",
              "Blog platform",
              "Dashboard app",
            ],
            answer: 1,
          },
          {
            question: "How many caching layers does Next.js have?",
            options: ["1", "2", "3", "4"],
            answer: 3,
          },
        ],
      },
    ],
  },
];
