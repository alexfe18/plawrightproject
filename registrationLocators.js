import { Locator } from "@playwright/test";

export class RegistrationLocators {
  constructor(page) {
    this.header = page.locator(".header");
    this.signInBtn = this.header.getByRole("button", { name: "Sign in" });
    this.modal = page.locator(".modal-content");
    this.registrationBtn = this.modal.getByRole("button", {
      name: "Registration",
    });
    this.firstNameInput = this.modal.getByLabel("Name");
    this.lastNameInput = this.modal.locator("#signupLastName");
    this.emailInput = this.modal.locator('input[name="email"]');
    this.passwordInput = this.modal.locator('input[name="password"]');
    this.reEnterPasswordInput = this.modal.getByLabel("Re-enter password");
    this.submitBtn = this.modal.getByRole("button", { name: "Register" });
  }
}
