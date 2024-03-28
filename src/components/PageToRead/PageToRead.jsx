import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { getStoredBookList } from "../../utility/localStorage";
import BarCharts from "../BarCharts/BarCharts";

const PageToRead = () => {
    const books = useLoaderData();

    const [bookStored, setBookStored ] = useState([])

    useEffect( ()=>{
        const storedBookId = getStoredBookList();
        if(books.length > 0){
            const storedBook = books.filter(book => storedBookId.readList.includes(book.id))
            console.log(storedBook)
            setBookStored(storedBook)
        }
    } ,[])
    return (
        <div className="container mx-auto lg:px-20 px-5 py-5">
            {/* {
                bookStored.map(book => <BarCharts key={book.id} book={book}></BarCharts>)
            } */}
            <BarCharts books={bookStored} />
        </div>
    );
};

export default PageToRead;


