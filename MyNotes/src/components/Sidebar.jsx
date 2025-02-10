import React from "react";
import "./Sidebar.css";

function Sidebar({ notes, onSelectNote, onNewNote }) {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Notes</h2>
        <button className="new-note-btn" onClick={onNewNote}>
          + New Note
        </button>
      </div>
      <div className="notes-list">
        {notes.length > 0 ? (
          notes.map((note) => (
            <button
              key={note.id}
              className="note-item"
              onClick={() => onSelectNote(note.id)}
            >
              {note.title.length > 20 ? note.title.substring(0, 20) + "..." : note.title}
            </button>
          ))
        ) : (
          <p className="empty-message">No notes found</p>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
