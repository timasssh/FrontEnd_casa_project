import type React from "react"
import type Note from "../models/Note"
import style from "./styles/NoteComponent.module.css"

const NoteComponent : React.FC<Note> = (note : Note) => {
    return <div className={style.note}>
        <h4>{note.title}</h4>
        {note.id ? <small>id: {note.id}</small> : ""}
        <p>{note.message}</p>
    </div>
}

export default NoteComponent
