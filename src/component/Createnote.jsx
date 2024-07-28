import React, { useState } from "react";
import Button from '@mui/material/Button';

const Createnote = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setNote((previous) => {
      return {
        ...previous,
        [name]: value,
      };
    });
  };

  const addEvent = () => {
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };

  return (
    <div className="cmain-div">
      <form>
        <div className="title-div">
          <input
            type="text"
            name="title"
            placeholder="Title"
            autoComplete="off"
            value={note.title}
            onChange={inputEvent}
          />
          <textarea
            className="text-div"
            rows="4"
            cols="20"
            name="content"
            placeholder="Write a note..."
            value={note.content}
            onChange={inputEvent}
          ></textarea>
        </div>
        <div className="btn-div">
          <Button onClick={addEvent} variant="contained">➕</Button>
        </div>
      </form>
    </div>
  );
};

export default Createnote;
