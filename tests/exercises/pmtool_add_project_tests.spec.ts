import { test, expect } from "@playwright/test";

test(
  "Cvičení Asserty: Kontrola vytváření profilu",
  {
    tag: "@githubactions",
  },
  async ({ page }) => {
    await page.goto("https://tredgate.com/pmtool/");
    await page.locator("#username").fill("playwright_jaro24");
    await page.locator("#password").fill("Playwright!2024");
    await page.locator(".btn").click();
    await page.locator("#Projects").click();
    await expect(page.locator(".table-scrollable table")).toBeVisible(); // ? Explicitní čekání na prvek
    await page.locator('[test_id="Add Project"]').click();
    await expect(page.locator('[data-testid="Name"] input')).toBeVisible();
    await expect(page.locator('[type="submit"]')).toHaveText("Save");
  }
);
