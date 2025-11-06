// tests/
// test_structures.spec.ts
import { test, expect } from "@playwright/test";

test.describe("Testovací sada: Pmtool Login Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://tredgate.com/pmtool/");
  });

  test("Successful login", async ({ page }) => {
    await page.locator("#username").fill("playwright_jaro24");
    await page.locator("#password").fill("Playwright!2024");
    await page.locator(".btn").click();
    await expect(
      page.locator("#welcome-page-header"),
      "Welcome Page Header Have Text"
    ).toHaveText("Vítej v testovací aplikaci Tredgate Project");
  });

  test("Failed Login", async ({ page }) => {
    await page.locator("#username").fill("NON_EXISTING");
    await page.locator("#password").fill("ABCD987");
    await page.locator(".btn").click();
    await expect(
      page.locator(".alert"),
      "Alert Message is Displayed"
    ).toBeVisible();
  });
});
