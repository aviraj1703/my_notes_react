import React, { useState } from "react";

const CreateNote = (props) => {
  const [note, setnote] = useState({
    title: "",
    content: "",
  });
  const [show, setShow] = useState(false);

  const InputEvent = (e) => {
    const { name, value } = e.target;
    setnote((pre_val) => {
      return {
        ...pre_val,
        [name]: value,
      };
    });
  };
  const AddEvent = () => {
    props.pass_note(note);
    setnote({
      title: "",
      content: "",
    });
  };
  return (
    <>
      <div className="main_note">
        <div className="form" style={{ height: show ? "90%" : "fit-content" }}>
          <input
            type="text"
            placeholder="Title"
            onClick={() => setShow(true)}
            onDoubleClick={() => setShow(false)}
            autoComplete="off"
            onChange={InputEvent}
            value={note.title}
            name="title"
          />
          <textarea
            rows=""
            column=""
            placeholder="Write your note here..."
            onDoubleClick={() => setShow(false)}
            onChange={InputEvent}
            value={note.content}
            name="content"
            style={{ display: show ? "flex" : "none" }}
          />
          <button
            className="btn1"
            onClick={AddEvent}
            style={{ display: show ? "flex" : "none" }}
          >
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateNote;
