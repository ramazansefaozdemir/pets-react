import { Table, Modal, Input, message} from "antd";
import { useState } from "react";

function MyTable() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [rowId, setRowId] = useState("");
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const columns = [
    {
      title: "Pet Name",
      dataIndex: "petName",
      key: "petName",
      align: "left",
    },
    {
      title: "Update my pet",
      dataIndex: "updatePet",
      key: "updatePet",
      align: "left",
      render: () => (
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={showModal}
        >
          Update
        </button>
      ),
    },
    {
      title: "Delete my pet",
      dataIndex: "deletePet",
      key: "deletePet",
      align: "center",
      render: () => (
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={()=> {messageApi.open({
          type: 'warning',
          content: 'Could not delete!',
        })}}>
          Delete
        </button>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      petName: "Fluffy",
    },
    {
      key: "2",
      petName: "Rex",
    },
    {
      key: "3",
      petName: "Mittens",
    },
  ];

  return (
    <div>
      <div className="bg-white shadow-md rounded my-6">
        <Table columns={columns} dataSource={data} pagination={false} key={"id"} onRow={(record, rowIndex) => {
          return {
             onClick: event => {setRowId(record.petName)}
          }
       }}/>
      </div>
      <Modal
        title="Update Pets"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input value={rowId}></Input>
      </Modal>
      {contextHolder}
    </div>
  );
}

export default MyTable;
