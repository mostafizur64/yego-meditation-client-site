import { loadStripe } from "@stripe/stripe-js";
import CheckOutFrom from "./CheckOutFrom";
import { Elements } from "@stripe/react-stripe-js";
import useBookedClassesByStudent from "../../../Hooks/useBookedClassesByStudent";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    const [bookedClassByStudent] = useBookedClassesByStudent();
    const total = bookedClassByStudent.reduce((sum,item)=>sum+item.price,0);
    const price  = parseFloat(total.toFixed(2))
    return (
        <div className="w-1/2 m-8">
            
            <Elements stripe={stripePromise}>
                <CheckOutFrom price ={price} bookedClassByStudent={bookedClassByStudent}></CheckOutFrom>
            </Elements>
        </div>
    );
};

export default Payment;