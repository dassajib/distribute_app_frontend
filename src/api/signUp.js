import axios from 'axios';

import { SIGN_UP_URL } from '@/configs';

export const signUp = async (data) => {
    const payload = {
        phone: data.phone,
        password: data.password,
        confirm_password: data.confirmPassword,
    };
    const response = await axios.post(SIGN_UP_URL, payload);
    return response.data;
};