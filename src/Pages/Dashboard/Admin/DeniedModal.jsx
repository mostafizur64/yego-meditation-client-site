import { useState } from "react";
import { toast } from "react-hot-toast";

const DeniedModal = ({ modal }) => {
    console.log('modal datga', modal);
    const [feedBack, setFeedBack] = useState('');
    console.log('feed back', feedBack);
    const handleFeedBack = () => {
        fetch(`https://yoga-meditation-server-site.vercel.app/sendFeedBack/${modal._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ feedback: feedBack })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                fetch(`https://yoga-meditation-server-site.vercel.app/class-statusDenied/${modal._id}`, {
                    method: 'PATCH',
                })
                    .then(res => res.json())
                    .then(data => {
                       
                        if (data.modifiedCount) {
                            toast.success('status Denied');
                        }
                    })
            })
    }
    return (
        <>
           
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