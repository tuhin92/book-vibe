const Book = ({ book }) => {
  const { bookName, tags, author, category, rating} = book;
  return (
    <div>
      <div className="card w-96 bg-base-100 border p-6">
        <figure className="bg-gray-100 rounded-xl">
          <img className="p-8"
            src={book.image}
            alt="image"
          />
        </figure>
        <div className="card-actions mt-4">
            <div className="badge badge-outline  text-[#23BE0A] p-3">{book.tags[0]}</div>
            <div className="badge badge-outline text-[#23BE0A] p-3">{book.tags[1]}</div>
          </div>
        <div className="">
          <h2 className="card-title mt-4 text-base font-bold">
            {book.bookName}
          </h2>
          <p className="mt-4 mb-4 text-xs font-medium text-[#131313]">By : {book.author}</p>
          <hr />
          <div className="flex justify-between mt-4">
            <p className="text-xs font-medium">{book.category}</p>
            <div className="flex items-center gap-2 text-xs font-medium">
                <p>{book.rating}</p>
                <img className="h-4 w-4 mb-1" src="https://i.postimg.cc/Xqqr4kQs/Vector.png" alt="star" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
