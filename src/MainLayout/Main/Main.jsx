import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

const Main = () => {
    return (
        <div className="container  mx-auto">
            <Navbar></Navbar>
            <div>
                <Outlet ></Outlet>
            </div>
        </div>
    );
};

export default Main;