// page_objects.spec.ts
import { test } from "@playwright/test";
import { DashboardPage } from "../pages/pmtool/dashboard_page.ts";
import { LoginPage } from "../pages/pmtool/login_page.ts";

test("Page Object Test", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  await loginPage.openPmtool();
  await loginPage.fillUsername("playwright_jaro24");
  await loginPage.fillPassword("Playwright!2024");
  await loginPage.clickLogin();
  await dashboardPage.logout();
  await loginPage.login("playwright_jaro24", "Playwright!2024");
});
