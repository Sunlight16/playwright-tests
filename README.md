# Playwright Tests

End-to-end Playwright tests for DemoQA workflows.

## Prerequisites

- [Node.js](https://nodejs.org/) 18+ (LTS recommended)
- npm (comes with Node.js)

## Install dependencies

```bash
npm install
```

## Install Playwright browsers

```bash
npx playwright install
```

## Run tests

Run all tests:

```bash
npx playwright test
```

Run only the DemoQA spec:

```bash
npx playwright test tests/demoqa.spec.ts
```