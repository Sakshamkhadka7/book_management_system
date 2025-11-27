import React, { useState } from 'react'
import BooksContainer from './BooksContainer'
import CreateBook from './CreateBook'

const UploadBook = () => {

  const [upload, setUpload] = useState(false);

  const handleBook = () => {
    setUpload(true);
  };

  return (
    <>
      {/* Upload Section */}
      <div className="container w-[70%] mx-auto mt-12 p-6 
                      bg-white shadow-lg rounded-2xl border border-gray-200 
                      flex items-center justify-between">

        <h1 className="text-lg font-semibold text-gray-700">
          Click the button below to create and upload a new book
        </h1>

        <button
          onClick={handleBook}
          className="bg-amber-600 text-white px-5 py-3 rounded-xl 
                     font-semibold text-sm shadow-md
                     hover:bg-amber-700 hover:shadow-lg transition-all"
        >
          Upload Book
        </button>

      </div>

      {/* All Books Section */}
      <div className="mt-12">
        <h1 className="text-center text-3xl font-bold text-gray-800 mb-6">
          All Books
        </h1>

        <BooksContainer />

        {/* Create Book Form Modal */}
        {upload && <CreateBook setUpload={setUpload} />}
      </div>
    </>
  );
};

export default UploadBook;
