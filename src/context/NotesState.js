import { useState } from "react";
import {NoteContext} from "./NoteContext";

const NoteState = (props) => {
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)
  const host = "http://localhost:5000";

  //function to fetch notes
  const getNotes = async () => {
    //api call for fetching notes
    const response = await fetch(`http://localhost:5000/api/notes/fetchnotes`, {
      method: "GET",
      headers: {
        "Content-Type": 'application/json',
        "token": localStorage.getItem('token')
      }
    });
    const json1 = await response.json()
    setNotes(json1)
    
  }

  const addNote = async (title, description, tag) => {
    // TODO: API Call
    // API Call 
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json',
        "token": localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag })
    });
    const note = await response.json()
    setNotes(notes.concat(note))

  }
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": 'application/json',
        "token": localStorage.getItem('token')
      }
    });
    
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes);

  }
  const editNote = async (id, title, description, tag) => {
    // API Call 
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": 'application/json',
        "token": localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag })
    });
   
   

    // Logic to edit in client
    let newNotes = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < notes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  }
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;

