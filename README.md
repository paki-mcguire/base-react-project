# React + TypeScript + SCSS + Vite + Vitest + ESLint/Prettier

This template provides a base setup for a React project using Typescript, SCSS, vite with HMR, vitest, eslint rules (airbnb), and Prettier formatting.

## Step-by-step setup used for creating this React base project

### Create a React project with vite

1.  make sure that you have Node.js (v18 or later) installed
2.  use npm to create the React project

         npm create vite@latest base-react-project

3.  change to the project directory

         cd base-react-project

4.  install basic React dependencies

         npm install

5.  compile and run the project

         npm run dev

### Setup SCSS

1.  rename all .css files to .scss
2.  update all import references with .css to .scss
3.  install sass (scss preprocessor)

         npm install -D sass

4.  compile and run the project

          npm run dev

### AntDesign UI

1.  install AntDesign dependencies

         npm install antd @ant-design/icons

2.  import and use AntDesign components and styles as needed.

    Simple validation for AntDesign

          // App.tsx
          import React from 'react';
          import { Button } from 'antd';
          ...
          const App: React.FC = () => (

          <div className="App">
             <Button type="primary">Button</Button>
          </div>
          );
          export default App;

    Note: You should import react、react-dom、dayjs before using antd.js

3.  compile and run the project

            npm run dev

### Vitest

- See: <https://vitest.dev/guide/>

1.  install basic vitest dependencies

         npm i -D vitest jsdom @testing-library/react @testing-library/jest-dom @vitest/coverage-v8

2.  Vitest coverage setup:

          // vite.config.ts
          import { defineConfig } from 'vitest/config'

          export default defineConfig({
             test: {
                coverage: {
                   provider: 'v8' // or 'istanbul'
                },
             },
          })

3.  install basic vitest ui dependencies

         npm i -D @vitest/ui

         http://localhost:51204/**vitest**/

4.  create or update vitest.config.ts

         // vitest.config.ts
         export default {
            test: {
               reporters: ['html']
            }
         }

5.  set vitest scripts:

         // package.json
         "scripts": {
            ...
            "test": "vitest run",
            "test:coverage": "vitest run --coverage",
            "test:ui": "vitest --ui",
            ...
         },

6.  Simple validation for vitest:

          // sum.js
          export function sum(a, b) {
             return a + b
          }

          // sum.test.js
          import { expect, test } from 'vitest'
          import { sum } from './sum'

          test('adds 1 + 2 to equal 3', () => {
            expect(sum(1, 2)).toBe(3)
          })

    Try all test scripts.

### ESLint

1.  install eslint dependencies:

         npm install -D eslint prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks

2.  configure ESLint

         // .eslintrc.cjs
         {
            "extends": [
               "eslint:recommended",
               "plugin:react/recommended",
               "plugin:react-hooks/recommended",
               "plugin:import/recommended",
               "plugin:jsx-a11y/recommended",
               "plugin:@typescript-eslint/recommended",
               "eslint-config-prettier"
            ],
            "settings": {
               "react": {
                  "version": "detect"
               },
               "import/resolver": {
                  "node": {
                     "paths": [
                        "src"
                     ],
                     "extensions": [
                        ".js",
                        ".jsx",
                        ".ts",
                        ".tsx"
                     ]
                  }
               }
            },
            "rules": {
               "no-unused-vars": [
               "error",
               {
                  "vars": "all",
                  "args": "after-used",
                  "ignoreRestSiblings": true,
                  "argsIgnorePattern": "^_"
               }
            ],
            "react/react-in-jsx-scope": "off"
            }
         }

         // .eslint.cjs
         module.exports = {
            root: true,
            env: {
                  browser: true,
                  es2020: true
            },
            extends: [
               'eslint:recommended',
               "plugin:react/recommended",
               "plugin:react-hooks/recommended",
               "plugin:import/recommended",
               "plugin:jsx-a11y/recommended",
               'plugin:@typescript-eslint/recommended',
               "eslint-config-prettier",
            ],
            ignorePatterns: ['dist', '.eslintrc.cjs'],
            parser: '@typescript-eslint/parser',
            plugins: ['react-refresh'],
            "settings": {
               "react": {
                  version": "detect"
               },
               "import/resolver": {
                  "node": {
                     "paths": [
                        "src"
                     ],
                     "extensions": [
                        ".js",
                        ".jsx",
                        ".ts",
                        ".tsx"
                     ]
                  }
               }
            },
            rules: {
               "no-unused-vars": [
               "error",
                  {
                     "vars": "all",
                     "args": "after-used",
                     "ignoreRestSiblings": true,
                     "argsIgnorePattern": "^_"
                  }
               ],
               "react/react-in-jsx-scope": "off",
               "react/react-in-txs-scope": "off",
               'react-refresh/only-export-components': [
                  'warn',
                  { allowConstantExport: true },
               ],
            },
         }

         // .eslintignore (based in .gitignore with added specific file types)
         # Logs
         logs
         _.log
         npm-debug.log_
         yarn-debug.log*
         yarn-error.log*
         pnpm-debug.log*
         lerna-debug.log*

         node_modules
         dist
         dist-ssr
         \*.local
         html
         coverage
         env.d.ts

         # Editor directories and files
         .vscode/_
         !.vscode/extensions.json
         .idea
         .DS_Store
         _.suo
         _.ntvs_
         _.njsproj
         _.sln
         _.svg
         _.sw?

3.  configure Prettier

         // .prettierrc
         {
            "trailingComma": "all",
            "tabWidth": 2,
            "semi": true,
            "singleQuote": true,
            "printWidth": 120,
            "bracketSpacing": true,
            "endOfLine": "lf"
         }

         // .prettierignore (same as .elintignore)

4.  integrate ESLint and Prettier with VSCode (extensions)

- <https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint>
- <https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode>

         // .vscode/settings.json
         {
            ...
            "editor.formatOnSave": true,
            "editor.defaultFormatter": "esbenp.prettier-vscode"
         }

  ESLint/Prettier intallation tutorial:

  - <https://dev.to/marcosdiasdev/adding-eslint-and-prettier-to-a-vitejs-react-project-2kkj>

### Consider

- eslint-config-airbnb
  <https://www.npmjs.com/package/eslint-config-airbnb>

- Husky - used to run lint and tests on commits
  <https://github.com/typicode/husky>

- Intallation tutorial:
  <https://dev.to/marcosdiasdev/adding-eslint-and-prettier-to-a-vitejs-react-project-2kkj>
