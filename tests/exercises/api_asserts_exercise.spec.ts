import { test, expect } from "@playwright/test";

test("Cvičení: api asserty", async ({ request }) => {
  const response = await request.patch(
    "https://tegb-backend-877a0b063d29.herokuapp.com/train"
  );
  const responseBody = await response.json();
  expect(typeof responseBody.timestamp, "body.timestamp is a string").toBe(
    "string"
  );
  expect(responseBody.id, "body.id have value").toBe(1);
});
