/* eslint-disable react/prop-types */
const CartCard = ( {cartProduct} ) => {

    const {name, brandName, image, description, price, _id } = cartProduct;

  return (
    <div className="">
      <div className="card min-h-full bg-base-100 shadow-xl mb-5">
        <figure>
          <img 
          className="h-36"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Device: {name}</h2>
          <p className="text-sm font-bold italic">Brand: {brandName}</p>

          <p>Description: {description}</p>
          <div className="card-actions justify-center pt-4">
            <button className="btn btn-outline">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
