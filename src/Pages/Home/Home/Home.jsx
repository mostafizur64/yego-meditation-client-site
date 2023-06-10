import { Helmet } from "react-helmet-async";
import TopSlider from "../TopSlider/TopSlider";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Yoga Meditation | Home</title>
            </Helmet>
           <TopSlider></TopSlider>
        </div>
    );
};

export default Home;