import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { saveBookList, getStoredBookList } from "../../utility/localStorage";

const BookDetails = () => {
    const books = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const book = books.find(book => book.id === idInt)

    
    const handleReadBook = () => {
        const isAdded = saveBookList("readList", idInt);
        if (isAdded) {
            toast.success("This book has been added to your Read list.");
        } else {
            toast.warn("You have already added this book to your Read list.");
        }
    }

    const handleAddToWishlist = () => {
        const storedBookLists = getStoredBookList();
        if (storedBookLists.wishlist.includes(idInt)) {
            toast.warn("You have already added this book to your Wishlist.");
        } else if (storedBookLists.readList.includes(idInt)) {
            toast.warn("You have already added this book to your Read list. It will not be added to Wishlist.");
        } else {
            saveBookList("wishlist", idInt);
            toast.success("This book has been added to your Wishlist.");
        }
    };

    return (
        <div className="container mx-auto lg:px-20 px-5 py-5">
            
            <div className="flex-1 lg:flex justify-center">
                <div className="p-10 bg-zinc-100 rounded-2xl lg:w-2/5">
                    <img className="w-72 h-96 mx-auto" src={book.image} alt="Album" />
                </div>
                <div className="lg:w-3/5 px-10">
                    <h2 className="text-neutral-900 text-3xl font-bold font-['Playfair Display']">{book.bookName}</h2>
                    <p className="text-neutral-900 text-opacity-80 text-xl font-medium font-['Work Sans'] py-2">by : {book.author.name}</p>
                    <hr />
                    <p className="text-neutral-900 text-opacity-80 text-xl font-medium font-['Work Sans'] py-2">{book.category}</p>
                    <hr />
                    <p className="text-neutral-900 text-opacity-70 text-base font-normal font-['Work Sans'] leading-relaxed"><span className="text-neutral-900 text-base font-bold font-['Work Sans'] leading-relaxed">Review: </span>{book.review}</p>
                    <div className="flex gap-2 items-center">
                        <p className="text-neutral-900 text-base font-bold font-['Work Sans'] leading-relaxed">Tags</p>
                        <ul className="flex gap-3">
                            {book.tags.map((tag, index) => (
                                <li className="text-center rounded-[30px] bg-green-500 text-green-500 bg-opacity-5 text-base font-medium font-['Work Sans'] p-3" key={index}>#{tag}</li>
                            ))}
                        </ul>
                    </div>
                    <hr />
                    <table>
                        <tr>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <td className="pr-4 py-2 text-neutral-900 text-opacity-70 text-base font-normal font-['Work Sans'] leading-relaxed">Number of Pages:</td>
                            <td className="px-4 py-2 text-neutral-900 text-base font-semibold font-['Work Sans'] leading-relaxed">{book.totalPages}</td>
                        </tr>
                        <tr>
                            <td className="pr-4 py-2 text-neutral-900 text-opacity-70 text-base font-normal font-['Work Sans'] leading-relaxed">Publisher:</td>
                            <td className="px-4 py-2 text-neutral-900 text-base font-semibold font-['Work Sans'] leading-relaxed">{book.publisher}</td>
                        </tr>
                        <tr>
                            <td className="pr-4 py-2 text-neutral-900 text-opacity-70 text-base font-normal font-['Work Sans'] leading-relaxed">Year of Publishing:</td>
                            <td className="px-4 py-2 text-neutral-900 text-base font-semibold font-['Work Sans'] leading-relaxed">{book.yearOfPublishing}</td>
                        </tr>
                        <tr>
                            <td className="pr-4 py-2 text-neutral-900 text-opacity-70 text-base font-normal font-['Work Sans'] leading-relaxed">Rating:</td>
                            <td className="px-4 py-2 text-neutral-900 text-base font-semibold font-['Work Sans'] leading-relaxed">{book.rating}</td>
                        </tr>
                    </table>
                    <div className="flex gap-5">
                        <button onClick={handleReadBook} className="btn rounded-lg border border-neutral-900 border-opacity-30 text-black font-bold">Read</button>
                        <button onClick={handleAddToWishlist} className="btn bg-teal-400 rounded-lg text-white font-bold">Wishlist</button>
                    </div>

                </div>
            </div>
            <ToastContainer /> 
        </div>
    );
};

export default BookDetails;


