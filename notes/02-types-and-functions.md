# Module 02 – TypeScript Types and Functions

## O czym jest ten moduł
Dodanie typów do JavaScriptu, aby testy były bezpieczniejsze
i bardziej czytelne.

## Kluczowe pojęcia
- typy podstawowe: `string`, `number`, `boolean`
- typowanie funkcji
- `void`
- parametry opcjonalne (`?`)
- union types (`|`)

## Przykłady

```ts
const add = (a: number, b: number): number => {
  return a + b;
};

const log = (msg: string): void => {
  console.log(msg);
};