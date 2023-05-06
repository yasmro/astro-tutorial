import { test, expect } from "@playwright/test";

// test("has title", async ({ page }) => {
//   await page.goto("https://playwright.dev/");

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

test("メタ情報 Titleが正しい", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle("Welcome to Astro.");
});
