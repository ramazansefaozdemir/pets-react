import { Input, Button, Form } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Remotes from "../../Remotes";

const LoginPanel = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const params = {
        username: values.username,
        password: values.password,
      };
      Remotes.getLogin(params).then((r) => {
        if (r.status === 200) {
          localStorage.setItem("username", JSON.stringify(values.username));
          navigate("/");
        }
      });
    } catch (error) {
      window.confirm(error);
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-slate-100">
      <div className="w-full max-w-md">
        <h1 className="text-center text-3xl font-bold mb-10">Login Panel</h1>
        <Form
          layout="vertical"
          onFinish={onFinish}
          initialValues={{ remember: false }}
          className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <Form.Item
              label={"Username"}
              name={"username"}
              rules={[{ required: true, message: "Username required" }]}
            >
              <Input className="w-full" />
            </Form.Item>
          </div>
          <div className="mb-6">
            <Form.Item
              label={"Password"}
              name={"password"}
              rules={[{ required: true, message: "Password required" }]}
            >
              <Input.Password className="w-full" />
            </Form.Item>
          </div>
          <div className="flex items-center justify-between">
            <Form.Item className="w-full">
              <Button
                htmlType="submit"
                className="w-full bg-slate-300"
                loading={loading}
              >
                Login
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default LoginPanel;
