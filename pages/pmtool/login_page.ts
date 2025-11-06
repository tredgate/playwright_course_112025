import { Locator, Page, test } from "@playwright/test";

export class LoginPage {
  // * Properties (identifikace prvků, page, url)
  readonly page: Page;
  readonly url = "https://tredgate.com/pmtool"; // ? Ideálně do konfigu nebo do test-data
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  // * constructor - vyčítat page z testu a nastavovat lokátory
  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator("#username");
    this.passwordInput = page.locator("#password");
    this.loginButton = page.locator(".btn");
  }

  // * metody - akce na stránce
  async openPmtool() {
    await this.page.goto(this.url);
  }

  async fillUsername(username: string) {
    await this.usernameInput.fill(username);
  }

  async fillPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async clickLogin() {
    await this.loginButton.click();
  }

  // * Sdružující metoda - přihlášení
  async login(username: string, password: string) {
    await test.step("Přihlášení do pmtool", async () => {
      await this.fillUsername(username);
      await this.fillPassword(password);
      await this.clickLogin();
    });
  }
}
