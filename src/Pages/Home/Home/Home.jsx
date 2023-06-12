import { Helmet } from "react-helmet-async";
import TopSlider from "../TopSlider/TopSlider";
import WhatWeDo from "../WhatWeDo/WhatWeDo";
import PopularClass from "../PopularClass/PopularClass";
import PopularInstructor from "../PopularInstructor/PopularInstructor";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Yoga Meditation | Home</title>
            </Helmet>
           <TopSlider></TopSlider>
           <PopularClass></PopularClass>
           <PopularInstructor></PopularInstructor>
           {/* //TODO  */}
           <WhatWeDo></WhatWeDo>
        </div>
    );
};

export default Home;