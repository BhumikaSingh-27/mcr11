import React, { useState } from "react";
import "./modal.css";
import { useData } from "../../context/DataContext";

const Modal = () => {
  const { setIsModal, dispatch } = useData();
  const [input, setInput] = useState({
    title: "",
    year: "",
    genre: [],
    rating: "",
    director: "",
    cast: [],
    summary: "",
    imageURL: "",
  });
  return (
    <div className="modalContainer">
      <div className="modalContent">
        <div className="displayFlexJust">
          <h2>Add a Movie</h2>{" "}
          <button onClick={() => setIsModal(false)}>X</button>
        </div>
        <div>
          <p>Title</p>
          <input
            type="text"
            placeholder="enter title"
            className="smallInput"
            value={input.title}
            onChange={(e) => setInput({ ...input, title: e.target.value })}
          />
        </div>
        <div>
          <p>Summary</p>
          <textarea
            className="smallInput"
            value={input.summary}
            onChange={(e) => setInput({ ...input, summary: e.target.value })}
          ></textarea>
        </div>
        <div>
          <p>rating</p>
          <input
            type="text"
            className="smallInput"
            placeholder="enter rating"
            value={input.rating}
            onChange={(e) => setInput({ ...input, rating: e.target.value })}
          />
        </div>
        <div>
          <p>year</p>
          <input
            type="text"
            className="smallInput"
            placeholder="enter year"
            value={input.year}
            onChange={(e) => setInput({ ...input, year: e.target.value })}
          />
        </div>
        <div>
          <p>genre</p>
          <input
            type="text"
            className="smallInput"
            placeholder="enter genre"
            value={input.genre}
            onChange={(e) => setInput({ ...input, genre: e.target.value })}
          />
        </div>
        <div>
          <p>cast</p>
          <input
            type="text"
            className="smallInput"
            placeholder="enter cast"
            value={input.cast}
            onChange={(e) => setInput({ ...input, cast: e.target.value })}
          />
        </div>
        <div>
          <p>writer</p>
          <input
            type="text"
            className="smallInput"
            placeholder="enter writer"
            value={input.writer}
            onChange={(e) => setInput({ ...input, writer: e.target.value })}
          />
        </div>
        <div>
          <p>director</p>
          <input
            type="text"
            className="smallInput"
            placeholder="enter director"
            value={input.director}
            onChange={(e) => setInput({ ...input, director: e.target.value })}
          />
        </div>
        <div>
          <p>image</p>
          <input
            type="text"
            className="smallInput"
            placeholder="enter image url"
            value={input.imageURL}
            onChange={(e) => setInput({ ...input, imageURL: e.target.value })}
          />
        </div>
        <div>
          <button
            onClick={() => {
              dispatch({ type: "NEW", payload: input });
              setInput({
                title: "",
                year: "",
                genre: [],
                rating: "",
                director: "",
                cast: [],
                summary: "",
                imageURL: "",
              });
              setIsModal(false);
            }}
          >
            submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
