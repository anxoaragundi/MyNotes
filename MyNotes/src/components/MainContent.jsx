import { useState } from 'react';
import './MainContent.css';

function MainContent() {
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');

  const handleSaveNote = () => {
    // Aquí podrías agregar la lógica para guardar la nota (puedes usar localStorage o un backend)
    console.log('Nota guardada:', { title, note });
    setTitle('');
    setNote('');
  };

  return (
    <div className="main-content">
      <div className="note-title-container">
        <input
          type="text"
          className="note-title"
          placeholder="Note title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="note-text-container">
        <textarea
          className="note-text"
          placeholder="Write your note here..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>
      <div className="save-button-container">
        <button className="save-button" onClick={handleSaveNote}>Save Note</button>
      </div>
    </div>
  );
}

export default MainContent;
