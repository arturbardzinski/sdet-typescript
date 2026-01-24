# SDET – TypeScript Foundations  
## Etap 4 planu nauki SDET

Ten projekt realizuje **Etap 4 planu nauki SDET** i koncentruje się na **TypeScripcie wykorzystywanym w automatyzacji testów**.  
Celem etapu jest przygotowanie solidnych podstaw pod **Playwright (Etap 5)**.

Projekt nie jest kursem frontendowym.  
Zakres TypeScriptu jest dobrany **ściśle pod potrzeby testera automatyzującego**.

---

## 🎯 Cele etapu

Po ukończeniu tego etapu:

- rozumiesz składnię JavaScript używaną w testach
- potrafisz pisać i czytać kod w TypeScript
- świadomie używasz typów, `interface` oraz `enum`
- rozumiesz `async / await` i pracę z Promise
- potrafisz skonfigurować projekt TypeScript
- jesteś gotowy do pracy z Playwrightem

---

## 📁 Struktura projektu

```
sdet-typescript-foundations/
│
├── README.md
├── package.json
├── tsconfig.json
│
├── notes/
│   ├── 01-js-basics.md
│   ├── 02-types-and-functions.md
│   ├── 03-interfaces-and-models.md
│   ├── 04-enums-and-constants.md
│   ├── 05-async-await.md
│   └── 06-project-config.md
│
├── src/
│   ├── playground.ts
│   │
│   ├── examples/
│   │   ├── 01-js-basics.ts
│   │   ├── 02-types-and-functions.ts
│   │   ├── 03-interfaces-and-models.ts
│   │   ├── 04-enums-and-constants.ts
│   │   └── 05-async-await.ts
│   │
│   ├── exercises/
│   │   ├── 01-js-basics.task.ts
│   │   ├── 02-types-and-functions.task.ts
│   │   ├── 03-interfaces-and-models.task.ts
│   │   ├── 04-enums-and-constants.task.ts
│   │   └── 05-async-await.task.ts
│   │
│   └── solutions/        # opcjonalnie
```

---

## 🧭 Sposób pracy

Każdy temat realizowany jest według stałego schematu:

1. **notes/** – krótkie notatki teoretyczne  
2. **examples/** – praktyczne przykłady kodu  
3. **exercises/** – zadania do samodzielnego wykonania  
4. **playground.ts** – szybkie testy i eksperymenty  

---

## ▶️ Uruchamianie projektu

### Instalacja zależności

```bash
npm install
```

Jeżeli TypeScript nie jest jeszcze zainstalowany:

```bash
npm install -D typescript ts-node
```

---

### Uruchamianie plików TypeScript

```bash
npx ts-node src/playground.ts
```

lub:

```bash
npx ts-node src/examples/01-js-basics.ts
```

---

### Kompilacja TypeScript → JavaScript

```bash
npx tsc
```

---

## 🧪 Zasady nauki

- realizuj tematy po kolei
- pisz kod samodzielnie
- analizuj błędy TypeScript
- myśl perspektywą automatyzacji testów

---

## 🚀 Kolejne kroki

1. Konfiguracja projektu (`package.json`, `tsconfig.json`)
2. JavaScript fundamentals pod testy
3. Typy i funkcje w TypeScript
4. Interfejsy i modele danych
5. Enums i async / await
6. Przejście do Playwright
