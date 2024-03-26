const Book = ({book}) => {
    const {bookName} = book;
    return (
        <div>
            <h1>Book Name: {bookName}</h1>
        </div>
    );
};

export default Book;