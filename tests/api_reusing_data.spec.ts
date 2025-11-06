// api_reusing_data.spec.ts

import { faker } from "@faker-js/faker";
import { test, expect } from "@playwright/test";

test("Přepoužívání dat mezi requesty", async ({ request }) => {
  const username = faker.internet.username();
  const email = faker.internet.exampleEmail();
  const password = "123456";

  const registerResponse = await request.post(
    "https://tegb-backend-877a0b063d29.herokuapp.com/eshop/register",
    {
      data: {
        username,
        password,
        email,
      },
    }
  );
  const registerResponseBody = await registerResponse.json();
  const userId = registerResponseBody.userId; // ? Vytažení ID pro další request a uložení do proměnné

  const userResponse = await request.get(
    "https://tegb-backend-877a0b063d29.herokuapp.com/eshop",
    {
      params: {
        userId,
      },
    }
  );
  const userResponseBody = await userResponse.json();
  expect(userResponseBody.email, "body.username have email value").toBe(email);
  expect(userResponseBody.userId, "body.userId have value").toBe(userId);
  expect(userResponseBody.username, "body.username have value").toBe(username);
});
