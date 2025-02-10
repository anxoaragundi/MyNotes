import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

  // Crear una nueva nota
  const handleNewNote = () => {
    const newNote = { id: Date.now(), title: "New Note", content: "" };
    setNotes([newNote, ...notes]);
    setSelectedNote(newNote.id);
  };

  // Seleccionar una nota
  const handleSelectNote = (noteId) => {
    setSelectedNote(noteId);
  };

  return (
    <div>
      <Navbar />
      <Sidebar notes={notes} onSelectNote={handleSelectNote} onNewNote={handleNewNote} />
      <MainContent note={notes.find((note) => note.id === selectedNote)} />
    </div>
  );
}

export default App;
