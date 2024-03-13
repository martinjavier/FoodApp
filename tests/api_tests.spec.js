import { test, expect } from "@playwright/test";

test("API GET Request", async ({ request }) => {
  // Defino la variable response con la llamada
  const response = await request.get("https://reqres.in/api/users/2");
  // Verifico que el status de la consulta sea 200
  expect(response.status()).toBe(200);
  // Defino la variable text para contener el texto de la respuesta
  const text = await response.text();
  // Verifico que el texto de la respuesta contenga el nombre Janet
  expect(text).toContain("Janet");
});
