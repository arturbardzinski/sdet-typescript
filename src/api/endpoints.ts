import { ApiResponse } from "../models/api-response.js";
import { User } from "../models/user.model.js";
import { fakeGetUser } from "./client.js";

export const getUser = (userId: number): Promise<ApiResponse<User>> => {
  return fakeGetUser(userId);
};
