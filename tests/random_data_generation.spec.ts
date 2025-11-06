// random_data_generation.spec.ts
import { test } from "@playwright/test";
// import { faker } from "@faker-js/faker"; // ? Anglická verze
import { fakerCS_CZ as faker } from "@faker-js/faker"; // ? Česká verze

test("Generování dat pomocí faker.js", async ({ page }) => {
  const generatedFirstName = faker.person.firstName("male");
  const generatedLastName = faker.person.lastName("male");
  const generatedEmail = faker.internet.exampleEmail({
    firstName: generatedFirstName,
    lastName: generatedLastName,
  });
  console.log(generatedFirstName);
  console.log(generatedLastName);
  console.log(generatedEmail);
});
