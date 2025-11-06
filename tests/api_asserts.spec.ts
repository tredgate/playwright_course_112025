// tests/
// api_asserts.spec.ts

import { test, expect } from "@playwright/test";

test("Assert - status 200 OK", async ({ request }) => {
  const response = await request.get(
    "https://tegb-backend-877a0b063d29.herokuapp.com/train"
  );
  expect(response.status(), "Response status is 200").toBe(200);
});

// * Kontrola hlavičky: Content-Type

test("Assert - headers", async ({ request }) => {
  const response = await request.get(
    "https://tegb-backend-877a0b063d29.herokuapp.com/eshop/4"
  );
  const headers = response.headers();
  const contentType = headers["content-type"];
  expect(contentType, "Content-Type Header má správnou hodnotu").toBe(
    "application/json; charset=utf-8"
  );
});

test("Assert - body", async ({ request }) => {
  const response = await request.get(
    "https://tegb-backend-877a0b063d29.herokuapp.com/eshop/4"
  );
  const responseBody = await response.json();
  expect(responseBody.createdAt, "body.createdAt is defined").toBeDefined();
  expect(typeof responseBody.userId, "body.userId is a Number").toBe("number");
  expect(responseBody.email, "body.email have value").toBe(
    "petr.fifka@tredgate.cz"
  );
});
