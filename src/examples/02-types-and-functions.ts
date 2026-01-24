export {};
// 02-types-and-functions.ts
// TypeScript types and functions used in automated tests

// 1. Podstawowe typy
const userName: string = "John Doe";
const userId: number = 42;
const isVerified: boolean = true;

console.log(userName, userId, isVerified);

// 2. Funkcja zwracająca wartość
const login = (login: string, password: string): boolean => {
  return login === "admin" && password === "secret";
};

const loginResult = login("admin", "secret");
console.log("Login success:", loginResult);

// 3. Funkcja bez zwracania wartości (void)
const logStep = (stepDescription: string): void => {
  console.log("STEP:", stepDescription);
};

logStep("User logs in");

// 4. Parametr opcjonalny
const printUser = (name: string, email?: string): void => {
  console.log("User name:", name);

  if (email) {
    console.log("Email:", email);
  }
};

printUser("Alice");
printUser("Alice", "alice@test.com");

// 5. Union type (częste w API)
const printStatus = (status: number | string): void => {
  console.log("Status:", status);
};

printStatus(200);
printStatus("OK");