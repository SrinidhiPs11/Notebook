import React from 'react'

const Noteitem = (props) => {
    const { note, updateNote,deletecurnote } = props;
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        //<div className="col-md-5">
        <div className="container">
            <div className="card my-2">
                <div className="card-body">
                    <h5 className="card-title">Title : {capitalize(note.title)}</h5>
                    <p className="card-text">Description : {capitalize(note.description)}</p>
                    <p className="card-text">Tag : {note.tag === "" ? "General" : note.tag}</p>
                    <i className="fa-solid fa-pen-to-square" onClick={() => { updateNote(note) }}></i>
                    <i className="far fa-trash-alt mx-4" onClick={()=>{ deletecurnote(note)}}></i>
                </div>
                
        </div>
        </div>



    )
}

export default Noteitem