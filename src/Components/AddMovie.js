import React, { useState } from "react";

const AddMovie = ({AddToMovie}) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [rate, setRate] = useState("");

  const handleAddMovie = () => {
    console.log(title,"this is our title")
    AddToMovie({
      title: title,
      rate: rate,
      imgUrl: imgUrl,
      date: date,
      description: description,
    });
  };

  return (
    <div>
      <h3>Title</h3>
      <input
        placeholder=""
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <h3>Description</h3>
      <input
        placeholder=""
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <h3>Image Url</h3>
      <input
        placeholder=""
        onChange={(e) => {
          setImgUrl(e.target.value);
        }}
      />
      <h3>Rate</h3>
      <input
        placeholder=""
        onChange={(e) => {
          setRate(e.target.value);
        }}
      />
      <h3>Date</h3>
      <input
        placeholder=""
        onChange={(e) => {
          setDate(e.target.value);
        }}
      /><br/>
      <button onClick={ () =>handleAddMovie()}> Add </button>
    </div>
  );
};

export default AddMovie;
