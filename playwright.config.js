import { defineConfig, devices } from "@playwright/test";
const dotenv = require("dotenv");

dotenv.config();

export default defineConfig({
  testDir: "./tests",
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? undefined : 1,
  reporter: "html",
  globalSetup: "global-setup.ts",
  globalTeardown: "global-teardown.ts",
  testMatch: "**/*.spec.ts",
  use: {
    headless: false,
    baseURL: process.env.BASE_URL,
    httpCredentials: {
      username: process.env.USER_NAME,
      password: process.env.USER_PASS,
    },
    trace: "on",
    testIdAttribute: "qa-dont-touch",
  },
  projects: [
    {
      name: "qauto",
      testMatch: "**/*.spec.ts",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
