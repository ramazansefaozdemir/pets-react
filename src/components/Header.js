import { Button } from "antd";
import { useNavigate, Link, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const logOut = () => {
    if(window.confirm("Are you sure you want to Log Out?")){
        localStorage.removeItem("username");
        navigate("/login");
    }
  }

  return (
    <div className="bg-sky-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-start py-4">
          <div className="mr-auto">
            <Link to={"/"}>
              <span className={`mr-6 ${pathname === "/" | pathname==="/addPets" && "font-bold"}`}>Pets</span>
            </Link>
            <Link to={"/store"}>
              <span className={`mr-6 ${pathname === "/store" && "font-bold"}`}>Store</span>
            </Link>
            <Link to={"/analysis"}>
              <span className={`mr-6 ${pathname === "/analysis" && "font-bold"}`}>Analysis</span>
            </Link>
          </div>
          <Button
            className="font-bold ml-auto"
            onClick={logOut}
          >
            Log Out                                                                                           
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
