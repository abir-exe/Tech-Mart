import Navbar from "../Shared/Navbar/Navbar";
import Banner from "./HomeComponents/Banner";
import Header from "./HomeComponents/Header";

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Header></Header>
            <Banner></Banner>
            <h2 className="text-3xl">This is Home</h2>
        </div>
    );
};

export default Home;