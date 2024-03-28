import { IoLocationOutline } from "react-icons/io5";
import { IoPeopleOutline } from "react-icons/io5";
import { FaSackDollar } from "react-icons/fa6";

const Adaptation = ({ adaptation }) => {

    const { bookAdaptations } = adaptation;
    return (
        <div>
            <div className="border-2 p-5 rounded-2xl mb-3">
                <div className="flex-1 lg:flex gap-5">
                    <div className="p-5 bg-zinc-100 rounded-2xl lg:w-1/4">
                        <img className="w-28 h-44 mx-auto" src={bookAdaptations.poster} alt="Album" />
                    </div>
                    <div className="w-full">
                        <h1 className="text-neutral-900 text-2xl font-bold font-['Playfair Display']">{bookAdaptations.adaptationName}</h1>
                        <p className="text-neutral-900 text-opacity-80 text-base font-medium font-['Work Sans'] py-2">Director : {bookAdaptations.director}</p>
                        <div className="flex-1 lg:flex items-center gap-3">
                            <div className="flex gap-2 items-center">
                                <p className="text-neutral-900 text-base font-bold font-['Work Sans'] leading-relaxed">Type</p>
                                <span className="text-center rounded-[30px] bg-green-500 text-green-500 bg-opacity-5 text-base font-medium font-['Work Sans'] p-3">{bookAdaptations.type}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <IoLocationOutline />
                                <p className="text-neutral-900 text-opacity-80 text-base font-bold font-['Work Sans']">Released: {bookAdaptations.released}</p>
                            </div>
                            <div className="flex items-center gap-2 text-neutral-900 text-opacity-60 text-base font-bold font-['Work Sans']">
                                <FaSackDollar />
                                <p>Gross Earnings: {bookAdaptations.worldwideGrossEarnings }</p>
                            </div>
                        </div>
                        <div className="flex-1 lg:flex items-center gap-5">
                            <div className="flex items-center gap-2 text-neutral-900 text-opacity-60 text-base font-normal font-['Work Sans']">
                                <IoPeopleOutline />
                                <p className="text-neutral-900 text-base font-bold font-['Work Sans'] leading-relaxed">Cast: { }</p>
                                <ul className="flex gap-3">
                                    {bookAdaptations.cast.map((tag, index) => (
                                        <li className="text-center rounded-[30px] bg-gray-500 text-black-500 bg-opacity-5 text-base font-medium font-['Work Sans'] p-3" key={index}>{tag}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <hr className="border border-neutral-900 border-opacity-20 my-2" />
                        <div className="flex-1 lg:flex gap-2">
                            <p className="btn text-blue-500 text-base font-normal font-['Work Sans'] bg-blue-500 bg-opacity-20 rounded-[30px] ">Run Time: {bookAdaptations.runtime}</p>
                            <p className="btn text-amber-400 text-base font-normal font-['Work Sans'] bg-amber-400 bg-opacity-20 rounded-[30px]">IMDB Rating: {bookAdaptations.imdbRating}</p>
                            <a className="btn text-white text-lg font-medium font-['Work Sans'] bg-green-600 rounded-[30px]" href={bookAdaptations.link} target="_blank">Watch This Movie</a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Adaptation;