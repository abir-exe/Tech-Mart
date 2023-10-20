/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const DetailsCard = ({product}) => {

console.log(product)

const {name, brandName, image, description, price, _id } = product;

  return (
    <div>
      <div className="">
        
          <div className="">
            <div className="card h-96 bg-base-100 shadow-xl mb-5">
              <figure>
                <img className="h-36" src={image} alt="Shoes" />
              </figure>
              <div className=" p-3 m-3 space-y-2">
                <div className="flex justify-between">
                  <h2 className="">{name}</h2>
                  <h3 className="font-semibold">Brand: {brandName}</h3>
                </div>
                <div className="flex justify-between font-semibold">
                  <p>Type:</p>
                  <p>Price: {price}</p>
                </div>
                <p className="font-extrabold">Rating: 8.6</p>
                <p>Description: {description}</p>
                <div className="card-actions justify-end">
                  <Link to={`/productDetails/${_id}`}><button className="btn btn-outline">Details</button></Link>
                  <Link to={`/users/${_id}`}><button className="btn btn-outline">Update</button></Link>
                </div>
              </div>
            </div>
          </div>
        
      </div>
    </div>
  );
};

export default DetailsCard;
