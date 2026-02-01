import { test, expect } from "@playwright/test";
import { getUser } from "../api/endpoints.js";

test("GET /user returns active user", async () => {
  const response = await getUser(1);

  expect(response.status).toBe(200);
  expect(response.data.id).toBe(1);
  expect(response.data.active).toBe(true);
  expect(typeof response.data.name).toBe("string");
});