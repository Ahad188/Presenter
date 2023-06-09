import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import './CheckOut.css';

 

const CheckOut = ({classes, price}) => {
     const stripe = useStripe();
     const {user} = useAuth()
     const elements = useElements();
     const [axiosSecure] = useAxiosSecure()
     const [cardError, setCardError] = useState('');
     const [processing, setProcessing] = useState(false);
     const [clientSecret, setClientSecret] = useState('');
     const [transactionId, setTransactionId] = useState('');

     useEffect(() => {
          if (price > 0) {
              axiosSecure.post('/create-payment-intent', { price })
                  .then(res => {
                      console.log(res.data.clientSecret)
                      setClientSecret(res.data.clientSecret);
                  })
          }
      }, [price, axiosSecure])

      console.log(classes , "my classs");
     const handleSubmit = async (event) => {
          event.preventDefault();

          if (!stripe || !elements) {
               return
          }
           const card = elements.getElement(CardElement);
           if (card === null) {
               return
           }
           const { error  } = await stripe.createPaymentMethod({
               type: 'card',
               card
           })

           if (error) {
               console.log('error', error)
               setCardError(error.message);
           }
           else {
               setCardError('');
               // console.log('payment method', paymentMethod)
           }
   
           setProcessing(true)
           const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
               clientSecret,
               {
                   payment_method: {
                       card: card,
                       billing_details: {
                           email: user?.email || 'unknown',
                           name: user?.displayName || 'anonymous'
                       },
                   },
               },
           );
           if (confirmError) {
               console.log(confirmError);
           }
   
           console.log('payment intent', paymentIntent)

           setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            // save payment information to the server
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                quantity: classes?.length,
                cartItems: classes?.map(item => item._id),
                classId: classes?.map(item => item.classId),
                status: 'service pending',
                itemNames: classes?.map(item => item.subject)
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data);
                    if (res.data.result.insertedId) {
                        // display confirm
                    }
                })
        }
   
     
     }
     
     return (
          <>
          <form className="w-2/3 m-8" onSubmit={handleSubmit}>
              <CardElement
                  options={{
                      style: {
                          base: {
                              fontSize: '16px',
                              color: '#424770',
                              '::placeholder': {
                                  color: '#aab7c4',
                              },
                          },
                          invalid: {
                              color: '#9e2146',
                          },
                      },
                  }}
              />
              <button className="btn btn-info btn-sm mt-4" type="submit" disabled={!stripe || !clientSecret || processing}>
                  Pay
              </button>
          </form>
          {cardError && <p className="text-red-600 text-center text-xl">{cardError}</p>}
          {transactionId && <p className="text-xl text-center">Transaction complete with transactionId: <span className="text-green-500" >{transactionId}</span> </p>}
          
      </>
     );
};

export default CheckOut;