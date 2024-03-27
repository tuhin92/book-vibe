import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const book = books.find((book) => book.id === idInt);

  const handleReadButtonClick = () => {
    // Convert book object to JSON string
    const bookJSON = JSON.stringify(book);
    
    // Check if data already exists in local storage
    let existingData = localStorage.getItem("bookDetails");
    if(existingData) {
      // If data exists, parse the existing data
      existingData = JSON.parse(existingData);
      
      // Check if the current book is already in the stored data
      const isAlreadyStored = existingData.some(item => item.id === book.id);
      
      if(isAlreadyStored) {
        // If the current book is already stored, show a message or handle it as needed
        toast.warning("This book is already in your list!");
        return; // Exit the function
      }
      
      // If the current book is not already stored, add it to the existing data
      existingData.push(book);
      
      // Store the updated data back in local storage
      localStorage.setItem("bookDetails", JSON.stringify(existingData));
    } else {
      // If no data exists, create a new array with the current book and store it in local storage
      localStorage.setItem("bookDetails", JSON.stringify([book]));
    }
    
    // Show success toast message
    toast.success("Book details stored successfully!");
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="hero rounded-xl bg-base-200 h-[650px]">
        <div className="hero-content flex-col lg:flex-row gap-12">
          <img src={book.image} className="w-[460px] h-[560px] rounded-lg" alt={book.bookName} />
          <div>
            <h1 className="text-4xl font-bold">{book.bookName}</h1>
            <p className="py-6">By: {book.author}</p>
            <hr />
            <p className="py-4 text-sm font-medium">{book.category}</p>
            <hr />
            <p className="py-4 text-sm">
              <span className="font-bold">Review : </span>
              {book.review}
            </p>
            <div className="flex justify-start py-6 gap-6 text-base">
              <span className="font-bold">Tag</span>
              <span className="text-[#23BE0A] bg-[#e1ebdf] px-3 rounded-full">
                #{book.tags[0]}
              </span>
              <span className="text-[#23BE0A] bg-[#e1ebdf] px-3 rounded-full">
                #{book.tags[1]}
              </span>
            </div>
            <hr />
            <div className="py-4">
              <table className="table">
                <tbody className="text-sm">
                  {/* row 1 */}
                  <tr>
                    <td>Number of Pages:</td>
                    <td className="font-semibold">{book.totalPages}</td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <td>Publisher:</td>
                    <td className="font-semibold">{book.publisher}</td>
                  </tr>
                  {/* row 3 */}
                  <tr>
                    <td>Year of Publishing:</td>
                    <td className="font-semibold">{book.yearOfPublishing}</td>
                  </tr>
                  {/* row 4 */}
                  <tr>
                    <td>Rating:</td>
                    <td className="font-semibold">{book.rating}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex gap-4">
              <button className="btn btn-outline btn-secondary px-6" onClick={handleReadButtonClick}>
                Read
              </button>
              <button className="btn btn-active btn-accent px-6 text-sm font-semibold">Wishlist</button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BookDetails;
