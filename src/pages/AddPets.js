import { Input, Button, Form } from "antd";
import React, { useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import Remotes from "../Remotes";

const AddPets = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
    const data = {
      category: values.category,
      name: values.name,
      tags: values.tags,
    };
    let randomNumber = Math.floor(Math.random() * 50) + 1;
    try {
      const response = {
        id: randomNumber,
        category: {
          id: 0,
          name: data.category,
        },
        name: data.name,
        tags: [
          {
            id: 0,
            name: data.tags,
          },
        ],
      };
      Remotes.postAddPet(response).then((r) => {
        if (r.status === 200) {
          navigate("/");
        }
      });
    } catch (error) {
      window.confirm(error);
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center">
        <Form
          onFinish={onFinish}
          className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 w-1/2"
        >
          <h1 className="text-4xl font-bold mb-14 text-center">Add A Pet!</h1>
          <div className="mb-4">
            <Form.Item
              label={"Category"}
              name={"category"}
              rules={[{ required: true, message: "Category required" }]}
            >
              <Input
                type="text"
                id="category"
                name="category"
                placeholder="Enter category"
                className="w-full"
              />
            </Form.Item>
          </div>
          <div className="mb-4">
            <Form.Item
              label={"Name"}
              name={"name"}
              rules={[{ required: true, message: "Name required" }]}
            >
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Enter name"
                className="w-full"
              />
            </Form.Item>
          </div>
          <div className="mb-4">
            <Form.Item
              label={"Tags"}
              name={"tags"}
              rules={[{ required: true, message: "Tags required" }]}
            >
              <Input
                id="tags"
                name="tags"
                placeholder="Enter tags"
                className="w-full"
              />
            </Form.Item>
          </div>
          <div className="flex justify-end">
            <Button htmlType="submit" className="w-full bg-slate-300">
              Add!!
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddPets;
