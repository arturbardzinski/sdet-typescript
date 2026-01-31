# Module 01 – JavaScript Basics (for Tests)

## O czym jest ten moduł
Podstawy JavaScriptu potrzebne w testach automatycznych.
To jest fundament: zmienne, obiekty, funkcje i prosta logika.

## Kluczowe pojęcia
- `const` i `let`
- obiekty i tablice
- funkcje
- warunki (`if`, operator trójargumentowy)
- destrukturyzacja

## Przykłady

```ts
const user = {
  id: 1,
  name: "Alice",
  active: true
};

const { id, name } = user;