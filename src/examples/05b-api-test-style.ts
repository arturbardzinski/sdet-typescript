// 05b-api-test-style.ts
// Ten sam mechanizm Promise + async/await, ale ułożony jak test API:
// request -> response -> asercje

export {}; // zamyka plik jako moduł

// ======================
// 1) MODELE (jak w testach API)
// ======================

interface UserDto {
  id: number;
  name: string;
  active: boolean;
}

interface ApiResponse<T> {
  status: number; // np. HTTP status: 200, 400, 500
  data: T;        // payload
}

// ======================
// 2) "ASSERT" (mini asercje bez frameworka)
// ======================

// W prawdziwym projekcie byłoby: expect(status).toBe(200) / assert.equal(...)
// Tu robimy minimalną wersję, żebyś zobaczył flow.
const assertEqual = <T>(actual: T, expected: T, message: string): void => {
  if (actual !== expected) {
    throw new Error(`ASSERT FAILED: ${message}. Expected: ${expected}, got: ${actual}`);
  }
};

// ======================
// 3) "REQUEST" (symulacja API)
// ======================

// To jest nasz "request" – zwraca Promise z odpowiedzią API
// Po 1s "przychodzi" response.
const fakeGetUser = (userId: number): Promise<ApiResponse<UserDto>> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Symulujemy response jak z backendu
      resolve({
        status: 200,
        data: {
          id: userId,
          name: "John Smith",
          active: true
        }
      });
    }, 1000);
  });
};

// Opcjonalnie: symulacja błędu API (np. user nie istnieje)
const fakeGetUserNotFound = (userId: number): Promise<ApiResponse<UserDto>> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // W realu mógłby być 404 + jakiś error payload.
      // Tu dla uproszczenia status = 404, a data nadal spełnia UserDto (żeby nie mieszać typów).
      resolve({
        status: 404,
        data: {
          id: userId,
          name: "UNKNOWN",
          active: false
        }
      });
    }, 600);
  });
};

// ======================
// 4) "TEST" (request -> response -> asercje)
// ======================

const testGetUserHappyPath = async (): Promise<void> => {
  console.log("TEST: should return user with status 200 (happy path)");

  // 1) request
  const response = await fakeGetUser(10);

  // 2) asercje (czy API zadziałało)
  assertEqual(response.status, 200, "HTTP status should be 200");

  // 3) payload / dane biznesowe
  const user = response.data;

  // 4) asercje na payload
  assertEqual(user.id, 10, "User id should match requested id");
  assertEqual(user.active, true, "User should be active");

  console.log("✅ TEST PASSED");
};

const testGetUserNotFound = async (): Promise<void> => {
  console.log("TEST: should return 404 when user not found");

  const response = await fakeGetUserNotFound(999);

  assertEqual(response.status, 404, "HTTP status should be 404");

  console.log("✅ TEST PASSED");
};

// ======================
// 5) URUCHOMIENIE (runner)
// ======================

// W prawdziwym świecie uruchamia to framework testowy (jest runner).
// Tu robimy prosty runner, który złapie błędy i wypisze wynik.
const run = async (): Promise<void> => {
  try {
    await testGetUserHappyPath();
    await testGetUserNotFound();
    console.log("ALL TESTS PASSED ✅");
  } catch (error) {
    console.log("❌ TEST FAILED");
    console.log(error);
  }
};

run();