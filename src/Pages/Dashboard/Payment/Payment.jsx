import { loadStripe } from "@stripe/stripe-js";
import CheckOutFrom from "./CheckOutFrom";
import { Elements } from "@stripe/react-stripe-js";
// import useBookedClassesByStudent from "../../../Hooks/useBookedClassesByStudent";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    const { id } = useParams();
    console.log('id lagbe ',id);
    const [payment ,setPayment] = useState({})
    console.log('payment',payment);
    // const [bookedClassByStudent] = useBookedClassesByStudent();
    // const total = bookedClassByStudent.reduce((sum, item) => sum + item.price, 0);
    // const price = parseFloat(total.toFixed(2))
    useEffect(()=>{
        fetch(`http://localhost:5000/findSingleBook/${id}`)
        .then(res=>res.json())
        .then(data=>{
            setPayment(data)
        })
    },[id]);
    return (
        <div className="w-1/2 m-8">

            <Elements stripe={stripePromise}>
                <CheckOutFrom payment={payment}></CheckOutFrom>
            </Elements>
        </div>
    );
};

export default Payment;