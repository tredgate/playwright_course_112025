// actions_tests.spec.ts
import { test } from "@playwright/test";
import path from "path";

test("pressSequentially - psaní znaků jeden za druhým", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool");
  await page.locator("#username").fill("Start");
  await page.locator("#username").fill("End"); // ? fill vždy nahrazuje již existující
  await page.locator("#username").pressSequentially("Kde toto bude?"); // ? pressSequentially nikdy nepřepisuje původní hodnotu, skončíme s textem: EndKde toto bude?
  await page.locator("#username").clear(); // ? Vyčištění hodnoty pole
  await page
    .locator("#username")
    .pressSequentially("Dlouhý text", { delay: 500 }); // ? Zpomalení psaní pomocí pressSequentially - 500 ms mezi jednotlivými úhozy kláves. 500 ms je hodně (kvůli ukázce), standardně se nastavuje cca 20 - 100 ms
});

test("selectOption - výběr z dropdown", async ({ page }) => {
  await page.goto("https://tredgate.com/webtrain/registration.html");
  await page.locator("#gender").selectOption("female"); // ? Výběr z select prvku pomocí option value <option value="female">
  await page.locator("#gender").selectOption({ label: "Male" }); // ? Výběr z select prvku pomocí textu (labelu): <option>Male</option>
});

test("check - zakliknutí radio a checkboxů", async ({ page }) => {
  await page.goto("https://tredgate.com/webtrain/registration.html");

  // * Radio button (můžu zakliknout, nemůžu odkliknout)
  await page.locator("#contact-phone").check();

  // * Checkbox button (můžu zakliknout, můžu odkliknout)
  await page.locator("#interests-sports").check();
  await page.locator("#interests-travel").check();
  await page.locator("#interests-travel").uncheck(); // ? Odkliknutí checkboxu
});

test("Date - vyplnění pole s datumem", async ({ page }) => {
  await page.goto("https://tredgate.com/webtrain/registration.html");
  await page.locator("#date-of-birth").fill("2000-12-30"); // ? Input type date musíme vždy vyplňovat ve formátu YYYY-MM-dd (1999-01-15) - jiný formát nebude fungovat
});

test("Upload souboru do formuláře", async ({ page }) => {
  await page.goto("https://tredgate.com/webtrain/registration.html");

  // * Vytáhneme a uložíme cestu k souboru upload_file.txt
  const filePath = path.resolve(__dirname, "../assets/upload_file.txt");
  // ? Můžeme použít tzv. require, který nám pomůže najít správnou cestu k souboru - VS Code totiž ve funkci require napovídá obsah složek:
  // require("../assets/upload_file.txt");

  // ? Spouštíme čekání (odposlech) na událost prohlížeče: výběr souboru
  const fileChooserPromise = page.waitForEvent("filechooser");
  await page.locator("#file-upload").click(); // ? Kliknutí na tlačítko upload
  const fileChooser = await fileChooserPromise; // ? Instrukce Playwrightu: čekej, než se provolá událost otevření upload okna. Následně identifikaci upload okna uložíme do proměnné pro následný upload souboru
  await fileChooser.setFiles(filePath); // ? Upload souboru, jehož cestu jsme identifikovali na začátku testu (path.resolve())

  // ? Čekáme 2 sec. na odchycení snapshotu - v reálu není doporučené používat, protože nám čekání zpomalují testy
  await page.waitForTimeout(2000); // Čekání v ms, 1000ms = 1s
});

test("Ovládání slider (posuvník)", async ({ page }) => {
  await page.goto("https://tredgate.com/webtrain/registration.html");
  await page.locator("#experience").fill("4");
  await page.locator("#experience").fill("9");
  await page.locator("#experience").fill("1");
});

test("Ovládání iFrame", async ({ page }) => {
  await page.goto("https://tredgate.com/webtrain/web-actions.html");
  // await page.locator("#name").fill("Píšeme do iframe"); // ! Nebude fungovat, prvek je v iframe
  const frame = page.frameLocator('[data-testid="test-automation-iframe"]');
  await frame.locator("#name").fill("Píšeme do iframe");
});

test("hover - najetí myší na prvek", async ({ page }) => {
  await page.goto("https://tredgate.com/webtrain/web-actions.html");
  await page.locator("#hover-box").hover(); // ? Najede myší na prvek, v následných krocích můžeme s prvkem (například rozbalovací menu interagovat)
});
