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

### inbuilt
```
page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
```
### css
* absolute
* relative
```
  * html
  * html>head
  * html>body>div>h1
  * html>body>div>div*:nth-child(1)
  * html>body>div>div>p[id=para2][class=sub]
  * body>div>*:first-child
  * body>div>*:last-child
  * p[id$='a2']
  * p[id^='par']
  * p[class*='ma']
  * p[class='main'][id='para1']
  * p[class='main']:not([id='para2'])
  * p[id='para1']+p
```
```
tag#id or #id
tag.class or .class
tag[attribute=value] or [attribute=value]
tag.class[attribute=value] .class[attribute=value]
```

### xpath

* absolute
* relative

```
  * /html
  * /html/head
  * /html/body/div/h1
  * /html/body/div/div[1]
  * /html/body/div/div/p[@id='para2' and @class='sub']
  * /body/div/*[1]
  * /body/div/*[last()]
  * //p[ends-with(@id,'a2')]
  * //p[starts-with(@id,'par')]
  * //p[contains(@class,'ma')]
  * //p[@class='main' and @id='para1']
  * //p[@class='main' and not(@id='para2')]
  * //p[@id='para1']/following-sibling::p[1]
  * //p[@id='para1']/self::p
  * //p[@id='para1']/parent::*
  * //p[@id='para1']/ancestor::*
  * //p[@id='para1']/descendant::*
  * //p[@id='para1']/following::*
  * //p[@id='para1']/preceding::*
  * //p[@id='para1']/following-sibling::p
```

## shadow dom
```page.locator('css=div#shadow-host').shadowRoot().locator('css=span')
page.locator('css=div#shadow-host').evaluateHandle(el => el.shadowRoot).locator('css=span')
```
## browser contexts
```
const context = await browser.newContext();
const page = await context.newPage();
```
## cookies
```
await context.addCookies([{ name: 'cookie-name', value: 'cookie-value', domain: 'example.com' }]);
const cookies = await context.cookies();
await context.clearCookies();
```