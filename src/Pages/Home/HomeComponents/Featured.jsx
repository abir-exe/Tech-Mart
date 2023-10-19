import { IconContext } from "react-icons";
import { CiMobile3 } from "react-icons/ci";
import { MdPower } from "react-icons/md";
import {  IoIosLaptop } from "react-icons/io";
import {  IoWatchOutline } from "react-icons/io5";

import {  TbDeviceAirpods } from "react-icons/tb";
import {  BsHeadphones } from "react-icons/bs";
import {  BsFillSpeakerFill } from "react-icons/bs";
import {  PiMusicNotesPlusBold } from "react-icons/pi";
import {  RiWirelessChargingFill } from "react-icons/ri";
import {  LuCable } from "react-icons/lu";
import {  GiGreenPower } from "react-icons/gi";
import {  RiBatteryChargeLine } from "react-icons/ri";
import {  MdOutlineHub } from "react-icons/md";
import {  GrKeyboard } from "react-icons/gr";
import {  GiDeliveryDrone } from "react-icons/gi";
import {  FcSmartphoneTablet } from "react-icons/fc";

const Featured = () => {
  return (
    <div className="my-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold mb-3">Featured Categories</h2>
        <h2 className="text-xl">
          Get your desired product from featured category
        </h2>
      </div>
<div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-3">
      {/* card */}
      <div className="card    bg-[#f6f8fa]  ">
        <figure className="px-10 pt-10">
        <IconContext.Provider value={{ color: "", size: 90 }}>
        <FcSmartphoneTablet />
            
          </IconContext.Provider>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="       h-8">Phone and Tablet</h2></div>
      </div>
      {/* card */}
      <div className="card    bg-[#f6f8fa]  ">
        <figure className="px-10 pt-10">
        <IconContext.Provider value={{ color: "", size: 90 }}>
            < MdPower />
          </IconContext.Provider>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="       h-8">Power Adapter</h2></div>
      </div>
      {/* card */}
      <div className="card    bg-[#f6f8fa]  ">
        <figure className="px-10 pt-10">
        <IconContext.Provider value={{ color: "", size: 90 }}>
            <IoIosLaptop />
          </IconContext.Provider>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="       h-8">Macbook</h2></div>
      </div>
      {/* card */}
      <div className="card    bg-[#f6f8fa]  ">
        <figure className="px-10 pt-10">
        <IconContext.Provider value={{ color: "", size: 90 }}>
            <IoWatchOutline />
          </IconContext.Provider>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="       h-8">SmartWatch</h2></div>
      </div>
      {/* card */}
      <div className="card    bg-[#f6f8fa]  ">
        <figure className="px-10 pt-10">
        <IconContext.Provider value={{ color: "", size: 90 }}>
            <TbDeviceAirpods />
          </IconContext.Provider>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="       h-8">Airpods</h2></div>
      </div>
      {/* card */}
      <div className="card    bg-[#f6f8fa]  ">
        <figure className="px-10 pt-10">
        <IconContext.Provider value={{ color: "", size: 90 }}>
            <BsHeadphones />
          </IconContext.Provider>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="       h-8">Overhead Headphones</h2></div>
      </div>
      {/* card */}
      <div className="card    bg-[#f6f8fa]  ">
        <figure className="px-10 pt-10">
        <IconContext.Provider value={{ color: "", size: 90 }}>
            <BsFillSpeakerFill />
          </IconContext.Provider>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="       h-8">Speakers</h2></div>
      </div>
      {/* card */}
      <div className="card    bg-[#f6f8fa]  ">
        <figure className="px-10 pt-10">
        <IconContext.Provider value={{ color: "", size: 90 }}>
            <PiMusicNotesPlusBold />
          </IconContext.Provider>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="       h-8">Wired Earphones</h2></div>
      </div>
      {/* card */}
      <div className="card    bg-[#f6f8fa]  ">
        <figure className="px-10 pt-10">
        <IconContext.Provider value={{ color: "", size: 90 }}>
            <RiWirelessChargingFill />
          </IconContext.Provider>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="       h-8">Wireles Earphone</h2></div>
      </div>
      {/* card */}
      <div className="card    bg-[#f6f8fa]  ">
        <figure className="px-10 pt-10">
        <IconContext.Provider value={{ color: "", size: 90 }}>
            <LuCable />
          </IconContext.Provider>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="       h-8">Cable</h2></div>
      </div>
      {/* card */}
      <div className="card    bg-[#f6f8fa]  ">
        <figure className="px-10 pt-10">
        <IconContext.Provider value={{ color: "", size: 90 }}>
            <GiGreenPower />
          </IconContext.Provider>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="       h-8">PowerBank</h2></div>
      </div>
      {/* card */}
      <div className="card    bg-[#f6f8fa]  ">
        <figure className="px-10 pt-10">
        <IconContext.Provider value={{ color: "", size: 90 }}>
            <RiBatteryChargeLine />
          </IconContext.Provider>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="       h-8">Wireless Charger</h2></div>
      </div>
      {/* card */}
      <div className="card    bg-[#f6f8fa]  ">
        <figure className="px-10 pt-10">
        <IconContext.Provider value={{ color: "", size: 90 }}>
            <MdOutlineHub />
          </IconContext.Provider>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="       h-8">Hubs and Docks</h2></div>
      </div>
      {/* card */}
      <div className="card    bg-[#f6f8fa]  ">
        <figure className="px-10 pt-10">
        <IconContext.Provider value={{ color: "", size: 90 }}>
            <GrKeyboard />
          </IconContext.Provider>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="       h-8">keyBoard</h2></div>
      </div>
      {/* card */}
      <div className="card    bg-[#f6f8fa]  ">
        <figure className="px-10 pt-10">
        <IconContext.Provider value={{ color: "", size: 90 }}>
        <CiMobile3 />
          </IconContext.Provider>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="       h-8">Covers</h2></div>
      </div>
      {/* card */}
      <div className="card    bg-[#f6f8fa]  ">
        <figure className="px-10 pt-10">
        <IconContext.Provider value={{ color: "", size: 90 }}>
            <GiDeliveryDrone />
          </IconContext.Provider>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="       h-8">Drone and Camera</h2></div>
      </div>
      </div>
    </div>
  );
};

export default Featured;
