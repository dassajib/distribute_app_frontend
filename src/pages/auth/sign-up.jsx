import { Link } from "react-router-dom";
import { Button, Typography } from "@material-tailwind/react";
import { Form, Input } from "antd";

import { useSignUp } from "@/hooks/useSignUp";

export function SignUp() {
  const [form] = Form.useForm();

  const { mutate } = useSignUp();

  const handleSubmit = (data) => {
    mutate(data);
  };

  return (
    <section className="m-8 flex">
      <div className="w-2/5 h-full hidden lg:block">
        <img
          src="/img/pattern.png"
          className="h-full w-full object-cover rounded-3xl"
        />
      </div>
      <div className="w-full lg:w-3/5 flex flex-col items-center justify-center">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4">
            Join Us Today
          </Typography>
          <Typography
            variant="paragraph"
            color="blue-gray"
            className="text-lg font-normal"
          >
            Enter your phone and password to register.
          </Typography>
        </div>

        <Form
          layout="vertical"
          form={form}
          onFinish={handleSubmit}
          name="sign-up"
          className="rounded-xl w-96 p-8 px-10"
          initialValues={{
            remember: true,
          }}
        >
          <div className="mb-1 flex flex-col gap-6">
            <Form.Item
              name="phone"
              label="Phone"
              className="-mb-3 font-medium"
              rules={[
                { required: true, message: 'Please Enter Your Phone' },
                { whitespace: true },
                { min: 7, message: 'Phone should be at least 7 characters' },
              ]}
              hasFeedback
            >
              <Input placeholder="Phone Number" />
            </Form.Item>

            <Form.Item
              name="password"
              className="-mb-3 font-medium"
              label="Password"
              rules={[
                { required: true, message: 'Please Enter Your Password' },
                { min: 6, message: 'Password should be at least 6 characters' },
              ]}
              hasFeedback
            >
              <Input.Password type="password" placeholder="Password" />
            </Form.Item>

            <Form.Item
              name="confirmPassword"
              className="-mb-3 font-medium"
              label="Confirm Password"
              dependencies={['password']}
              rules={[
                { required: true, message: 'Please Enter Your Password Again' },
                { min: 6, message: 'Password should be at least 6 characters' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject("Password doesn't match");
                  },
                }),
              ]}
              hasFeedback
            >
              <Input.Password type="password" placeholder="Confirm Password" />
            </Form.Item>
          </div>

          <Button className="mt-6" type="submit" fullWidth>
            Register Now
          </Button>

          <Typography
            variant="paragraph"
            className="text-center text-blue-gray-500 font-medium mt-4"
          >
            Already have an account?
            <Link to="/auth/sign-in" className="text-gray-900 ml-1">
              Sign in
            </Link>
          </Typography>
        </Form>
      </div>
    </section>
  );
}

export default SignUp;
