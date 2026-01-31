# Module 05 – Async / Await

## O czym jest ten moduł
Praca z operacjami asynchronicznymi:
API, czekanie na dane, timeouty.

## Kluczowe pojęcia
- `Promise`
- `async`
- `await`
- sekwencyjny przepływ async
- obsługa błędów

## Przykłady

```ts
const fetchData = (): Promise<string> => {
  return new Promise(resolve => {
    setTimeout(() => resolve("data"), 1000);
  });
};