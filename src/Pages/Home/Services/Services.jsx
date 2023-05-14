import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services,setServices]= useState([]);
    useEffect(()=>{
        fetch('https://y-pearl-three.vercel.app/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])


    return (
        <div className="my-16">
            <div className="text-center">
                <h3 className="text-2xl font-bold text-orange-500">Our Services</h3>
                <h2 className="text-5xl">Service Area</h2>
                <p>There are many variations of text Available, But The MAjority HAve randomized <br/> stuff Alteration in Some Form slightly in variation</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map(service=><ServiceCard
                key={service._id} service={service}
                ></ServiceCard>)}
            </div>
            <div className="text-center my-4">
                <button className="btn btn-outline btn-warning">More Services</button>
            </div>
            
        </div>
    );
};

export default Services;