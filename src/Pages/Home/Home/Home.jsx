import { Helmet } from "react-helmet-async";
import TopSlider from "../TopSlider/TopSlider";
import WhatWeDo from "../WhatWeDo/WhatWeDo";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Yoga Meditation | Home</title>
            </Helmet>
           <TopSlider></TopSlider>
           {/* //TODO  */}
           <WhatWeDo></WhatWeDo>
        </div>
    );
};

export default Home;