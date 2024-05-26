import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from "./CheckoutForm";


// todo:
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const PayMent = () => {
  return (
    <div>
      <SectionTitle heading='Payment' subHeading='Pleas Pay Eat'></SectionTitle>
      <div>
        <Elements stripe={stripePromise}>
       <CheckoutForm></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default PayMent;