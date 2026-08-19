# Learning Notes


## Narrow union types with discriminants

Give each variant a literal kind field so TypeScript narrows in a switch without casts.

## Prefer unknown over ny at boundaries

unknown forces a check before use, so parsing errors surface at the edge instead of deep in the call stack.
