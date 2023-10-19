import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import AboutUs from "./HomeComponents/AboutUs";
import Banner from "./HomeComponents/Banner";
import Brands from "./HomeComponents/Brands";
import Featured from "./HomeComponents/Featured";
import Header from "./HomeComponents/Header";

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Header></Header>
            <Banner></Banner>
            <h2 className="text-3xl">This is Home</h2>
            <Brands></Brands>
            <Featured></Featured>
            <AboutUs></AboutUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;