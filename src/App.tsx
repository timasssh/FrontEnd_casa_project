import React from 'react'

import Note from './models/Note.ts';
import LoaderComponent from './components/LoaderComponent.tsx';
import NoteComponent from './components/NoteComponent.tsx';

function App() {
  const [notes, setNotes] = React.useState([]);
  const [error, setError] = React.useState([]);

  React.useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}:${import.meta.env.VITE_API_PORT}`)
      .then(response => response.json())
      .then((data) => {
        setNotes(data);
        console.log(data);
      })
      .catch(error => {
        setError(error)
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>Notas</h1>
      {notes.length > 0 ? notes.map((note : Note) => <NoteComponent id={note.id} title={note.title} message={note.message} key={note.id}/>) : <LoaderComponent />}
    </>
  )
}

export default App
