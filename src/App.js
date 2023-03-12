import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Pets from "./pages/Pets"
import AddPets from "./pages/AddPets"
import Store from "./pages/Store"
import Analysis from "./pages/Analysis"
import Login from "./pages/auth/Login"
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/"
          element={
            <RouterControl>
              <Pets />
            </RouterControl>
          }
        />
        <Route 
          path="/addPets"
          element={
            <RouterControl>
              <AddPets />
            </RouterControl>
          }
        />
        <Route 
          path="/store"
          element={
            <RouterControl>
              <Store />
            </RouterControl>
          }
        />
        <Route 
          path="/analysis"
          element={
            <RouterControl>
              <Analysis />
            </RouterControl>
          }
        />
        <Route 
          path="/login"
          element={
            <Login />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


export const RouterControl = ({ children }) => {
  if (localStorage.getItem("username")) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};