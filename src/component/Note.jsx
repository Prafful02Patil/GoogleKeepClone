import React from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Note = (props) => {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <DeleteOutlineIcon onClick={() => props.deleteNote(props.id)} />
    </div>
  );
}

export default Note;
