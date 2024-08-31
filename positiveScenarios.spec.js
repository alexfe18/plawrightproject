import { test, expect } from "@playwright/test";
import { RegistrationLocators } from "../locators/registrationLocators";

test.describe("Positive Registration Scenarios", () => {
  test("User can register with valid data", async ({ page }) => {
    const locators = new RegistrationLocators(page);

    await page.goto("/");
    await locators.signInBtn.click();
    await locators.registrationBtn.click();
    await locators.firstNameInput.fill("Alex");
    await locators.lastNameInput.fill("Fe");
    await locators.emailInput.fill("alex.fe@example.com");
    await locators.passwordInput.fill("SuperPassword123");
    await locators.reEnterPasswordInput.fill("SuperPassword123");
    await locators.submitBtn.click();

    await expect(page).toHaveURL("/panel/garage");
  });
});
