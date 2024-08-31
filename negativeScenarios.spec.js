import { test, expect } from "@playwright/test";
import { RegistrationLocators } from "../locators/registrationLocators";

test.describe("Negative Registration Scenarios", () => {
  test("User cannot register with empty name field", async ({ page }) => {
    const locators = new RegistrationLocators(page);

    await page.goto("/");
    await locators.signInBtn.click();
    await locators.registrationBtn.click();

    await locators.firstNameInput.fill("");
    await locators.lastNameInput.fill("Fe");
    await locators.emailInput.fill("aqa.alex.fe@example.com");
    await locators.passwordInput.fill("SuperPassword123");
    await locators.reEnterPasswordInput.fill("SuperPassword123");
    await locators.submitBtn.click();

    await expect(page.locator(".modal-content")).toContainText(
      "Name is required"
    );
  });

  test("User cannot register with invalid email", async ({ page }) => {
    const locators = new RegistrationLocators(page);

    await page.goto("/");
    await locators.signInBtn.click();
    await locators.registrationBtn.click();

    await locators.firstNameInput.fill("Alex");
    await locators.lastNameInput.fill("Fe");
    await locators.emailInput.fill("aqa.invalid-email");
    await locators.passwordInput.fill("SuperPassword123");
    await locators.reEnterPasswordInput.fill("SuperPassword123");
    await locators.submitBtn.click();

    await expect(page.locator(".modal-content")).toContainText(
      "Email is incorrect"
    );
  });

  test("User cannot register with mismatched passwords", async ({ page }) => {
    const locators = new RegistrationLocators(page);

    await page.goto("/");
    await locators.signInBtn.click();
    await locators.registrationBtn.click();

    await locators.firstNameInput.fill("Alex");
    await locators.lastNameInput.fill("Fe");
    await locators.emailInput.fill("aqa.alex.fe@example.com");
    await locators.passwordInput.fill("SuperPassword123");
    await locators.reEnterPasswordInput.fill("DifferentPassword123");
    await locators.submitBtn.click();

    await expect(page.locator(".modal-content")).toContainText(
      "Passwords do not match"
    );
  });

  test("User cannot register with a short password", async ({ page }) => {
    const locators = new RegistrationLocators(page);

    await page.goto("/");
    await locators.signInBtn.click();
    await locators.registrationBtn.click();

    await locators.firstNameInput.fill("Alex");
    await locators.lastNameInput.fill("Fe");
    await locators.emailInput.fill("aqa.alex.fe@example.com");
    await locators.passwordInput.fill("123");
    await locators.reEnterPasswordInput.fill("123");
    await locators.submitBtn.click();

    await expect(page.locator(".modal-content")).toContainText(
      "Password has to be from 8 to 15 characters long"
    );
  });

  test("User cannot register with long first name", async ({ page }) => {
    const locators = new RegistrationLocators(page);

    await page.goto("/");
    await locators.signInBtn.click();
    await locators.registrationBtn.click();

    await locators.firstNameInput.fill("Alexanderthegreatwarrior");
    await locators.lastNameInput.fill("Fe");
    await locators.emailInput.fill("aqa.alex.fe@example.com");
    await locators.passwordInput.fill("SuperPassword123");
    await locators.reEnterPasswordInput.fill("SuperPassword123");
    await locators.submitBtn.click();

    await expect(page.locator(".modal-content")).toContainText(
      "Name has to be from 2 to 20 characters long"
    );
  });

  test("User cannot register with long last name", async ({ page }) => {
    const locators = new RegistrationLocators(page);

    await page.goto("/");
    await locators.signInBtn.click();
    await locators.registrationBtn.click();

    await locators.firstNameInput.fill("Alex");
    await locators.lastNameInput.fill("Ferrytothelongestdestinationoflife");
    await locators.emailInput.fill("aqa.alex.fe@example.com");
    await locators.passwordInput.fill("SuperPassword123");
    await locators.reEnterPasswordInput.fill("SuperPassword123");
    await locators.submitBtn.click();

    await expect(page.locator(".modal-content")).toContainText(
      "Last name has to be from 2 to 20 characters long"
    );
  });
});
