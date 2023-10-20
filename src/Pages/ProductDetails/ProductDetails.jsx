import { useLoaderData, useParams } from "react-router-dom";


const ProductDetails = () => {

    const {  name } = useParams();
    console.log(name)

    const products = useLoaderData();
    console.log(products);

    // const selectedUser = products.find((product) => product.brandName === name);

    // console.log(selectedUser);
    const filteredProduct = products.filter(
        (product) => product.name === name
      );
      console.log(filteredProduct)

    return (
        <div>
            
            {
                filteredProduct.map(product=> <div key={product._id} className="my-20 p-5">
                    <div className="hero min-h-screen bg-base-200 gap-10">
  <div className="hero-content flex-col lg:flex-row-reverse ">
    <img src={product.image} className="max-w-sm rounded-lg shadow-2xl lg:h-72 rounded-xl" />
    <div className="lg:mr-20">
      <h1 className="text-5xl font-bold">Device: {product.name}</h1>
      <h2 className="font-bold text-sm">Brand: {product.brandName}</h2>
      <p className="py-6">Price: {product.price}</p>
      <p className="py-6">Description: {product.description}</p>
      <button className="btn btn-outline">Add to Cart</button>
    </div>
  </div>
</div>
                </div>)
            }
        </div>
    );
};

export default ProductDetails; 