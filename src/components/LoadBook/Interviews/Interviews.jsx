import { useEffect, useState } from "react";
import Interview from "../../Interview/Interview";

const Interviews = () => {
    const [interviews, setInterviews] = useState([]);

    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setInterviews(data));
    }, [])
    return (
        <div className="container mx-auto lg:px-20 px-5 py-5">
            <div >
                    {
                        interviews.map(interview => <Interview key={interview.id} interview={interview}></Interview>)
                    }
                </div>
            
        </div>
    );
};

export default Interviews;