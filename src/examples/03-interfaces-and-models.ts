// 03-interfaces-and-models.ts
// Interface mówi, jak dane MAJĄ wyglądać, a TypeScript sprawdza,
// czy rzeczywistość się zgadza.
export {};

// Interface dla adresu użytkownika
interface Address {
  city: string;
  country: string;
}

// Interface dla użytkownika
interface User {
  id: number;
  name: string;
  active: boolean;
  email?: string;
  address: Address;
}

// Przykładowy użytkownik (jak z API)
const user: User = {
  id: 1,
  name: "Alice",
  active: true,
  email: "alice@test.com",
  address: {
    city: "Warsaw",
    country: "Poland"
  }
};

console.log(user.name);
console.log(user.address.city);

// Tablica użytkowników
const users: User[] = [
  user,
  {
    id: 2,
    name: "Bob",
    active: false,
    address: {
      city: "Berlin",
      country: "Germany"
    }
  }
];

console.log(users.length);
