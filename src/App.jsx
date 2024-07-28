import React, { useState } from "react";
import "./index.css";
import Header from "./component/Header";
import Createnote from "./component/Createnote";
import Footer from "./component/Footer";
import Note from "./component/Note";

const App = () => {
  const [show, setShow] = useState([]);

  const addNote = (note) => {
    setShow((prev) => {
      return [...prev, note];
    });
  };

  const onDelete = (id) => {
    setShow((prev) => {
      return prev.filter((item, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <Header />
      <Createnote passNote={addNote} />
      <div className="notes-container">
        {show.map((val, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={val.title}
              content={val.content}
              deleteNote={onDelete}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default App;
