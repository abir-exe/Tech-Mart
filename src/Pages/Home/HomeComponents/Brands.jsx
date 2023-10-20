/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Brands = ({brand}) => {

  const { name, image} = brand || {};
  console.log(brand);

  return (
    <div className="my-10">
      

      <Link to={`/brandDetails/${name}`}>
        {/* card */}
        <div className="card bg-base-100 shadow-xl h-52">
          <figure>
            <img className="p-1" src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="text-bold text-xl text-center p-2">{name}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Brands;
