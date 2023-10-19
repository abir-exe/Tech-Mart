import { useLoaderData } from "react-router-dom";
import AboutUs from "./HomeComponents/AboutUs";
import Banner from "./HomeComponents/Banner";
import Brands from "./HomeComponents/Brands";
import Featured from "./HomeComponents/Featured";

const Home = () => {
  const brands = useLoaderData();
  console.log(brands);

  return (
    <div>
      <Banner></Banner>

      <div className="my-10">
        <h2 className="text-2xl text-center my-10">Shop By Brands</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 my-5">
          {brands.map((brand) => (
            <Brands key={brand.id} brand={brand}></Brands>
          ))}
        </div>
      </div>

      <Featured></Featured>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;
