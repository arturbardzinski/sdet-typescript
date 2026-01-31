# Module 03 – Interfaces and Data Models

## O czym jest ten moduł
Opisywanie struktury danych, np. response API, payloadów,
modeli biznesowych.

## Kluczowe pojęcia
- `interface`
- obiekty zagnieżdżone
- pola opcjonalne
- typowanie odpowiedzi API

## Przykłady

```ts
interface Address {
  city: string;
  country: string;
}

interface User {
  id: number;
  name: string;
  active: boolean;
  address?: Address;
}