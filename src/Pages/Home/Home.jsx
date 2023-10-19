import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
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
            <Footer></Footer>
        </div>
    );
};

export default Home;