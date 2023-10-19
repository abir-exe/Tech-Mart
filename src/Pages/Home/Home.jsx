import { useLoaderData } from "react-router-dom";
import AboutUs from "./HomeComponents/AboutUs";
import Banner from "./HomeComponents/Banner";
import Brands from "./HomeComponents/Brands";
import Featured from "./HomeComponents/Featured";
import Marquee from "react-fast-marquee";

const Home = () => {
  const brands = useLoaderData();
  console.log(brands);

  return (
    <div>
      <Marquee pauseOnHover={true} className=" py-2 mb-2">
        All Kinds of Tech Solution.     We are now going through a period when technology brings the revolution. From dawn to dusk every moment in our life is connected to technology. Various kinds of smart gadgets become inseparable parts of our daily life. Consistent with the demand there is a huge gadget-selling market globally including Bangladesh.    
      </Marquee>
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
