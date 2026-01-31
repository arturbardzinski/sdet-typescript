// 04-enums-and-constants.ts
// Enums i stałe – porządkowanie wartości w testach

export {}; // zamyka plik jako moduł


// ======================
// 1️⃣ ENUMY
// ======================

// Role użytkowników
enum UserRole {
  ADMIN = "ADMIN",
  USER = "USER"
}

// Status użytkownika
enum UserStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE"
}

// Status odpowiedzi API
enum ApiStatus {
  SUCCESS = "SUCCESS",
  ERROR = "ERROR"
}


// ======================
// 2️⃣ STAŁE
// ======================

// Stałe konfiguracyjne (jedna wartość)
const DEFAULT_TIMEOUT_MS = 5000;


// ======================
// 3️⃣ MODELE DANYCH
// ======================

interface User {
  id: number;
  name: string;
  role: UserRole;
  status: UserStatus;
}


// ======================
// 4️⃣ DANE – jak z API
// ======================

const apiResponse = {
  status: ApiStatus.SUCCESS,
  data: {
    id: 1,
    name: "Alice",
    role: UserRole.ADMIN,
    status: UserStatus.ACTIVE
  }
};


// ======================
// 5️⃣ TYPowanie danych
// ======================

const user: User = apiResponse.data;


// ======================
// 6️⃣ LOGIKA TESTOWA
// ======================

// Sprawdzenie statusu API
if (apiResponse.status === ApiStatus.SUCCESS) {
  console.log("API call successful");
}

// Sprawdzenie roli użytkownika
if (user.role === UserRole.ADMIN) {
  console.log("User is admin");
}

// Sprawdzenie statusu użytkownika (ternary)
const userStatusMessage =
  user.status === UserStatus.ACTIVE
    ? "User is active"
    : "User is inactive";

console.log(userStatusMessage);

// Użycie stałej
console.log("Timeout:", DEFAULT_TIMEOUT_MS);