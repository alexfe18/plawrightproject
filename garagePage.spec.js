const { test, expect } = require("../fixtures/userGaragePage");

test("User can access garage page after login", async ({ userGaragePage }) => {
  // Проверяем, что пользователь уже на странице гаража
  await expect(userGaragePage).toHaveURL(
    "https://qauto.forstudy.space/panel/garage"
  );

  // Дополнительные проверки на странице
  const garageTitle = await userGaragePage.textContent(".garage-title");
  expect(garageTitle).toBe("Garage");
});
