import { message } from 'antd';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { signUp } from '@/api/signUp';

export const useSignUp = () => {
    const navigate = useNavigate();

    return useMutation({
        mutationFn: (data) => signUp(data),
        onSuccess: () => {
            message.success('Successfully Signup!');
            navigate('/auth/sign-in');
        },
        onError: (error) => {
            message.error(error?.response?.data?.response_message?.non_field_errors);
            console.log(error);
        },
    });
};
