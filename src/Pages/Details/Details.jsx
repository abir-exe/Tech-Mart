import { useLoaderData } from "react-router-dom";
import p1 from "../../../public/images/details/1.jpg";
import p2 from "../../../public/images/details/2.jpg";
import p3 from "../../../public/images/details/3.jpg";
import p4 from "../../../public/images/details/4.jpg";

const Details = () => {
  const users = useLoaderData();
  console.log(users);

  return (
    <div>
      <div className="w-9/12 mx-auto my-10">
        {/* slider of offers  */}
        <div className="carousel mb-10 h-[80vh] ">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={p1} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src={p2} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src={p3} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img src={p4} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
        
        {users.map((user) => (
          <div className="" key={user._id}>
            <div className="card h-96 bg-base-100 shadow-xl mb-5">
              <figure>
                <img
                className="h-36"
                  src={user.image}
                  alt="Shoes"
                />
              </figure>
              <div className=" p-3 m-3 space-y-2">
                <div className="flex justify-between">
                <h2 className="">{user.name}</h2>
                <h3 className="font-semibold">Brand: {user.brandName}</h3>
                </div>
                <div className="flex justify-between font-semibold">
                <p>Type:</p>
                <p>Price: {user.price}</p>
                </div>
                <p className="font-extrabold">Rating: 8.6</p>
                <p>Description: {user.description}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-outline">Details</button>
                  <button className="btn btn-outline">Update</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
