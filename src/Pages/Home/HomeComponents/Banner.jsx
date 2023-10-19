import iphone from "../../../../public/images/iphone.webp"
import pixel from "../../../../public/images/pixel.webp"
import asus from "../../../../public/images/Asus.webp"
import xiaomi from "../../../../public/images/Xiaomi.webp"
import watch from "../../../../public/images/watch.webp"
import pod from "../../../../public/images/pod.webp"

const Banner = () => {
    return (
        <div className="flex justify-center items-center gap-5">
            <div>
            <div className="carousel ">
  <div id="item1" className="carousel-item w-full">
    <img src={iphone} className="w-full" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src={pixel} className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src={asus} className="w-full" />
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src={xiaomi} className="w-full" />
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>
            </div>
            <div className=" items-center justify-around">
                <div>
                <img className="w-full my-2" src={watch} alt="" />
                </div>
                <div>
                <img className="w-full my-2" src={pod} alt="" />
                </div>
                <div>
                <img className="w-full my-2" src={watch} alt="" />
                </div>
                <div>
                <img className="w-full my-2" src={pod} alt="" />
                </div>
                <div>
                <img className="w-full my-2" src={watch} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;