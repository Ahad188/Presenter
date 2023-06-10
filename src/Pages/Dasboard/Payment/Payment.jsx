import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOut from "./CheckOut";
import useClass from "../../../hooks/useClass";
import { Helmet } from "react-helmet-async";

 
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);
const Payment = () => {
     const [classes] = useClass();
  const total = classes.reduce((sum, item) => item.price + sum, 0);
  const price = parseFloat(total.toFixed(2))
     return (
          <>
          <Helmet>
            <title>Presenter / Payment</title>
          </Helmet>
          <div className="w-[900px] mx-auto">
               <h2>Payment system is here</h2>
               <Elements stripe={stripePromise}>
                     <CheckOut classes={classes} price={price}></CheckOut>
               </Elements>
          </div>
          </>
     );
};

export default Payment;