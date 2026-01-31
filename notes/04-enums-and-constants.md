# Module 04 – Enums and Constants

## O czym jest ten moduł
Porządkowanie wartości w testach i eliminowanie „magic strings”.

## Kluczowe pojęcia
- `enum`
- enumy stringowe
- stałe (`const`)
- użycie enumów w logice i modelach

## Przykłady

```ts
enum UserRole {
  ADMIN = "ADMIN",
  USER = "USER"
}

const DEFAULT_TIMEOUT = 5000;