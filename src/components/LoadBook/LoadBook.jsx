import { IoLocationOutline } from "react-icons/io5";
import { IoPeopleOutline } from "react-icons/io5";
import { MdOutlineContactPage } from "react-icons/md";


const LoadBook = ({ book }) => {
    const { id, image, tags, bookName, author, category, rating, yearOfPublishing, publisher, totalPages } = book;
    return (
        <div>
            <div className="border-2 p-5 rounded-2xl mb-3">
                <div className="flex-1 lg:flex gap-5">
                    <div className="p-5 bg-zinc-100 rounded-2xl lg:w-1/4">
                        <img className="w-28 h-44 mx-auto" src={image} alt="Album" />
                    </div>
                    <div className="w-full">
                        <h1 className="text-neutral-900 text-2xl font-bold font-['Playfair Display']">{bookName}</h1>
                        <p className="text-neutral-900 text-opacity-80 text-base font-medium font-['Work Sans'] py-2">by : {author}</p>
                        <div className="flex-1 lg:flex items-center gap-3">
                            <div className="flex gap-2 items-center">
                                <p className="text-neutral-900 text-base font-bold font-['Work Sans'] leading-relaxed">Tags</p>
                                <ul className="flex gap-3">
                                    {tags.map((tag, index) => (
                                        <li className="text-center rounded-[30px] bg-green-500 text-green-500 bg-opacity-5 text-base font-medium font-['Work Sans'] p-3" key={index}>#{tag}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex items-center gap-2">
                                <IoLocationOutline />
                                <p className="text-neutral-900 text-opacity-80 text-base font-normal font-['Work Sans']">Year of Publishing: {yearOfPublishing}</p>
                            </div>
                        </div>
                        <div className="flex-1 lg:flex items-center gap-5">
                            <div className="flex items-center gap-2 text-neutral-900 text-opacity-60 text-base font-normal font-['Work Sans']">
                                <IoPeopleOutline />
                                <p>Publisher: {publisher}</p>
                            </div>
                            <div className="flex items-center gap-2 text-neutral-900 text-opacity-60 text-base font-normal font-['Work Sans']">
                                <MdOutlineContactPage />
                                <p>Page {totalPages}</p>
                            </div>
                        </div>
                        <hr className="border border-neutral-900 border-opacity-20 my-2"  />
                        <div className="flex-1 lg:flex gap-2">
                            <p className="btn text-blue-500 text-base font-normal font-['Work Sans'] bg-blue-500 bg-opacity-20 rounded-[30px] ">Category: {category}</p>
                            <p className="btn text-amber-400 text-base font-normal font-['Work Sans'] bg-amber-400 bg-opacity-20 rounded-[30px]">Rating: {rating}</p>
                            <button className="btn text-white text-lg font-medium font-['Work Sans'] bg-green-600 rounded-[30px]">View Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoadBook;