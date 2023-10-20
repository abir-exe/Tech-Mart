import { useLoaderData } from "react-router-dom";
import AboutUs from "./HomeComponents/AboutUs";
import Banner from "./HomeComponents/Banner";
import Brands from "./HomeComponents/Brands";
import Featured from "./HomeComponents/Featured";
import Marquee from "react-fast-marquee";
// import { useEffect, useState } from "react";
// import { ThemeProvider, useTheme } from "../DarkMode";
// import DarkModeToggle from "./HomeComponents/DarkModeToggle";

const Home = () => {
  const brands = useLoaderData();
  console.log(brands);

  // Dark- light theme toggle 
  // const [isDarkMode, setIsDarkMode] = useState(false);
  // const buttonClass = `w-16 h-8 bg-gray-300 rounded-full p-1 relative transition-colors duration-300 ease-linear ${
  //   isDarkMode ? 'bg-gray-800' : 'bg-yellow-500'
  // }`;

  // const toggleDarkMode = () => {
  //   setIsDarkMode(!isDarkMode);
  // };

  // useEffect(() => {
  //   if (isDarkMode) {
  //     document.documentElement.classList.add('dark');
  //   } else {
  //     document.documentElement.classList.remove('dark');
  //   }
  // }, [isDarkMode]);

  // const { isDarkMode, toggleDarkMode } = useTheme();
  



  return (
  
    <div>
      <Marquee pauseOnHover={true} className="py-2 mb-2">
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
      {/* dark light theme switcher  */}
      {/* <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold">Dark Mode / Light Mode Toggle</h1>
        <div>
          <label className="mt-4 switch-label">Toggle Dark Mode:</label>
          <div className="relative inline-block w-16 h-8 mr-2 align-middle select-none">
            <input
              type="checkbox"
              id="toggle"
              name="toggle"
              className="toggle-checkbox absolute block w-8 h-8 rounded-full bg-white border-4 appearance-none cursor-pointer"
              checked={isDarkMode}
              onChange={toggleDarkMode}
            />
            <label htmlFor="toggle" className={buttonClass}></label>
          </div>
          <label className="switch-label">{isDarkMode ? 'Dark Mode' : 'Light Mode'}</label>
        </div>
      </div>
    </div> */}
    </div>


    
  );
};

export default Home;
