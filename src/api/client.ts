import { ApiResponse } from "../models/api-response.js";
import { User } from "../models/user.model.js";

export const fakeGetUser = (userId: number): Promise<ApiResponse<User>> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 200,
        data: {
          id: userId,
          name: "John Smith",
          active: true
        }
      });
    }, 500);
  });
};
