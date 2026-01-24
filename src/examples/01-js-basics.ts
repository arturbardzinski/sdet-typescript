// 01-js-basics.ts
// JavaScript fundamentals used in automated tests

// 1. Zmienne
const appName = "Banking App";
let isUserLoggedIn = false;

console.log(appName);
console.log("Logged in:", isUserLoggedIn);

// 2. Funkcja – symulacja logowania
const login = (username: string, password: string): boolean => {
  return username === "admin" && password === "secret";
};

isUserLoggedIn = login("admin", "secret");
console.log("Login success:", isUserLoggedIn);

// 3. Obiekt – dane użytkownika
const user = {
  id: 1,
  name: "Alice",
  role: "admin",
  active: true
};

// 4. Destrukturyzacja obiektu
const { name: userName, role } = user;
console.log(`User ${userName} has role ${role}`);

// 5. Tablica – role użytkowników
const itRoles = ["admin", "user", "guest"];

// Iteracja – często używane w testach
itRoles.forEach((role) => {
  console.log("Role:", role);
});

// 6. Warunek
if (user.active) {
  console.log("User is active");
} else {
  console.log("User is inactive");
}