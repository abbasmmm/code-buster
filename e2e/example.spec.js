// @ts-check
const { test, expect } = require("@playwright/test");
const fs = require("fs");

const { chromium } = require("playwright");
const v8toIstanbul = require("v8-to-istanbul");

test("has title", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test("get started link", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole("heading", { name: "Installation" })
  ).toBeVisible();
});

test("coverage ", async ({ page }) => {
  await page.coverage.startJSCoverage();
  await page.goto("http://localhost:3006/");
  const coverage = await page.coverage.stopJSCoverage();
  const filteredCoverage = coverage.filter(
    (x) => !x.url?.includes("node_modu") && !x.url?.includes(".css")
  );
  for (const entry of filteredCoverage) {
    const converter = v8toIstanbul("", 0, { source: entry.source });
    await converter.load();
    converter.applyCoverage(entry.functions);
    fs.writeFileSync('test-files/'+ entry.url.split('/').pop()+ '.json', JSON.stringify(converter.toIstanbul()));
  }
});
