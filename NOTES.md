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

## Key by identity, never by index

Index keys make React reuse the wrong node when the list reorders, stranding input state.

## useMemo is not a correctness tool

It can be dropped at any time. If logic must run once, that belongs in a ref or an effect.

## Zod parse at the boundary, infer inward

z.infer<typeof Schema> gives one source of truth for both runtime and compile time.

## Tailwind: prefer arbitrary values over new config keys

One-off w-[37px] beats growing the theme with names nobody reuses.

## Promise.allSettled for partial-failure fanout

Promise.all rejects on the first error and discards every result that already resolved.
