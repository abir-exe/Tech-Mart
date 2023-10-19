import Navbar from "../Shared/Navbar/Navbar";
import Header from "./HomeComponents/Header";

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Header></Header>
            <h2 className="text-3xl">This is Home</h2>
        </div>
    );
};

export default Home;