# React + TypeScript + SCSS + Vite + Vitest + ESLint/Prettier

This template provides a base setup for a React project using Typescript, SCSS, vite with HMR, vitest, eslint rules (airbnb), and Prettier formatting.

Note: All folders and files have been changed to lowercase and simple test have been added.

## Step-by-step setup used for creating this React base project

### Node version and final 'package.json'

- 'node.js'

      v 18.18.0

- Final 'package.json' after step-by-step setup (this README)

      // package.json
      {
         "name": "base-react-project",
         "private": true,
         "version": "0.0.0",
         "type": "module",
         "scripts": {
            "dev": "vite",
            "build": "tsc && vite build",
            "test": "vitest run",
            "test:coverage": "vitest run --coverage",
            "test:ui": "vitest --ui",
            "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
            "preview": "vite preview"
         },
         "dependencies": {
            "@ant-design/icons": "^5.2.6",
            "antd": "^5.9.3",
            "react": "^18.2.0",
            "react-dom": "^18.2.0",
            "react-router-dom": "^6.16.0"
         },
         "devDependencies": {
            "@jest/globals": "^29.7.0",
            "@testing-library/jest-dom": "^6.1.3",
            "@testing-library/react": "^14.0.0",
            "@types/react": "^18.2.15",
            "@types/react-dom": "^18.2.7",
            "@typescript-eslint/eslint-plugin": "^6.7.3",
            "@typescript-eslint/parser": "^6.7.3",
            "@vitejs/plugin-react": "^4.0.3",
            "@vitest/coverage-v8": "^0.34.5",
            "@vitest/ui": "^0.34.5",
            "eslint": "^8.50.0",
            "eslint-config-prettier": "^9.0.0",
            "eslint-plugin-import": "^2.28.1",
            "eslint-plugin-jsx-a11y": "^6.7.1",
            "eslint-plugin-react": "^7.33.2",
            "eslint-plugin-react-hooks": "^4.6.0",
            "eslint-plugin-react-refresh": "^0.4.3",
            "jsdom": "^22.1.0",
            "prettier": "^3.0.3",
            "sass": "^1.68.0",
            "typescript": "^5.0.2",
            "vitest": "^0.34.5"
            "vite": "^4.4.5",
         }
      }

### Create a React project with vite

1.  Make sure that you have Node.js (v18 or later) installed
2.  Use npm to create the React project

         npm create vite@latest base-react-project

3.  Change to the project directory

         cd base-react-project

4.  Install basic React dependencies

         npm install

5.  Compile and run the project

         npm run dev

### Setup SCSS

1.  Rename all .css files to .scss
2.  Update all import references with .css to .scss
3.  Install sass (scss preprocessor)

         npm install -D sass

4.  Compile and run the project

          npm run dev

### Setup Router

1.  Add react router

         npm i react-router-dom --save

### Rename folders and files

1.  Manually rename all folders, files. and file references to lowercase (kebab-case) but keep React component names camelcase (PascalCase).

    - Example

          // src/pages/home/home.tsx
          import './home.scss';

          const Home = () => {
             return (
                <div className="home" data-testid="Home">
                   Home Component
                </div>
             );
          };

          export default Home; // must be camelcase (PascalCase)

2.  This naming convention needs to be followed whenever creating new React components.

### AntDesign UI

1.  Install AntDesign dependencies

         npm install antd @ant-design/icons

2.  Import and use AntDesign components and styles as needed.

    Simple validation for AntDesign

          // app.tsx
          import React from 'react';
          import { Button } from 'antd';
          ...
          const App: React.FC = () => (

          <div className="app">
             <Button type="primary">Button</Button>
          </div>
          );
          export default App;

    Note: You should import react、react-dom、dayjs before using antd.js

3.  Compile and run the project

            npm run dev

### Vitest

- See: <https://vitest.dev/guide/>

1.  Install basic vitest dependencies

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

3.  Install basic vitest ui dependencies

         npm i -D @vitest/ui

         http://localhost:51204/**vitest**/

4.  Create or update vitest.config.ts

         // vitest.config.ts
         export default {
            test: {
               reporters: ['html']
            }
         }

5.  Set vitest scripts:

         // package.json
         "scripts": {
            ...
            "test": "vitest run",
            "test:coverage": "vitest run --coverage",
            "test:ui": "vitest --ui",
            ...
         },

6.  Add 'jsdom' and jest global types

         npm i -D @jest/globals jsdom

7.  Update 'vitest.config.ts'

         /// <reference types="vitest" />

         // See: https://vitejs.dev/config/

         import { defineConfig } from 'vite'
         import react from '@vitejs/plugin-react';

         export default defineConfig({
            plugins: [react()],
            test: {
               globals: true,
               coverage: {
                  reporter: ["text"],
                  provider: 'v8', // or 'istanbul'
               },
               environment: "jsdom",
               setupFiles: "./src/tests/setup.js"
            }
         })

8.  Create 'src/test/setup.js'

         // setup.js
         import '@testing-library/jest-dom'

9.  Create non-component function files, 'src/sum.js' and 'src/sum.test.js', for validation of vitest:

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

10. Create a simple React component for validation of vitest:

    - Create 'src/demo.tsx'

          // demo.tsx
          import './demo.scss';

          // type DemoProps = {};

          const Demo = () => {
             // console.log('Demo props', props);

             return (
                <div className="demo" data-testid="Demo">
                   Demo Component
                </div>
             );
          };

          export default Demo;

    - Create 'src/demo.scss'

          // demo.scss
          .demo {}

    - Create 'src/demo.test.tsx'

          // demo.test.tsx
          import { describe, test, expect } from 'vitest';
          import { render, screen } from '@testing-library/react';
          import '@testing-library/jest-dom';
          import Demo from './demo';

          describe('Demo component tests', () => {
             test('renders the Demo component', () => {
                render(<Demo />);

                const demoElement = screen.getByTestId('Demo');

                expect(demoElement).toBeInTheDocument();
                expect(demoElement).toHaveTextContent('Demo Component');
             });
          });

- Note that in the test, the component React container with 'data-testid="Demo"' attribute can be accessed using 'getByTestId('Demo')'

### ESLint

1.  Install eslint dependencies:

         npm install -D eslint prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks

2.  Configure ESLint

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

3.  Configure Prettier

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

4.  Integrate ESLint and Prettier with VSCode (extensions)

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

- eslint-config-airbnb - a common eslint rules definition

  <https://www.npmjs.com/package/eslint-config-airbnb>

- Husky - used to automatically run lint and tests upon every commit

  <https://github.com/typicode/husky>

- Generate React CLI - simple React component and class generator:

  <https://www.npmjs.com/package/generate-react-cli?activeTab=readme>

- Installation tutorial:

  <https://dev.to/marcosdiasdev/adding-eslint-and-prettier-to-a-vitejs-react-project-2kkj>
