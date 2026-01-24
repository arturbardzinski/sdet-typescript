export {};

type UserRole = "admin" | "user";

const users = [
  { id: 1, name: "Alice", role: "admin", active: true },
  { id: 2, name: "Bob", role: "user", active: false }
];

// Optional chaining ?.
// ?.active
// „Jeśli użytkownik istnieje → weź active,
// jeśli nie → daj undefined”
// Nullish coalescing ??
// ?? false
// „Jeśli wynik jest undefined lub null, zwróć false”
// optional chaining
// ?. = „jeśli coś istnieje, to weź dalej, jeśli nie – nie wywalaj się”

// const isActiveUser = (userId: number): boolean => {
//   return users.find((user) => user.id === userId)?.active ?? false;
// }

const isActiveUser = (userId: number): boolean => {
  const user = users.find((user) => user.id === userId);
  return user?.active ?? false;
};


console.log(isActiveUser(1));
