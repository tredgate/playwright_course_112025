// failing_tests.spec.ts

import { expect, test } from "@playwright/test";

test("Failing test", async ({ page }) => {
  const dataObject = {
    username: "",
    email: "something@example.net",
  };
  await page.goto("https://tredgate.com/pmtool/");
  dataObject.username = "petrf";
  await expect(page.locator("#not_existing")).toBeVisible();
});
