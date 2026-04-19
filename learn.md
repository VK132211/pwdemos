# Playwright
## How to run tests?
`npm init playwright@latest`

`npx playwright test`    Runs the end-to-end tests.

`npx playwright test --ui` Starts the interactive UI mode.

`npx playwright test --project=chromium`
  Runs the tests only on Desktop Chrome.

`npx playwright test example`
  Runs the tests in a specific file.

`npx playwright test --debug`
  Runs the tests in debug mode.

`npx playwright codegen`
  Auto generate tests with Codegen.

We suggest that you begin by typing:

  `npx playwright test`

And check out the following files:
  - .\tests\example.spec.ts - Example end-to-end test
  - .\playwright.config.ts - Playwright Test configuration
## Locators
```
page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).```