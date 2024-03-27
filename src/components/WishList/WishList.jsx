import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBookList } from "../../utility/localStorage";
import LoadBook from "../LoadBook/LoadBook";
const WishList = () => {
    const books = useLoaderData();

    const [bookStored, setBookStored ] = useState([])

    useEffect( ()=>{
        const storedBookId = getStoredBookList();
        if(books.length > 0){
            const storedBook = books.filter(book => storedBookId.wishlist.includes(book.id))
            console.log(storedBook)
            setBookStored(storedBook)
        }
    } ,[])
    return (
        <div>
            {
                bookStored.map(book => <LoadBook key={book.id} book={book}></LoadBook>)
            }
        </div>
    );
};

export default WishList;