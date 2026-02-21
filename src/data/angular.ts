import { Section } from "./types";

export const angularSections: Section[] = [
  {
    id: 1,
    title: "Core Concepts",
    icon: "🧱",
    topics: [
      {
        id: "angular-intro",
        title: "What is Angular?",
        difficulty: "easy",
        shortDesc: "TypeScript-based enterprise framework by Google",
        theory:
          "<h3>Angular Overview</h3><p>Angular is a full-featured TypeScript framework for building scalable web applications. Unlike React (a library), Angular is a complete platform with routing, forms, HTTP, and testing built in.</p><h3>Key Concepts</h3><ul><li><strong>Components</strong> — building blocks of UI</li><li><strong>Modules</strong> — organize related code</li><li><strong>Services</strong> — share logic across components</li><li><strong>Dependency Injection</strong> — Angular's core pattern</li></ul>",
        codeExample: `// Angular Component Structure\nconst component = {\n  selector: 'app-hello',\n  template: '<h1>Hello {{name}}!</h1>',\n  styleUrls: ['./hello.component.css']\n};\n\nclass HelloComponent {\n  constructor() { this.name = 'Angular'; }\n}\n\nconsole.log("Angular uses TypeScript by default");\nconsole.log("Components = template + logic + styles");\nconsole.log("Decorators: @Component, @Injectable, @NgModule");`,
        quiz: [
          {
            question: "Angular is written in?",
            options: ["JavaScript", "TypeScript", "Dart", "CoffeeScript"],
            answer: 1,
          },
          {
            question: "Angular is a ___ while React is a ___",
            options: [
              "Library, Framework",
              "Framework, Library",
              "Both frameworks",
              "Both libraries",
            ],
            answer: 1,
          },
        ],
      },
      {
        id: "components",
        title: "Components & Templates",
        difficulty: "easy",
        shortDesc: "Building UI blocks with data binding",
        theory:
          '<h3>Components</h3><p>Every Angular app is a tree of components. Each has a TypeScript class, HTML template, and CSS styles.</p><h3>Data Binding</h3><ul><li><code>{{value}}</code> — interpolation</li><li><code>[property]="value"</code> — property binding</li><li><code>(event)="handler()"</code> — event binding</li><li><code>[(ngModel)]="value"</code> — two-way binding</li></ul>',
        codeExample: `// Data binding examples\nconst bindings = {\n  interpolation: '{{ title }}',\n  property: '[src]="imageUrl"',\n  event: '(click)="onClick()"',\n  twoWay: '[(ngModel)]="username"'\n};\n\nfor (const [type, syntax] of Object.entries(bindings)) {\n  console.log(type + ": " + syntax);\n}\n\nconsole.log("\\nComponent lifecycle hooks:");\nconsole.log("ngOnInit → after first render");\nconsole.log("ngOnChanges → when inputs change");\nconsole.log("ngOnDestroy → cleanup before removal");`,
        quiz: [
          {
            question: "Two-way binding syntax is?",
            options: ["{{value}}", "[value]", "(value)", "[(ngModel)]"],
            answer: 3,
          },
        ],
      },
      {
        id: "services-di",
        title: "Services & Dependency Injection",
        difficulty: "medium",
        shortDesc: "Share logic and data across components",
        theory:
          '<h3>Services</h3><p>Services are classes marked with <code>@Injectable()</code> that contain shared business logic. Angular\'s DI system instantiates and injects them automatically.</p><div class="info-box"><div class="info-box-title">💡 Key Pattern</div>Keep components thin (UI logic only). Move data fetching, business logic, and state management to services.</div>',
        codeExample: `// Service pattern\nclass UserService {\n  constructor() { this.users = []; }\n  \n  getUsers() {\n    console.log("Fetching users from API...");\n    return [{id:1,name:'Alice'},{id:2,name:'Bob'}];\n  }\n  \n  addUser(name) {\n    this.users.push({id: Date.now(), name});\n    console.log("Added user:", name);\n  }\n}\n\n// Component injects the service\nclass UserListComponent {\n  constructor() {\n    this.userService = new UserService();\n    this.users = this.userService.getUsers();\n    console.log("Users:", JSON.stringify(this.users));\n  }\n}\n\nnew UserListComponent();`,
        quiz: [
          {
            question: "Services use which decorator?",
            options: [
              "@Component()",
              "@Service()",
              "@Injectable()",
              "@Provider()",
            ],
            answer: 2,
          },
        ],
      },
      {
        id: "directives",
        title: "Directives",
        difficulty: "medium",
        shortDesc: "Structural and attribute directives",
        theory:
          "<h3>Structural Directives</h3><ul><li><code>*ngIf</code> — conditionally render</li><li><code>*ngFor</code> — loop over items</li><li><code>*ngSwitch</code> — switch between views</li></ul><h3>Attribute Directives</h3><ul><li><code>ngClass</code> — dynamic CSS classes</li><li><code>ngStyle</code> — dynamic inline styles</li></ul>",
        codeExample: `// Simulating Angular directives in JS\nconst items = ['Angular', 'React', 'Vue', 'Svelte'];\n\n// *ngFor equivalent\nconsole.log("*ngFor simulation:");\nitems.forEach((item, i) => console.log("  " + i + ": " + item));\n\n// *ngIf equivalent\nconst isLoggedIn = true;\nconsole.log("\\n*ngIf simulation:");\nif (isLoggedIn) console.log("  Welcome back!");\nelse console.log("  Please log in");\n\n// ngClass equivalent\nconst isActive = true;\nconst classes = { 'active': isActive, 'disabled': !isActive };\nconsole.log("\\nngClass:", JSON.stringify(classes));`,
        quiz: [
          {
            question: "*ngFor is a ___ directive",
            options: ["Attribute", "Structural", "Component", "Pipe"],
            answer: 1,
          },
        ],
      },
      {
        id: "rxjs-basics",
        title: "RxJS Basics",
        difficulty: "hard",
        shortDesc: "Reactive programming with Observables",
        theory:
          "<h3>RxJS in Angular</h3><p>Angular heavily uses RxJS for async operations. Observables are streams of values over time. Use operators to transform, filter, and combine streams.</p><h3>Key Operators</h3><ul><li><code>map</code>, <code>filter</code>, <code>tap</code> — transform</li><li><code>switchMap</code>, <code>mergeMap</code> — flatten</li><li><code>debounceTime</code>, <code>distinctUntilChanged</code> — control flow</li></ul>",
        codeExample: `// RxJS concepts simulated in plain JS\n// Observable = a stream of values over time\n\n// Simulating an Observable\nfunction createObservable(subscriber) {\n  subscriber.next(1);\n  subscriber.next(2);\n  subscriber.next(3);\n  setTimeout(() => subscriber.next(4), 100);\n}\n\nconst subscriber = {\n  next: (val) => console.log("Received:", val),\n  error: (err) => console.log("Error:", err),\n  complete: () => console.log("Complete!")\n};\n\ncreateObservable(subscriber);\n\n// Pipe operators concept\nconst numbers = [1, 2, 3, 4, 5];\nconst result = numbers\n  .filter(n => n > 2)\n  .map(n => n * 10);\nconsole.log("Piped result:", result.join(", "));`,
        quiz: [
          {
            question: "RxJS Observables are?",
            options: [
              "Promises",
              "Streams of values",
              "Single values",
              "Callbacks",
            ],
            answer: 1,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Advanced Angular",
    icon: "⚙️",
    topics: [
      {
        id: "reactive-forms",
        title: "Reactive Forms",
        difficulty: "medium",
        shortDesc: "Form handling with FormBuilder and validators",
        theory:
          "<h3>Reactive Forms</h3><p>Angular's reactive forms provide explicit, immutable form state management. Use <code>FormGroup</code>, <code>FormControl</code>, and <code>FormBuilder</code>.</p>",
        codeExample: `// Reactive Forms concepts\nclass FormControl {\n  constructor(defaultValue, validators = []) {\n    this.value = defaultValue;\n    this.validators = validators;\n    this.valid = true;\n  }\n  setValue(val) { this.value = val; this.validate(); }\n  validate() { this.valid = this.validators.every(v => v(this.value)); }\n}\n\nconst required = (val) => val !== '' && val !== null;\nconst minLength = (min) => (val) => val.length >= min;\n\nconst email = new FormControl('', [required]);\nconst password = new FormControl('', [required, minLength(8)]);\n\nemail.setValue('user@example.com');\npassword.setValue('short');\n\nconsole.log("Email valid:", email.valid);\nconsole.log("Password valid:", password.valid);\npassword.setValue('longpassword123');\nconsole.log("Password valid after fix:", password.valid);`,
        quiz: [
          {
            question: "Reactive forms use which class for field control?",
            options: ["FormField", "FormControl", "InputControl", "FieldGroup"],
            answer: 1,
          },
        ],
      },
      {
        id: "routing",
        title: "Angular Routing",
        difficulty: "medium",
        shortDesc: "Navigate between views with Router",
        theory:
          "<h3>Angular Router</h3><p>Configure routes mapping URLs to components. Supports lazy loading, route guards, resolvers, and nested routes.</p>",
        codeExample: `// Route configuration concept\nconst routes = [\n  { path: '', component: 'HomeComponent' },\n  { path: 'about', component: 'AboutComponent' },\n  { path: 'users/:id', component: 'UserDetailComponent' },\n  { path: 'admin', component: 'AdminComponent', canActivate: ['AuthGuard'],\n    children: [\n      { path: 'dashboard', component: 'AdminDashboard' },\n      { path: 'settings', component: 'AdminSettings' },\n    ]\n  },\n  { path: '**', component: 'NotFoundComponent' }\n];\n\nconsole.log("Routes configured:");\nroutes.forEach(r => console.log("  /" + r.path + " → " + r.component));\nconsole.log("\\nFeatures: lazy loading, guards, resolvers");`,
        quiz: [
          {
            question: "Wildcard route uses which path?",
            options: ["*", "**", "???", "any"],
            answer: 1,
          },
        ],
      },
      {
        id: "signals",
        title: "Angular Signals",
        difficulty: "medium",
        shortDesc: "Modern reactive state management",
        theory:
          "<h3>Signals (Angular 16+)</h3><p>Signals are a new reactive primitive. They track when values change and automatically update dependent computations and views.</p><ul><li><code>signal()</code> — writable signal</li><li><code>computed()</code> — derived from other signals</li><li><code>effect()</code> — side effects when signals change</li></ul>",
        codeExample: `// Signals concept (simulated)\nfunction signal(initialValue) {\n  let value = initialValue;\n  const listeners = [];\n  return {\n    get: () => value,\n    set: (newVal) => { value = newVal; listeners.forEach(l => l(value)); },\n    subscribe: (fn) => listeners.push(fn)\n  };\n}\n\nfunction computed(fn, deps) {\n  const s = signal(fn());\n  deps.forEach(d => d.subscribe(() => s.set(fn())));\n  return s;\n}\n\nconst count = signal(0);\nconst doubled = computed(() => count.get() * 2, [count]);\n\nconsole.log("Count:", count.get(), "Doubled:", doubled.get());\ncount.set(5);\nconsole.log("Count:", count.get(), "Doubled:", doubled.get());\ncount.set(10);\nconsole.log("Count:", count.get(), "Doubled:", doubled.get());`,
        quiz: [
          {
            question: "Angular Signals were introduced in version?",
            options: ["14", "15", "16", "17"],
            answer: 2,
          },
        ],
      },
      {
        id: "pipes",
        title: "Pipes",
        difficulty: "easy",
        shortDesc: "Transform displayed values in templates",
        theory:
          "<h3>Pipes</h3><p>Pipes transform data in templates. Built-in pipes: <code>date</code>, <code>currency</code>, <code>uppercase</code>, <code>json</code>, <code>async</code>. Create custom pipes for reusable transformations.</p>",
        codeExample: `// Simulating Angular pipes\nconst pipes = {\n  uppercase: (val) => String(val).toUpperCase(),\n  lowercase: (val) => String(val).toLowerCase(),\n  currency: (val, symbol = '$') => symbol + Number(val).toFixed(2),\n  date: (val) => new Date(val).toLocaleDateString(),\n  json: (val) => JSON.stringify(val, null, 2),\n  truncate: (val, limit = 20) => val.length > limit ? val.slice(0, limit) + '...' : val,\n};\n\nconsole.log("uppercase:", pipes.uppercase("hello angular"));\nconsole.log("currency:", pipes.currency(29.9));\nconsole.log("date:", pipes.date("2024-06-15"));\nconsole.log("json:", pipes.json({name: "Angular", version: 17}));\nconsole.log("truncate:", pipes.truncate("This is a very long string that needs truncating"));`,
        quiz: [
          {
            question: "Pipe syntax in template is?",
            options: [
              "value | pipeName",
              "pipeName(value)",
              "value.pipe()",
              "pipe:value",
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
        id: "angular-change-detection",
        title: "Change Detection Deep Dive",
        difficulty: "hard",
        shortDesc: "Explain Zone.js, OnPush, and signals",
        theory: `<h3>How Angular Detects Changes</h3><ul><li><strong>Zone.js</strong> — patches async APIs, triggers change detection on every event</li><li><strong>Default strategy</strong> — checks entire component tree (expensive)</li><li><strong>OnPush strategy</strong> — only checks when @Input refs change or events fire</li><li><strong>Signals (Angular 16+)</strong> — fine-grained reactivity, no Zone.js needed</li></ul><div class="info-box"><div class="info-box-title">💡 Interview Answer</div>"I use OnPush for performance-critical components and Signals for new code. Zone.js is being phased out."</div>`,
        codeExample: `// Change detection strategies
const strategies = {
  "Default": {
    trigger: "Any async event (click, timer, HTTP)",
    checks: "Entire component tree",
    performance: "Can be slow with many components"
  },
  "OnPush": {
    trigger: "Input reference change, events, async pipe",
    checks: "Only this component and children",
    performance: "Much faster, recommended"
  },
  "Signals": {
    trigger: "Signal value change",
    checks: "Only affected views",
    performance: "Best, no Zone.js overhead"
  }
};

Object.entries(strategies).forEach(([name, details]) => {
  console.log("=== " + name + " ===");
  console.log("  Trigger: " + details.trigger);
  console.log("  Checks: " + details.checks);
  console.log("  Performance: " + details.performance + "\\n");
});`,
        quiz: [
          {
            question: "OnPush checks the component when?",
            options: [
              "Every event",
              "Input reference changes",
              "Never",
              "On timer",
            ],
            answer: 1,
          },
          {
            question: "Signals replace which Angular technology?",
            options: ["RxJS completely", "Zone.js", "NgModules", "Pipes"],
            answer: 1,
          },
        ],
      },
      {
        id: "angular-rxjs-interview",
        title: "RxJS Interview Questions",
        difficulty: "hard",
        shortDesc: "Observables, operators, and common patterns",
        theory: `<h3>Must-Know RxJS Concepts</h3><ul><li><strong>Observable vs Promise</strong> — Observable is lazy, cancellable, emits multiple values</li><li><strong>Subject types</strong> — Subject, BehaviorSubject, ReplaySubject, AsyncSubject</li><li><strong>Key operators</strong> — switchMap (cancel previous), mergeMap (keep all), concatMap (queue), exhaustMap (ignore new)</li></ul><h3>Common Mistake</h3><p>Using subscribe inside subscribe (callback hell). Use higher-order mapping operators instead.</p>`,
        codeExample: `// RxJS patterns for interviews
// switchMap vs mergeMap vs concatMap

const operators = {
  switchMap: {
    behavior: "Cancels previous, uses latest",
    useCase: "Search autocomplete (cancel old searches)",
    example: "searchInput$.pipe(switchMap(q => search(q)))"
  },
  mergeMap: {
    behavior: "Keeps all subscriptions active",
    useCase: "Saving multiple items in parallel",
    example: "items$.pipe(mergeMap(item => save(item)))"
  },
  concatMap: {
    behavior: "Queues and processes one at a time",
    useCase: "Sequential API calls that depend on order",
    example: "actions$.pipe(concatMap(a => process(a)))"
  },
  exhaustMap: {
    behavior: "Ignores new while current is active",
    useCase: "Prevent duplicate form submissions",
    example: "click$.pipe(exhaustMap(() => submitForm()))"
  }
};

Object.entries(operators).forEach(([name, info]) => {
  console.log("🔄 " + name);
  console.log("   Behavior: " + info.behavior);
  console.log("   Use case: " + info.useCase + "\\n");
});`,
        quiz: [
          {
            question: "switchMap does what to previous subscriptions?",
            options: [
              "Keeps them",
              "Cancels them",
              "Queues them",
              "Pauses them",
            ],
            answer: 1,
          },
          {
            question: "Observables vs Promises — observables are?",
            options: [
              "Eager",
              "Lazy and cancellable",
              "Single value only",
              "Synchronous",
            ],
            answer: 1,
          },
        ],
      },
      {
        id: "angular-top-questions",
        title: "Top Angular Questions",
        difficulty: "medium",
        shortDesc: "Most asked Angular interview questions",
        theory: `<h3>Frequently Asked</h3><ol><li>What is dependency injection in Angular?</li><li>ViewChild vs ContentChild?</li><li>Lazy loading modules — how and why?</li><li>Template-driven vs Reactive forms?</li><li>Component lifecycle hooks order?</li><li>Standalone components vs NgModules?</li><li>How does Angular routing work?</li><li>What are guards (canActivate, canDeactivate)?</li></ol>`,
        codeExample: `// Lifecycle hooks order
const lifecycleHooks = [
  "constructor()",
  "ngOnChanges()",
  "ngOnInit()",
  "ngDoCheck()",
  "ngAfterContentInit()",
  "ngAfterContentChecked()",
  "ngAfterViewInit()",
  "ngAfterViewChecked()",
  "ngOnDestroy()"
];

console.log("=== Angular Lifecycle Hooks (in order) ===\\n");
lifecycleHooks.forEach((hook, i) => console.log((i+1) + ". " + hook));

console.log("\\n=== Key Interview Points ===");
console.log("• ngOnInit: called ONCE after first ngOnChanges");
console.log("• ngOnChanges: called when @Input values change");
console.log("• ngOnDestroy: cleanup subscriptions here!");
console.log("• ngAfterViewInit: DOM is ready here");`,
        quiz: [
          {
            question: "ngOnInit is called?",
            options: [
              "Before constructor",
              "After first ngOnChanges",
              "On every change",
              "On destroy",
            ],
            answer: 1,
          },
          {
            question: "Where should you unsubscribe from observables?",
            options: ["ngOnInit", "ngOnChanges", "ngOnDestroy", "constructor"],
            answer: 2,
          },
        ],
      },
    ],
  },
];
