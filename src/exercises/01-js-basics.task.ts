const response = {
  status: 200,
  data: {
    id: 42,
    name: "John Doe",
    email: "john.doe@test.com",
    verified: true
  }
};

// 🔹 DESTRUKTURYZACJA OBIEKTU
// Z "pudełka" response wchodzę do przegródki data
// i wyciągam tylko to, co mnie interesuje:
// - id
// - name (zmieniam nazwę na testUserName)
// - verified
// Te wartości leżą teraz "obok" jako zwykłe zmienne
const { id, name: testUserName, verified } = response.data;

console.log(id, testUserName);

// Używam wyciągniętej zmiennej verified bez response.data.verified
if (verified) {
  console.log("Request successful");
} else {
  console.log("Request failed");
}

// 🔹 DESTRUKTURYZACJA PROSTEGO POLA
// response to obiekt, więc mogę z niego wyciągnąć status
// To jest skrót zapisu: const testStatus = response.status;
const { status: testStatus } = response;

console.log(testStatus);