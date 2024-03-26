import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const { image, tags, bookName, author, category, rating } = book;
    return (
        <Link className="transition  hover:border-green-500">
            <div className="card bg-base-100 border border-neutral-900 border-opacity-20">
                <figure className="p-5 m-3 bg-zinc-100 rounded-2xl">
                    <img src={image} alt="Shoes" className="rounded-xl w-24 h-40" />
                </figure>
                <div className="card-body ">
                    <ul className="flex gap-3">
                        {book.tags.map((tag, index) => (
                            <li className="text-center rounded-[30px] bg-green-500 text-green-500 bg-opacity-5 text-base font-medium font-['Work Sans'] p-3" key={index}>{tag}</li>
                        ))}
                    </ul>
                    <h2 className="text-neutral-900 text-base font-bold font-['Playfair Display']">{bookName}</h2>
                    <p className="text-neutral-900 text-opacity-80 text-base font-medium font-['Work Sans']">by : {author}</p>
                    <hr className="border-dashed" />
                    <div className="flex items-center justify-between">
                        <p>{category}</p>
                        <div className="flex items-center gap-2">
                            <p>{rating} </p>
                            <FaRegStar />

                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;