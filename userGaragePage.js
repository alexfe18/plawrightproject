import { test as baseTest, expect } from "@playwright/test";
import fs from "fs";

// Путь для хранения storage state
const STORAGE_STATE = "storageState.json";

// Создаем кастомную фикстуру
const test = baseTest.extend({
  userGaragePage: async ({ page }, use) => {
    // Если storage state уже существует, используем его
    if (fs.existsSync(STORAGE_STATE)) {
      await page.context().setStorageState({ path: STORAGE_STATE });
      await page.goto("https://qauto.forstudy.space/panel/garage"); // Переход на GaragePage
    } else {
      // Если storage state не существует, логинимся и сохраняем его
      await page.goto("https://qauto.forstudy.space/login");
      await page.fill('input[name="email"]', "alex.fe@example.com");
      await page.fill('input[name="password"]', "SuperPassword123");
      await page.click('button[type="submit"]');

      // Сохраняем состояние storage state
      await page.context().storageState({ path: STORAGE_STATE });
    }

    // Передаем страницу как фикстуру
    await use(page);
  },
});

export { test };
