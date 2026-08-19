# Learning Notes


## Narrow union types with discriminants

Give each variant a literal kind field so TypeScript narrows in a switch without casts.

## Prefer unknown over ny at boundaries

unknown forces a check before use, so parsing errors surface at the edge instead of deep in the call stack.

## satisfies keeps literal inference

const cfg = {...} satisfies Config validates the shape but keeps the narrow literal types s Config would widen away.

## Server Components cannot use hooks

No useState/useEffect - they never hydrate. Push interactivity into a child marked 'use client'.

## generateStaticParams replaces getStaticPaths

App Router prerenders dynamic segments from the array this returns at build time.

## Colocate loading.tsx with the route

Next wraps the segment in a Suspense boundary automatically - no manual fallback wiring.

## Route handlers are cached by default

A GET in route.ts is static unless it reads a request value or sets dynamic = 'force-dynamic'.

## useEffect cleanup runs on every rerun

Return the teardown, not a promise - an async effect body silently skips cleanup.
