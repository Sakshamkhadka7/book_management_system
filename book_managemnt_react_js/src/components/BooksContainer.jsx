import React from "react";
import { useSelector } from "react-redux";

const BooksContainer = () => {
  const books = useSelector((store) => store.book.bookItems);

  return (
    <div className="container mt-12 flex flex-wrap gap-6 justify-center">
      {books.map((book, index) => (
        <div
          className="w-72 bg-white shadow-lg rounded-xl p-5 border border-gray-200 hover:shadow-xl  transition-shadow duration-300"
          key={index}
        >
          <h1 className="text-xl font-semibold text-gray-900 mb-2">Title:{book.title}</h1>
          <p className="text-gray-600 text-sm mb-3">{book.desc}</p>
          <h3 className="text-md font-medium text-blue-700 mb-1">Author{book.author}</h3>
          <h5 className="text-lg font-bold text-green-700">NPR{book.price}</h5>
        </div>
      ))}
    </div>
  );
};

export default BooksContainer;
