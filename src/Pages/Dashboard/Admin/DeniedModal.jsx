import { useState } from "react";

const DeniedModal = ({ modal }) => {
    console.log('modal datga', modal);
    const [feedBack, setFeedBack] = useState('');
    console.log('feed back',feedBack);
    const handleFeedBack = () =>{
        fetch(`http://localhost:5000/sendFeedBack/${modal._id}`,{
            method:'PUT',
            headers:{
                'contents-type':'application.json',
            },
            body:JSON.stringify(feedBack) 
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    }
    return (
        <>
            {/* The button to open modal */}


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <input type="text" placeholder="send Feed back" name='name' onChange={(e) => setFeedBack(e.target.value)} />
                    <div className="modal-action">
                        <label htmlFor="my_modal_6" onClick={handleFeedBack} className="btn">Feed Back</label>
                        <label htmlFor="my_modal_6" className="btn">Close!</label>
                    </div>

                </div>
            </div>
        </>
    );
};

export default DeniedModal;