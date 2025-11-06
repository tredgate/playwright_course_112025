import { test, expect } from "@playwright/test";

test("Cvičení: negativní testy", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool/");
  await expect(page.locator(".login-page-logo img")).toBeVisible();
  await expect(page.locator("#username-error")).not.toBeVisible();
  await expect(page.locator("#password-error")).not.toBeVisible();
});
