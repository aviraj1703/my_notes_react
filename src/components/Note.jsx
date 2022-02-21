import React from "react";

const Note = (props) => {
  const Delete_note = () => {
    props.deleteItem(props.id);
  };
  return (
    <>
      <div className="note">
        <h3>{props.title}</h3>
        <p>{props.content}</p>
        <button className="btn2" onClick={Delete_note}>
          <i className="fa-solid fa-eraser"></i>
        </button>
      </div>
    </>
  );
};

export default Note;
