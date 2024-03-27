import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ListedBooks = () => {
  // Retrieve stored data from local storage
  const storedData = JSON.parse(localStorage.getItem("bookDetails"));

  return (
    <div className="container mx-auto">
      <h1 className="text-xl font-bold mt-10 mb-8 p-6 bg-gray-100 text-center rounded-xl">
        Books
      </h1>

      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        {/* Tab-1 (Read Books) */}
        <TabPanel>
          <div>
            {/* Check if there's stored data */}
            {storedData && storedData.length > 0 ? (
              // Render stored data
              storedData.map((book, index) => (
                <div key={index}>
                  <div className="h-[300px] bg-base-200 mt-8 rounded-2xl">
                    <div className="flex flex-col md:flex-row lg:flex-row justify-start gap-32 p-8">
                        <img src={book.image} className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                        <h1 className="text-base font-bold">{book.bookName}</h1>
                        <p className="py-6">By: {book.author}</p>
                        <div className="flex gap-8">
                            <p>Tag</p>
                            <p className="text-[#23BE0A] bg-[#e5f1e4] px-2 rounded-3xl">#{book.tags[0]}</p>
                            <p className="text-[#23BE0A] bg-[#e5f1e4] px-2 rounded-3xl">#{book.tags[1]}</p>
                            <div className="flex">
                                <img src="https://i.postimg.cc/LsGB0cbv/Frame.png" alt="" />
                                <p>Year of Publishing :</p>
                                <p>{book.yearOfPublishing}</p>
                            </div>
                        </div>
                        <div className="mt-3 mb-3 text-[#969191] flex gap-8">
                            <div className="flex gap-1 items-center">
                                <img src="https://i.postimg.cc/W3PHwxLk/Frame-1.png" alt="" />
                                <p>Publisher: {book.publisher}</p>
                            </div>
                            <div className="flex gap-1 items-center">
                                <img src="https://i.postimg.cc/BvvT9gTV/Frame-2.png" alt="" />
                                <p>Page {book.totalPages}</p>
                            </div>
                        </div>
                        <hr />
                        <div className="flex gap-4 mt-4">
                            <p className="text-[#328EFF] bg-[#d4e1f0] px-3 rounded-full">Category: {book.category}</p>
                            <p className="text-[#FFAC33] bg-[#e7e0d4] px-3 rounded-full">Rating: {book.rating}</p>
                            <p className=" bg-[#23BE0A] text-white px-5 rounded-full text-lg font-medium">View Details</p>
                        </div>
                        </div>
                    </div>
                    </div>
                  {/* Add more details as needed */}
                </div>
              ))
            ) : (
              // Show message if no data is available
              <p>No books added yet.</p>
            )}
          </div>
        </TabPanel>

        {/* Tab-2 (Wishlist Books) */}
        <TabPanel>
          <h2>Tab 2</h2>
          {/* Add content for Wishlist Books tab */}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
