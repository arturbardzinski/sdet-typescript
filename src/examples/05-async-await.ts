// 05-async-await.ts
// Async / Await – fundament testów API i Playwright

export {}; // zamyka plik jako moduł


// ======================
// 1️⃣ Funkcja symulująca request API
// ======================

// Funkcja zwraca Promise, który zakończy się po 1 sekundzie
const fakeApiCall = (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("API response received");
    }, 1000);
  });
};


// ======================
// 2️⃣ Funkcja async
// ======================

// async oznacza: ta funkcja ZAWSZE zwraca Promise
const callApi = async (): Promise<void> => {
  console.log("Calling API...");

  // await czeka, aż Promise się zakończy
  const response = await fakeApiCall();

  console.log(response);
  console.log("API call finished");
};

// OBRAZ MENTALNY (bardzo ważne)
//
// Wyobraź sobie, że:
// 	•	API = kurier
// 	•	Promise = „obietnica, że paczka kiedyś dojdzie”
// 	•	await = „czekam, aż kurier zapuka”
// 	•	async = „ta funkcja umie czekać”

// ======================
// 3️⃣ Uruchomienie
// ======================

callApi();