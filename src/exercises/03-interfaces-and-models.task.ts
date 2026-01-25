export {};

const apiResponse = {
  status: 200,
  data: {
    id: 10,
    name: "John Smith",
    active: true,
    address: {
      city: "London",
      country: "UK"
    }
  }
};

interface Address {
  city: string;
  country: string;
}

interface User {
  id: number;
  name: string;
  active: boolean;
  address: Address;
}

const user: User = apiResponse.data

console.log(user.name);
console.log(user.address.city);

// Ternary operator condition ? valueIfTrue : valueIfFalse
// „Jeśli user.active → ten tekst, w przeciwnym razie tamten”
const showActive = user.active ? "User is active" : "User is inactive";
console.log(showActive);

// alternative
if (user.active) {
  console.log("User is active");
} else {
  console.log("User is inactive");
}