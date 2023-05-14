import './Team.css'
import team1 from '../../../assets/images/team/1.jpg'
import team2 from '../../../assets/images/team/2.jpg'
import team3 from '../../../assets/images/team/3.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
const Team = () => {
    return (
        <div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={true}
                navigation={true}
            
        modules={[ Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="card  bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={team1} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Car Engine Plug</h2>
                            <p>Engine Expert</p>
                            
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="card  bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={team3} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Car Engine Plug</h2>
                            <p>Engine Expert</p>
                            
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="card  bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={team2} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Car Engine Plug</h2>
                            <p>Engine Expert</p>
                            
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="card  bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={team3} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Car Engine Plug</h2>
                            <p>Engine Expert</p>
                            
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="card  bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={team1} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Car Engine Plug</h2>
                            <p>Engine Expert</p>
                            
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="card  bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={team1} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Car Engine Plug</h2>
                            <p>Engine Expert</p>
                            
                        </div>
                    </div>
                </SwiperSlide>
                
            </Swiper>
        </div>
    );
};

export default Team;