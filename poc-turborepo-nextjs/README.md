# poc-turborepo-nextjs
⚡ Proof of concept for turborepo monorepo + nextjs

## Structure
```
                                [MONOREPO]
                                    │
  Application Packages -------->    ├── apps
    Applications Packages consuming │   ├── docs (next.js app)
    Shared Packages                 │   │   ├── pages/
                                    │   │   └── package.json
                                    │   │ 
                                    │   └── web (next.js app)
                                    │       ├── pages/
                                    │       └── package.json
                                    │
  Shared Packages ------------->    ├── packages
                                    │   ├── ui (all ui components)
                                    │   │   ├── button.tsx
                                    │   │   └── package.json
                                    │   └── utils (all utils)
                                    │       ├── get-message.ts
                                    │       └── package.json
                                    │
                                    ├── package.json
                                    └── turbo.json
```

## Getting Started
- `yarn run build`
  - Build all apps and packages
- `yarn run dev`
  - Develop all apps and packages

## Steps used to initialize this repo:
- npx create-turbo@latest
  - ```
      ? Where would you like to create your turborepo? ./
      ? Which package manager do you want to use? yarn
    ```