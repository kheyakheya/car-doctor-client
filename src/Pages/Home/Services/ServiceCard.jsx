import { Link } from "react-router-dom";

const ServiceCard = ({service}) => {
    const {title, img, price, _id}=service;
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="text-orange-500 text-xl">$ {price}</p>
                <div className="card-actions">
                    <Link to={`/checkout/${_id}`}><button className="btn btn-warning">Book Now</button>
</Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;