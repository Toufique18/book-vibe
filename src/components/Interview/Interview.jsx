
const Interview = ({ interview }) => {
    const { id, image, tags, bookName, author, category, authorInterviews } = interview;

    return (
        <div>
            <div className="mt-3 border-2 rounded-2xl p-3">

                <div className="flex-1 lg:flex justify-center">
                    <div className="p-10 bg-zinc-100 rounded-2xl lg:w-2/5">
                        <img className="w-72 h-96 mx-auto" src={author.auImage} alt="Album" />
                    </div>
                    <div className="lg:w-3/5 px-10">
                        <h2 className="text-neutral-900 text-3xl font-bold font-['Playfair Display']">{author.name}</h2>
                        <p className="text-neutral-900 text-opacity-80 text-xl font-medium font-['Work Sans'] py-2">{bookName}</p>
                        <hr />
                        <p className="text-neutral-900 text-opacity-70 text-base font-normal font-['Work Sans'] leading-relaxed"><span className="text-neutral-900 text-base font-bold font-['Work Sans'] leading-relaxed">Interview: </span>{authorInterviews}</p>
                        <div className="flex gap-2 items-center">
                            <p className="text-neutral-900 text-base font-bold font-['Work Sans'] leading-relaxed">Tags</p>
                            <ul className="flex gap-3">
                                {interview.tags.map((tag, index) => (
                                    <li className="text-center rounded-[30px] bg-green-500 text-green-500 bg-opacity-5 text-base font-medium font-['Work Sans'] p-3" key={index}>#{tag}</li>
                                ))}
                            </ul>
                        </div>
                        <hr />
                        <div>
                            <p className="text-neutral-900 text-opacity-70 text-base font-normal font-['Work Sans'] leading-relaxed">Total Publications: {author.totalPublications}</p>
                        </div>
                        <div>
                            <p className="text-neutral-900 text-base font-bold font-['Work Sans'] leading-relaxed">Achievements:</p>
                            <ol className="flex-1 gap-3 ml-3">
                                {interview.author.achievements.map((tag, index) => (
                                    <li className="text-neutral-900 text-opacity-70 text-base font-normal font-['Work Sans'] leading-relaxed3" key={index}>{tag}</li>
                                ))}
                            </ol>

                        </div>
                        <hr />
                        <div>
                            <p className="text-neutral-900 text-base font-bold font-['Work Sans'] leading-relaxed">Popular Books:</p>
                            <ol className="flex-1 gap-3 ml-3">
                                {interview.author.otherBooks.map((tag, index) => (
                                    <li className="text-neutral-900 text-opacity-70 text-base font-normal font-['Work Sans'] leading-relaxed3" key={index}>{tag}</li>
                                ))}
                            </ol>

                        </div>
                        <hr />
                        <div>
                            <p className="text-neutral-900 text-opacity-70 text-base font-normal font-['Work Sans'] leading-relaxed"><span className="text-neutral-900 text-base font-bold font-['Work Sans'] leading-relaxed">Date of Birth:  </span> {author.birthDate}</p>
                            <p className="text-neutral-900 text-opacity-70 text-base font-normal font-['Work Sans'] leading-relaxed"><span className="text-neutral-900 text-base font-bold font-['Work Sans'] leading-relaxed">Date of Death:  </span> {author.deathDate}</p>
                        </div>




                    </div>
                </div>
            </div>
        </div>
    );
};

export default Interview;