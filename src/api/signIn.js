import axios from "axios"

import { SIGN_IN_URL } from "@/configs";

export const signIn = async (data) => {
    const response = await axios.post(SIGN_IN_URL, data);
    return response.data;
}