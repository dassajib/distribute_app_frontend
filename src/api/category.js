import axios from "axios";

import { CREATE_CATEGORY_URL } from "@/configs";

export const createCategory = async (name, token) => {
  try {
    const response = await axios.post(
      CREATE_CATEGORY_URL,
      { name },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.response_message?.name?.[0]);
  }
};
