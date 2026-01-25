// 00-recap-all.ts
// MINI-POWTÓRKA: zmienne, funkcje, interface, destrukturyzacja, operatory
// Wszystko w jednym przykładzie – jak w testach API / UI

export {}; // 🔒 zamyka plik jako moduł (brak konfliktów nazw w projekcie)


// ======================
// 1️⃣ DANE – jak z API
// ======================

const apiResponse = {
  status: 200,
  data: {
    id: 7,
    name: "Anna",
    active: true,
    address: {
      city: "Gdańsk",
      country: "Poland"
    }
  }
};


// ======================
// 2️⃣ MODELE DANYCH (interface)
// ======================

// Interface opisuje, JAK MA WYGLĄDAĆ adres
interface Address {
  city: string;
  country: string;
}

// Interface opisuje, JAK MA WYGLĄDAĆ użytkownik
interface User {
  id: number;
  name: string;
  active: boolean;
  address?: Address; // opcjonalne – może być, ale nie musi
}


// ======================
// 3️⃣ TYPowanie danych z API
// ======================

// Mówimy TypeScriptowi:
// "zmienna user MUSI spełniać kontrakt User"
const user: User = apiResponse.data;


// ======================
// 4️⃣ DESTRUKTURYZACJA
// ======================

// Z obiektu user wyciągam:
// - id
// - name (zmieniam nazwę na userName)
// - active
// i kładę je obok jako zwykłe zmienne
const { id, name: userName, active } = user;


// ======================
// 5️⃣ FUNKCJA (arrow function)
// ======================

// Funkcja:
// - przyjmuje boolean
// - zwraca string
// - zawiera prostą logikę (ternary)
const getUserStatusMessage = (isActive: boolean): string => {
  return isActive ? "User is active" : "User is inactive";
};


// ======================
// 6️⃣ OPTIONAL CHAINING + NULLISH COALESCING
// ======================

// Jeśli address istnieje → weź city
// Jeśli nie istnieje → użyj tekstu domyślnego
const city = user.address?.city ?? "City not provided";


// ======================
// 7️⃣ PORÓWNANIE ===
// ======================

// Ścisłe porównanie – standard w testach
if (apiResponse.status === 200) {
  console.log("Request OK");
}


// ======================
// 8️⃣ WYNIKI / LOGI TESTOWE
// ======================

console.log("User ID:", id);
console.log("User name:", userName);
console.log("City:", city);
console.log(getUserStatusMessage(active));