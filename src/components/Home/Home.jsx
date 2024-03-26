import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Books from "../Books/Books";

const Home = () => {
    const homes = useLoaderData()
    console.log(homes)
    return (
        <div>
            <Banner></Banner>
            <Books></Books>
            
        </div>
    );
};

export default Home;