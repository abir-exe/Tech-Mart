import { useLoaderData } from "react-router-dom";
// import CartCard from "./CartCard";

const Cart = () => {
  const cartProducts = useLoaderData();
  console.log(cartProducts);

  // to delete
  const handleDelete = async (_id) => {
    console.log(_id);

       fetch(`http://localhost:5000/cart/${_id}`, {
        method: "DELETE",
       })
       .then(res => res.json())
       .then(data => {
        console.log(data);
       })
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-20">
      {cartProducts.map((cartProduct) => (
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
  );
};

export default Cart;
