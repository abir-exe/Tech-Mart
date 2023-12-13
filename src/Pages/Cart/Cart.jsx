import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
// import CartCard from "./CartCard";

const Cart = () => {

    
    const cartProducts = useLoaderData();
    console.log(cartProducts);
    
    const [updatedProducts, setUpdatedProducts]= useState(cartProducts);



  // to delete
  const handleDelete = async (_id) => {
    console.log(_id);

       fetch(`https://techmartfinall.vercel.app/cart/${_id}`, {
        method: "DELETE",
       })
       .then(res => res.json())
       .then(data => {
        console.log(data);
        if(data.deletedCount> 0){
            const filteredProducts = updatedProducts.filter(item => item._id !== _id)
                setUpdatedProducts(filteredProducts);
            Swal.fire(
                'Product Deleted Successfully',
                'Product Deleted',
                'success'
              )
        }
       })
  };

  return (
    <div>
        {
        (cartProducts.length>0) ?
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-20">
      {updatedProducts.map((cartProduct) => (
        <div key={cartProduct._id}>
          <div className="card min-h-full bg-base-100 shadow-xl mb-5">
            <figure>
              <img className="h-36" src={cartProduct.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Device: {cartProduct.name}</h2>
              <p className="text-sm font-bold italic">
                Brand: {cartProduct.brandName}
              </p>

              <p>Description: {cartProduct.description}</p>
              <div className="card-actions justify-center pt-4">
                <button onClick={() => handleDelete(cartProduct._id)} className="btn btn-outline">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    :
    <div className="flex flex-col items-center justify-center h-80">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-red-500"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-14a6 6 0 100 12 6 6 0 000-12zm0 5a1 1 0 00-1 1v3a1 1 0 102 0V10a1 1 0 00-1-1zm0 1a1 1 0 100 2 1 1 0 000-2z"
          clipRule="evenodd"
        />
      </svg>
      <p className="text-xl text-gray-600 mt-2">Sorry, no product is available</p>
    </div>
    }
    </div>
  );
};

export default Cart;
