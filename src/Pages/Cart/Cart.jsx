import { useLoaderData } from "react-router-dom";
import CartCard from "./CartCard";


const Cart = () => {

    const cartProducts = useLoaderData();
    console.log(cartProducts)

    return (
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-20">
        {
            cartProducts.map(cartProduct => <CartCard key={cartProduct._id} cartProduct={cartProduct}></CartCard>)
        }
       </div>
    );
};

export default Cart;