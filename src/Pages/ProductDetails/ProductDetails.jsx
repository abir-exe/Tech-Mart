import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";


const ProductDetails = () => {
  const { name } = useParams();
  console.log(name);

  const products = useLoaderData();
  console.log(products);

  // const selectedUser = products.find((product) => product.brandName === name);

  // console.log(selectedUser);

  // const filteredProduct = products.filter(
  //     (product) => product.name === name
  //   );
  //   console.log(filteredProduct)

  const foundProduct = products.find((product) => product.name === name);
  console.log(foundProduct);

  const handleCart = async (e) => {
    e.preventDefault();

    

    
    
    
    try {
        const res = await fetch('https://finaltechmart-87ntzw4qo-abir-mahmuds-projects.vercel.app/cartItems', {
            method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(foundProduct),
        });
        const data = await res.json();
        console.log(data);
        Swal.fire(
          'Product Added to Cart',
          'Successfully added',
          'success'
        )
        
    } catch (error) {
        console.error(error)
    }

}





  return (
    <div>
      <div className="lg:my-20 lg:p-5">
        <div className="hero min-h-full bg-base-200 lg:gap-10">
          <div className="hero-content flex-col lg:flex-row-reverse ">
            <img
              src={foundProduct.image}
              className="max-w-sm rounded-lg shadow-2xl lg:h-72 "
            />
            <div className="lg:mr-20">
              <h1 className="text-5xl font-bold">
                Device: {foundProduct.name}
              </h1>
              <h2 className="font-bold text-sm">
                Brand: {foundProduct.brandName}
              </h2>
              <p className="lg:py-6 font-semibold italic">
                Price: {foundProduct.price}
              </p>
              <p className="lg:py-6 font-semibold">
                Description: {foundProduct.description}
              </p>
              <button onClick={handleCart} className="btn btn-outline">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
