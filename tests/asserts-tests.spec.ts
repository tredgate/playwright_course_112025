// asserts-tests.spec.ts
// tests/
import { test, expect } from "@playwright/test"; // ? expect musíme naimportovat, abychom mohli kontrolovat stavy prvků na stránce

test("toContainText - kontrola části textu prvku", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool/");
  await page.locator("#username").fill("playwright_jaro24");
  await page.locator("#password").fill("Playwright!2024");
  await page.locator(".btn").click();

  // * Základní assert
  await expect(page.locator("#welcome-page-header")).toContainText(
    "Vítej v testovací aplikaci"
  );

  // * Assert s vlastní zprávou
  await expect(
    page.locator("#welcome-page-header"),
    "Nadpis stránky Dashboard obsahuje text"
  ).toContainText("Vítej v testovací aplikaci");

  // * Alternativní zápis expectu - s lokátorem mimo expect
  const pageHeader = page.locator("#welcome-page-header");
  await expect(
    pageHeader,
    "Nadpis stránky Dashboard obsahuje text"
  ).toContainText("Vítej v testovací aplikaci");
});

test("toHaveText - kontrola textu v prvku (celý text)", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool/");
  await page.locator("#username").fill("playwright_jaro24");
  await page.locator("#password").fill("Playwright!2024");
  await page.locator(".btn").click();
  await expect(
    page.locator("#welcome-page-header"),
    "Nadpis Dashboard má text"
  ).toHaveText("Vítej v testovací aplikaci Tredgate Project");
});

test("toBeVisible - Kontrola viditelnosti prvku", async ({ page }) => {
  await page.goto("http://tredgate.com/pmtool/");
  await expect(
    page.locator(".login-page-logo img"),
    "Logo je viditelné"
  ).toBeVisible();
});

test("toHaveValue - kontrola hodnoty pole", async ({ page }) => {
  // ? Pokud máme vyplněný text v poli (input), tak to z pohledu HTML není text, ale hodnota (value). Kontroly na text (toContainText, toHaveText) v tomto případě nebudou fungovat.
  const usernameValue = "pw_skoleni";

  await page.goto("http://tredgate.com/pmtool/");
  await page.locator("#username").fill(usernameValue);
  await expect(
    page.locator("#username"),
    "Pole username má hodnotu"
  ).toHaveValue(usernameValue);
});

test.skip(
  "Soft Assert Test",
  {
    annotation: {
      type: "bug",
      description: "BUG_123D - login title is not correct",
    },
  },
  async ({ page }) => {
    await page.goto("https://tredgate.com/pmtool/");
    await expect.soft(page.locator(".form-title")).toHaveText("Login PMTOOL");
    await page.locator("#username").fill("playwright_jaro24");
    await page.locator("#password").fill("Playwright!2024");
    await page.locator(".btn").click();
  }
);

test("Negativní testy", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool/");
  await expect(page.locator(".login-page-logo img")).toBeVisible(); // ? Zajištění načtení aplikace pro negativní test
  await expect(page.locator(".alert")).not.toBeVisible(); // ? Kontrola prvku, že není viditelný
});
