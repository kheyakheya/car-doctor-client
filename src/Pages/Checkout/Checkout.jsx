import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { useContext } from 'react';

const Checkout = () => {
    const {user}=useContext(AuthContext);
    console.log("user", user);
    const service = useLoaderData();
    const { title, price, _id,img } = service;
    const handleBookOrder=e=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const date= form.date.value;
        const email= user?.email;
        const booking={
            customerName:name,
            email,
            date,
            img,
            service: title,
            service_id: _id,
            price:price
        }
        console.log(booking)
        fetch('https://y-pearl-three.vercel.app/bookings',{
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                alert("Booking success")
            }
        })
    }
    return (
        <div>
            <h2 className='text-center text-3xl'>Book service: {title}</h2>

            <div className="card-body">
                <form onSubmit={handleBookOrder}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' defaultValue={user?.displayName} placeholder="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name='date'  className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" defaultValue={user?.email} name="email" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input type="text" defaultValue={'$' + price} placeholder="password" className="input input-bordered" />

                    </div>
                    </div>
                    <div className="form-control mt-6">
                       
                        <input className="btn btn-warning btn-block" type="submit" value="Order Confirm" />
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Checkout;