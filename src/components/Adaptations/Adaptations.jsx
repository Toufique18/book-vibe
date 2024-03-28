import { useEffect, useState } from "react";
import Adaptation from "../Adaptation/Adaptation";

const Adaptations = () => {
    const [adaptations, setAdaptations] = useState([]);

    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setAdaptations(data));
    }, [])
    return (
        <div className="container mx-auto lg:px-20 px-5 py-5">
            <div >
                    {
                        adaptations.map(adaptation => <Adaptation key={adaptation.id} adaptation={adaptation}></Adaptation>)
                    }
                </div>
        </div>
    );
};

export default Adaptations;