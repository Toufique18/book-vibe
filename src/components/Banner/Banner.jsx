import BookImage from '../../assets/images/pngwing1.png'
const Banner = () => {
    return (
        <div className="container mx-auto lg:px-20 px-5 py-5">
            <div className="flex-1 lg:flex items-center justify-center gap-5 bg-cover bg-neutral-900 bg-opacity-5 rounded-3xl lg:p-12 p-3">
                <div className="lg:w-2/4">
                    <h1 className="text-neutral-900 text-5xl font-bold font-['Playfair Display'] leading-[60px]">Books to freshen up your bookshelf</h1>
                    <button className="btn bg-green-500 text-white mt-5">View The List</button>
                </div>
                <img  src={BookImage} alt="" />
            </div>

            
        </div>
    );
};

export default Banner;