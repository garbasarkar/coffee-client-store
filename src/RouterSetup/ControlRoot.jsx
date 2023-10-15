import { Outlet } from "react-router-dom";
import Header from "../AllComponent/Header";

const ControlRoot = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default ControlRoot;