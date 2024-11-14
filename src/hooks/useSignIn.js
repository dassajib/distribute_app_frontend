import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

import { signIn } from "../api/signIn";
import { useAuthStore } from "@/store/authStore";

export const useSignIn = () => {
    const { setToken } = useAuthStore();
    const navigate = useNavigate();

    return useMutation({
        mutationFn: (data) => signIn(data),
        onSuccess: (data) => {
            setToken(data.access, data.refresh);
            message.success('Successfully Signin!');
            navigate('/dashboard/home');
        },
        onError: (error) => {
            message.error(error?.response?.data?.detail);
        }
    })
}