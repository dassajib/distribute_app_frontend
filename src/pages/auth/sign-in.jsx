import { Link } from "react-router-dom";
import {
  Button,
  Typography,
} from "@material-tailwind/react";
import { Form, Input } from "antd";

import { useSignIn } from "@/hooks/useSignIn";

export function SignIn() {
  const [form] = Form.useForm();

  const { mutate } = useSignIn();

  const handleSubmit = (data) => {
    mutate(data);
  };

  return (
    <section className="m-8 flex gap-4">
      <div className="w-full lg:w-3/5 mt-24 flex flex-col justify-center items-center">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4">Sign In</Typography>
          <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">Enter your phone and password to Sign In.</Typography>
        </div>
        <Form 
          form={form}
          onFinish={handleSubmit}
          layout="vertical"
          name="sign-in"
          className="rounded-xl w-96 p-8 px-10"
          initialValues={{
            remember: true,
          }}>
          <div className="mb-1 flex flex-col gap-6">
            <Form.Item
              label="Phone"
              className="-mb-3 font-medium"
              name="phone"
              rules={[
                {
                  required: true,
                  message: 'Please input your Phone Number!',
                },
                { min: 7, message: 'Phone should be at least 7 characters' },
              ]}
              hasFeedback
            >
              <Input placeholder="Phone Number" />
            </Form.Item>
            <Form.Item
              label="Password"
              className="-mb-3 font-medium"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!',
                },
                { min: 6, message: 'Password should be at least 6 characters' },
              ]}
              hasFeedback
            >
              <Input.Password type="password" placeholder="Password" />
            </Form.Item>
          </div>
          <Button className="mt-6" type="submit" fullWidth>
            Sign In
          </Button>

          <div className="flex items-center justify-between gap-2 mt-6">
            <Typography variant="small" className="font-medium text-gray-900">
              <a href="#">
                Forgot Password?
              </a>
            </Typography>
          </div>
          <div className="space-y-4 mt-8">
          </div>
          <Typography variant="paragraph" className="text-center text-blue-gray-500 font-medium mt-4">
            Not registered?
            <Link to="/auth/sign-up" className="text-gray-900 ml-1">Create account</Link>
          </Typography>
        </Form>
      </div>
      <div className="w-2/5 h-screen overflow-hidden hidden lg:block">
        <img
          src="/img/pattern.png"
          alt="Pattern"
          className="h-screen w-full object-cover rounded-3xl"
        />
    </div>
    </section>
  );
}

export default SignIn;
