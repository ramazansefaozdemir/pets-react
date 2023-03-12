import React, { useState } from "react";
import Header from "../components/Header";
import Remotes from "../Remotes";
import { Button, Input, Modal, Checkbox, Select } from "antd";
const { TextArea } = Input;

const Store = () => {
  const [todos, setTodos] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [status, setStatus] = useState("");
  const [quantity, setQuantity] = useState();
  const [complete, setComplete] = useState();

  const handleAddProducts = () => {
    let response = {
      id: 0,
      petId: 0,
      quantity: Number(quantity),
      shipDate: "2023-03-11T17:21:39.951Z",
      status: status,
      complete: complete,
    };

    Remotes.postStore(response).then((r) => {
      try {
        if (r.status === 200) {
          setTodos([...todos, { text: status, completed: false }]);
          setStatus("");
          setQuantity("");
          setComplete("");
          setModalVisible(false);
        }
      } catch (error) {
        console.log(error);
      }
    });
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleTodoToggle = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const onSearch = (value) => {
    console.log("search:", value);
  };

  return (
    <div>
      <Header />
      <div className="mx-auto max-w-md mt-4">
        <h1 className="text-center text-2xl font-bold mb-4">My Store Page</h1>
        {todos.map((todo, index) => (
          <div key={index} className="flex items-center my-2">
            <Checkbox
              checked={todo.completed}
              onChange={() => handleTodoToggle(index)}
            />
            <span className={`ml-2 ${todo.completed ? "line-through" : ""}`}>
              {todo.text}
            </span>
            <Button
              className="ml-auto"
              type="text"
              danger
              onClick={() => handleDeleteTodo(index)}
            >
              Delete
            </Button>
          </div>
        ))}
        <Button
          className="w-full my-4"
          type="primary"
          onClick={() => setModalVisible(true)}
        >
          Add Pets Product
        </Button>
        <Modal
          visible={modalVisible}
          onCancel={() => setModalVisible(false)}
          onOk={handleAddProducts}
          okText="Add"
          cancelText="Cancel"
        >
          <label>Quantity</label>
          <Input
            className="mb-2 w-full"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          />
          <label>Complete</label>
          <Select
            showSearch
            placeholder="Select a complete"
            optionFilterProp="children"
            className="mb-2 w-full"
            value={complete}
            onChange={(e) => {
              setComplete(e);
            }}
            onSearch={onSearch}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={[
              {
                value: true,
                label: "true",
              },
              {
                value: false,
                label: "false",
              },
            ]}
          />
          <label>Status</label>
          <TextArea
            placeholder="Enter a new status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </Modal>
      </div>
    </div>
  );
};

export default Store;
