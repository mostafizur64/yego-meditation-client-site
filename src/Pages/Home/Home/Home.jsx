import { Helmet } from "react-helmet-async";
import TopSlider from "../TopSlider/TopSlider";
import WhatWeDo from "../WhatWeDo/WhatWeDo";
import PopularClass from "../PopularClass/PopularClass";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import BebefitOfYoga from "../BebefitOfYoga/BebefitOfYoga";
import Blog from "../Blog/Blog";

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
           <BebefitOfYoga></BebefitOfYoga>
           <WhatWeDo></WhatWeDo>
           <Blog></Blog>
        </div>
    );
};

export default Home;