import React, { useState } from "react";
import Header from "./components/Header";
import CreateNote from "./components/CreateNote";
import Note from "./components/Note";

const Apps = () => {
  const [AddItems, setItems] = useState([]);
  const [cnt, setCnt] = useState(false);
  const [count, setCount] = useState(0);

  const AddNote = (note) => {
    if (note.title === "" && note.content === "") {
      alert("Note is empty :(");
      return;
    }
    setItems((pre_val) => {
      return [...pre_val, note];
    });
    setCnt(true);
    setCount(count + 1);
  };
  const onDelete = (id) => {
    setItems((pv) =>
      pv.filter((cd, index) => {
        return index !== id;
      })
    );
    setCount(count - 1);
    if (count === 1) {
      setCnt(false);
      setCount(0);
    }
  };
  const Remove_Items = () => {
    setItems([]);
    setCount(0);
    setCnt(false);
  };
  return (
    <>
      <Header />
      <CreateNote pass_note={AddNote} />
      <div className="contain">
        <div className="rmv" style={{ display: cnt ? "flex" : "none" }}>
          <button type="submit" className="btn3" onClick={Remove_Items}>
            <i className="fa-solid fa-calendar-xmark"></i>
          </button>
        </div>
        <div className="container">
          {AddItems.map((val, index) => {
            return (
              <Note
                key={index}
                id={index}
                title={val.title}
                content={val.content}
                deleteItem={onDelete}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Apps;
