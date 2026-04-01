import { expect } from "expect";
import { runTest } from "./_runner.js";
import { getUser } from "../api/endpoints.js";

runTest("GET /user should return active user and status 200", async () => {
  const response = await getUser(1);

  // “prawdziwe” asercje:
  expect(response.status).toBe(200);

  // asercje na payload:
  expect(response.data.id).toBe(1);
  expect(response.data.active).toBe(true);

  // możesz też sprawdzać typy / istnienie:
  expect(typeof response.data.name).toBe("string");
  expect(response.data.name.length).toBeGreaterThan(0);
});
