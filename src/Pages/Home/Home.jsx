import AboutUs from "./HomeComponents/AboutUs";
import Banner from "./HomeComponents/Banner";
import Brands from "./HomeComponents/Brands";
import Featured from "./HomeComponents/Featured";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h2 className="text-3xl">This is Home</h2>
            <Brands></Brands>
            <Featured></Featured>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;