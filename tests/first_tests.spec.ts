// first_tests.spec.ts
// tests/
import { test } from "@playwright/test";

test("Náš první test", async ({ page }) => {
  // * Testovací kroky
  await page.goto("https://tredgate.com/pmtool/");
  await page.locator("#username").fill("playwright_jaro24");
  await page.locator("#password").fill("Playwright!2024");
  await page.locator(".btn").click();
});
