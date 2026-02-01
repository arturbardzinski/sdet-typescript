import { ApiResponse } from "../models/api-response";
import { User } from "../models/user.model";
import {fakeGetUser} from "./client";

export const getUser = (userId: number): Promise<ApiResponse<User>> => {
  return fakeGetUser(userId);
};