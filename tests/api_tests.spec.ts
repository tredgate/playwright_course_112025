import { test } from "@playwright/test";

test("Send GET Request", async ({ request }) => {
  await request.get("https://tegb-backend-877a0b063d29.herokuapp.com/train");
});

test("GET request s parametrem", async ({ request }) => {
  await request.get("https://tegb-backend-877a0b063d29.herokuapp.com/eshop", {
    params: {
      userId: 251,
    },
  });
});

test("GET request s hlavičkou", async ({ request }) => {
  await request.get(
    "https://tegb-backend-877a0b063d29.herokuapp.com/train/header",
    {
      headers: {
        train: "Playwright hlavicky",
      },
    }
  );
});

test("POST request s body", async ({ request }) => {
  await request.post(
    "https://tegb-backend-877a0b063d29.herokuapp.com/train/body",
    {
      data: {
        stringProperty: "test",
        numberProperty: 123,
        booleanProperty: true,
      },
    }
  );
});
