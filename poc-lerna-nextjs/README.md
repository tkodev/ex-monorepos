# poc-lerna-nextjs
⚡ Proof of concept for lerna monorepo + create-react-app + nextjs

## Structure
```
                               [MONOREPO]
                                  │
Applications folder --------->    ├── apps
  application consuming           │   ├── nextjs-app
  shared library                  │   │   ├── package.json
                                  │   │   └── pages/
                                  │   │ 
                                  │   └── react-app
                                  │       ├── README.md
                                  │       ├── babel.config.js
                                  │       ├── package.json
                                  │       ├── server.js
                                  │       ├── src/
                                  │       ├── webpack.config.js
                                  │       └── yarn.lock
                                  │
shared components folder ---->    ├── components
                                  │   └── my-button
                                  │       ├── package.json
                                  │       ├── src/
                                  │       └── yarn.lock
                                  │
shared utility folder ------->    ├── utils
                                  │   └── get-message
                                  │       ├── package.json
                                  │       └── src/
                                  │
                                  ├── lerna.json
                                  ├── package.json
                                  └── yarn.lock

```

## Getting Started
- `yarn run bootstrap` install
- `yarn run story` run story book
- `yarn run dev:reactapp` run app in dev mode
- `yarn run dev:nextjsapp` run another app in dev mode
