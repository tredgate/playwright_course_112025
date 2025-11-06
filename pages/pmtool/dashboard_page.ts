import { Locator, Page, expect, test } from "@playwright/test";

export class DashboardPage {
  readonly page: Page;
  readonly profileButton: Locator;
  readonly logoutButton: Locator;
  readonly bellIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.profileButton = page.locator("#user_dropdown");
    this.logoutButton = page.locator("#logout");
    this.bellIcon = page.locator(".dropdown-toggle .fa-bell-o");
  }

  async logout() {
    await test.step("Odhlášení z aplikace", async () => {
      await expect(this.bellIcon).toBeVisible();
      await this.profileButton.click();
      await this.logoutButton.click();
    });
  }
}
