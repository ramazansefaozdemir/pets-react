import { Button } from "antd";
import Header from "../components/Header";
import Table from "../components/Table";
import { useNavigate } from "react-router-dom";

const AddPetForm = () => {
  const newPost = 1;
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div>
        {newPost > 0 ? (
          <div className="px-10">
            <div>
              <div className="flex justify-between items-center py-4 px-10">
                <div className="text-lg font-semibold text-gray-800">
                  My Pets:
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => navigate("/addPets")}>
                  Add Another Pet
                </button>
              </div>
            </div>
            <div className="px-10">
              <Table />
            </div>
          </div>
        ) : (
          <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-blue-900 text-4xl py-10">
                There is no pet currently available please add one!
              </h1>
              <Button
                danger
                className="flex justify-center w-64"
                onClick={() => navigate("/addPets")}
              >
                Add a New Pet
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddPetForm;
