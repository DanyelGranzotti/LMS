import * as Methods from "./index.js";
import { USER_API_URL } from "./urls.js";

export const getUsers = async (page = 1, limit = 10) => {
  const url = `${USER_API_URL}?page=${page}&results=${limit}`;
  return await Methods.getMethod(url);
};
