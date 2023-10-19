import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header";


const Root = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar/>
            <Header/>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default Root;