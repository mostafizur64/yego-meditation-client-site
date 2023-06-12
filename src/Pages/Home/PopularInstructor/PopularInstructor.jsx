import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import useAuth from "../../../Hooks/useAuth";

const PopularInstructor = () => {
  const { user } = useAuth();
  const [popularInstructor, setPopularInstructor] = useState([]);

  useEffect(() => {
    fetch("https://yoga-meditation-server-site.vercel.app/showPopularClass")
      .then((res) => res.json())
      .then((data) => {
        setPopularInstructor(data);
      });
  }, []);

  const swiperBreakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  };

  return (
    <div>
      <div>
        <h2 className="text-4xl text-extrabold text-center mt-8 text-orange-400">
          --- Our Popular Instructor ---
        </h2>
      </div>
      <Swiper
        breakpoints={swiperBreakpoints}
        centeredSlides={true}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {popularInstructor.map((item) => (
          <SwiperSlide key={item._id} className="w-full mt-8">
            <div className="card   border-2">
              <figure>
                <img src={user?.photoURL} alt="" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.instructorName}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularInstructor;
