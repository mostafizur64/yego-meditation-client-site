import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";
import slider1 from '../../../assets/image/slider/slider-img-1.jpg'
import slider2 from '../../../assets/image/slider/slider-img-2.jpg'
import slider3 from '../../../assets/image/slider/slider-img-3.jpg'


const TopSlider = () => {

    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
           
                <SwiperSlide>
                  <img className="w-full h-[600px]" src={slider1} alt="" />
                  <div className="absolute hidden lg:block  lg:-mt-[380px] lg:ml-[640px]   text-center  justify-center"> 
                    <h3 className="text-3xl">Daily Yog Used For Healthy Life</h3>
                    <h4 className="text-2xl">Few minute of Yoga Healthy life</h4>
                    <button>Visit Now</button>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                <img className="w-full h-[600px]" src={slider2} alt="" />
                <div className="absolute hidden lg:block  lg:-mt-[380px] lg:ml-[160px]   text-center  justify-center"> 
                    <h3 className="text-3xl">Daily Yog Used For Healthy Life</h3>
                    <h4 className="text-2xl">Few minute of Yoga Healthy life</h4>
                    <button>Visit Now</button>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                <img className="w-full h-[600px]" src={slider3} alt="" />
                <div className="absolute hidden lg:block  lg:-mt-[380px] lg:ml-[660px]   text-center  justify-center">  
                    <h3 className="text-3xl">Daily Yog Used For Healthy Life</h3>
                    <h4 className="text-2xl">Few minute of Yoga Healthy life</h4>
                    <button>Visit Now</button>
                  </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default TopSlider;