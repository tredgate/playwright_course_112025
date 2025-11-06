import { test } from "@playwright/test";

test("Cvičení: API", async ({ request }) => {
  await request.post("https://reqres.in/api/register", {
    headers: {
      "Accept-Encoding": "gzip, deflate, br",
      "x-api-key": "reqres-free-v1",
    },
    data: {
      email: "eve.holt@reqres.in",
      password: "pistol",
    },
  });
});
