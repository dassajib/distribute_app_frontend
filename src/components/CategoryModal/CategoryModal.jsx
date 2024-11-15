import { useEffect } from "react";
import ReactDOM from "react-dom";
import { Button, Input, Form, message } from "antd";
import { MdOutlineCancel } from "react-icons/md";

import { createCategory } from "@/api/category";

const CategoryModal = ({ closeModal }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  const handleSubmit = async (values) => {
    try {
      const accessToken = localStorage.getItem("access");
      if (!accessToken) {
        message.error("User not authenticated. Please sign in.");
        return;
      }
      await createCategory(values.name, accessToken);
      message.success("Category created successfully!");
      form.resetFields();
      closeModal();
    } catch (error) {
      message.error(error);
    }
  };
  
  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <button onClick={closeModal}>
          <MdOutlineCancel
            size={30}
            className="absolute top-4 right-4 text-gray-600 cursor-pointer hover:text-gray-800"
          />
        </button>
        <Form
          form={form}
          onFinish={handleSubmit}
          onFinishFailed={(errorInfo) => console.log("Validation Failed:", errorInfo)}
          layout="vertical"
          name="create-category"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[
              { required: true, message: "Please input your Category Name!" },
              { min: 2, message: "Name must be at least 2 characters long" },
            ]}
          >
            <Input placeholder="Category Name" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="mt-6 w-full bg-blue-gray-800">
              Create
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>,
    document.querySelector(".categoryModal")
  );
};

export default CategoryModal;
