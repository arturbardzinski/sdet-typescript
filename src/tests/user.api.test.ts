import { getUser } from "../api/endpoints";

const testGetUser = async (): Promise<void> => {
  console.log("TEST: get user");

  const response = await getUser(1);

  if (response.status !== 200) {
    throw new Error("Expected status 200");
  }

  if (!response.data.active) {
    throw new Error("User should be active");
  }

  console.log("✅ TEST PASSED");
};

testGetUser();