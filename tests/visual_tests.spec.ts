import { expect, test } from "@playwright/test";

test("Základní vizuální test", async ({ page }) => {
  await page.goto("https://tredgate.com/webtrain/dynamic-content.html");
  await expect(page).toHaveScreenshot("webtrain.png");
});
