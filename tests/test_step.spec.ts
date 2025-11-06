// test_step.spec.ts
import { test } from "@playwright/test";

test("Testovací kroky test.step", async ({ page }) => {
  await test.step("Otevření Pmtool", async () => {
    await page.goto("https://tredgate.com/pmtool/");
  });
  await test.step("Přihlášení", async () => {
    await page.locator("#username").fill("playwright_jaro24");
    await page.locator("#password").fill("Playwright!2024");
    await page.locator(".btn").click();
  });
});
