import React, { useContext, useEffect, useRef, useState } from 'react'
import { NoteContext, AlertContext } from '../context/CreateContext';
import Noteitem from './Noteitem';
import AddNote from './AddNote';
import { useNavigate } from 'react-router';

const Notes = () => {
    const context1 = useContext(AlertContext);
    const { showAlert } = context1;
    const context = useContext(NoteContext);
    const { notes, setNotes, getNotes, editNote, deleteNote } = context;
    const navigate = useNavigate();
    
    const ref = useRef(null)
    const refClose = useRef(null)
    const ref2 = useRef(null)
    const refClose2 = useRef(null)
    const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" })
    const [title, settitle] = useState("")
    const [noteid, curNoteid] = useState()
    const [sort,setSort] = useState("Latest")
    const [view, SetView] = useState("List")

    
    
    useEffect(() => {
        if (localStorage.getItem('token')) {
            getNotes(sort);
        }
        else {
            navigate("/login");
        }
    },[notes,sort])


    useEffect(() => {
        setSort(localStorage.getItem("order"));
        SetView(localStorage.getItem("view"));
    },[]);


    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
    }
    const deletecurnote = (currentNote) => {
        ref2.current.click();
        settitle(currentNote.title)
        curNoteid(currentNote._id)
    }


    const handleUpdatenote = (e) => {

        editNote(note.id, note.etitle, note.edescription, note.etag);
        showAlert("Note Edited Successfullly", "success")

        refClose.current.click();

    }
    const handleClickdelete = () => {
        deleteNote(noteid)
        showAlert("Note Deleted Successfullly", "success")
        refClose2.current.click();
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    const sortNotes = (e) => {
        localStorage.setItem("order", e.target.id)
        setSort(e.target.id)
    }
    const changeView = (e) => {
        localStorage.setItem("view", e.target.id)
        SetView(e.target.id)
    }


    return (

        <>
            <AddNote />
            <div className="container">
                {/*modal 1 for edit note*/}
                <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Launch demo modal
                </button>
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">

                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form className="my-3">
                                    <div className="mb-3">
                                        <label htmlFor="title" className="form-label">Title</label>
                                        <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={onChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="description" className="form-label">Description</label>
                                        <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="tag" className="form-label">Tag</label>
                                        <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange} />
                                    </div>

                                </form>
                            </div>
                            <div className="modal-footer">
                                <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button onClick={handleUpdatenote} type="button" className="btn btn-primary" disabled={note.etitle.length < 3 || note.edescription.length < 10}>Update Note</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*modal 2 for delete note*/}
                <button ref={ref2} type="button" className="btn btn-primary  d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Launch demo modal
                </button>


                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Detele Note</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body" name="curtitle">
                                Are you sure you want to delete this note<br></br>
                                <strong>Title</strong> - {title.slice(0,40)+"..."}
                            </div>
                            <div className="modal-footer">
                                <button ref={refClose2} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button onClick={handleClickdelete} type="button" className="btn btn-primary">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
                    {notes.length != 0 && <div className="row my-3"><h2>Your Notes</h2>
                    <div className="d-flex flex-row-reverse">
                        <button className="btn btn-primary dropdown-toggle mx-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">Sort Notes: {sort}</button>
                        <button className= {`btn btn-outline-primary ${ view === 'Grid' ? "active" : ""} fa-solid fa-grip-vertical px-3`}  id = "Grid" onClick = {changeView} type="button"></button>
                        <button className= {`btn btn-outline-primary ${ view === 'List' ? "active" : ""} fa-solid fa-list mx-3`}  id = "List" onClick = {changeView} type="button"></button>
                            <ul className="dropdown-menu">
                                <li role="button" className='dropdown-item' id = "Latest" onClick={sortNotes}>Latest</li>
                                <li role="button" className='dropdown-item' id = "Oldest" onClick={sortNotes}>Oldest</li>
                            </ul>
                    </div>
                    </div>}
                        
                    <div className={`${ view === 'Grid' ? "row row-cols-3" : "col"}`}>
                        {notes.map((note) => {
                            return <Noteitem key={note._id} updateNote={updateNote} deletecurnote={deletecurnote} note={note} view ={view}/>
                        })}
                    </div>         
                              
                
                </div>
                
        </>
    )
}


export default Notes