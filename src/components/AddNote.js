import React, { useContext, useState } from 'react'
import {NoteContext} from '../context/CreateContext'
import { AlertContext } from '../context/CreateContext';

const AddNote = () => {
    const context1 = useContext(AlertContext);
    const { showAlert } = context1;
    const context = useContext(NoteContext);
    const {addNote} = context;
    const [note, setNote] = useState({title: "", description: "", tag:""})

    const handleClick = (e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
        showAlert("Note Added Successfullly", "success")
        setNote({title: "", description: "", tag:""})
       

    }
    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }
    
    return (

        <div className='container my-3'>
            <h1>Write a Note</h1>
            <form  className="form-floating mb-3">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title" value = {note.title} onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea className="form-control" id="description"  name="description" value = {note.description} rows="3" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="Tag" className="form-label">Tag</label>
                    <input className="form-control" id="tag"  name="tag" rows="3" value = {note.tag} onChange={onChange}></input>
                </div>
                <button disabled={note.title.length<3 || note.description.length<10} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </form>
            
        </div>
    )
}

export default AddNote
