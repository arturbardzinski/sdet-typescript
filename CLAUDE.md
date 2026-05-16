# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project purpose

Stage 4 of an SDET learning path: TypeScript foundations leading into Playwright (Stage 5). Mixes a small Playwright test suite with a learning playground (notes, examples, exercises). Not a production app.

## Commands

- `npm test` — run Playwright suite (only files matching `**/*.pw.test.ts` under [src/tests/](src/tests/), per [playwright.config.ts](playwright.config.ts)).
- `npm run test:headed` / `test:ui` / `test:debug` — headed / UI mode / inspector.
- `npm run dev` — run [src/playground.ts](src/playground.ts) via `tsx` (no build).
- `npm run build` — `tsc` to [dist/](dist/). `npm start` runs the compiled `dist/playground.js`.
- Run one Playwright test: `npx playwright test src/tests/login.pw.test.ts -g "happy path"`.
- Run a standalone (non-Playwright) `.test.ts` learning script directly: `node --import tsx src/tests/user.api.demo.test.ts`. These are *not* picked up by `npm test`.

## Architecture

- **ESM + NodeNext.** `package.json` has `"type": "module"`, [tsconfig.json](tsconfig.json) uses `module: NodeNext`, `target: ES2022`, `strict: true`. Relative imports in source **must use `.js` extensions** even though the files are `.ts` (e.g. `import { LoginPage } from "../pages/login.page.js"`). Keep this when adding new files.
- **Two coexisting test styles** under [src/tests/](src/tests/):
  - Playwright tests: `*.pw.test.ts` — discovered by `playwright.config.ts`, use `@playwright/test` runner, share the suite. `baseURL` is `https://the-internet.herokuapp.com`.
  - Learning scripts: `*.test.ts` (no `.pw`) — plain TS files run via `tsx`. [src/tests/_runner.ts](src/tests/_runner.ts) is a tiny hand-rolled runner (`runTest(name, fn)`), [user.api.demo.test.ts](src/tests/user.api.demo.test.ts) uses the standalone `expect` package. These exist only as TS practice; do not mix them into the Playwright suite.
- **Page Object Model** in [src/pages/](src/pages/) — one class per page, locators in the constructor, action + `expect*` assertion methods. Follow the pattern in [login.page.ts](src/pages/login.page.ts) / [secure.page.ts](src/pages/secure.page.ts) for new pages.
- **API layer is faked.** [src/api/endpoints.ts](src/api/endpoints.ts) delegates to [src/api/client.ts](src/api/client.ts) `fakeGetUser`, which returns a hard-coded `ApiResponse<User>` after `setTimeout`. No real HTTP. Models live in [src/models/](src/models/) (`ApiResponse<T>`, `User`).
- **Learning material** (read-only context, not part of tests): [notes/](notes/) (markdown theory), [src/examples/](src/examples/) (worked examples), [src/exercises/](src/exercises/) (`*.task.ts` student stubs), [src/playground.ts](src/playground.ts) (scratch).

## Conventions

- Language of comments, test titles, and notes: Polish. Keep it Polish when extending existing files.
- Demo creds for the-internet.herokuapp.com login: `tomsmith` / `SuperSecretPassword!` (already hardcoded in tests).
