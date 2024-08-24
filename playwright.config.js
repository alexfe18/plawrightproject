import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 30000,
  retries: 2,
  use: {
    baseURL: "https://playwright.dev/",
    browserName: "chromium",
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 5000,
    ignoreHTTPSErrors: true,
    screenshot: "on",
    video: "retain-on-failure",
  },
  reporter: [["html", { outputFolder: "playwright-report", open: "never" }]],
  projects: [
    {
      name: "Desktop Chrome",
      use: {
        browserName: "chromium",
        viewport: { width: 1280, height: 720 },
      },
    },

    {
      name: "Mobile Safari",
      use: {
        browserName: "webkit",
        viewport: { width: 375, height: 667 },
        userAgent:
          "Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15A372 Safari/604.1",
      },
    },
  ],
});
