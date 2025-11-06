import { test } from "@playwright/test";

test.describe(
  "Označkovaná sada testů (tagy)",
  {
    tag: "@mujTag",
  },
  () => {
    test("Open pmtool", async ({ page }) => {
      await page.goto("https://tredgate.com/pmtool/");
    });

    test("Open Webtrain", async ({ page }) => {
      await page.goto("https://tredgate.com/webtrain/");
    });
  }
);

test(
  "Označený test (tag)",
  {
    tag: "@testTag",
  },
  async ({ page }) => {}
);
