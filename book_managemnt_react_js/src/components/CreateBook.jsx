import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setBook } from "../store/BookSlice";

const CreateBook = ({setUpload}) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();

  const bookSubmit = (e) => {
    e.preventDefault();
   
    dispatch(setBook({
        title,desc,author,price
    }));
     
    setUpload(false)

  };

  return (
    <div className="container border h-80 w-80 p-10 rounded-xl m-auto">
      <h1 className="mb-2 ml-16">Create a Book</h1>
      <form action="" className="text-center" onSubmit={bookSubmit}>
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className="p-1 mt-2 border border-default-medium text-sm rounded focus:border-brand shadow-xs"
        />
        <input
          type="text"
          placeholder="description"
          onChange={(e) => {
            setDesc(e.target.value);
          }}
          className="p-1 mt-2 border border-default-medium text-sm rounded focus:border-brand shadow-xs"
        />
        <input
          type="text"
          placeholder="author"
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
          className="p-1 mt-2 border border-default-medium text-sm rounded focus:border-brand shadow-xs"
        />
        <input
          type="text"
          placeholder="price"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          className="p-1 mt-2 border border-default-medium text-sm rounded focus:border-brand shadow-xs"
        />
        <button className="border p-2 mt-5 rounded-xl ml-1">Create</button>
      </form>
    </div>
  );
};

export default CreateBook;
