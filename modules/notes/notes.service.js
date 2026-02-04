import * as notesQueries from './db/queries.js';
import ApiError from '../../core/errors/ApiError.js';

export const createNote = async (title, content) => {
  
  return notesQueries.createNote(title, content);
};

export const getAllNotes = async () => {
  
  return notesQueries.findAllNotes();
};

const getNoteById = async (id) => {
  const note = await notesQueries.findNoteById(id);
  if (!note) {
    
    throw new ApiError(404, 'Note not found');
  }
  return note;
};

export const updateNote = async (id, title, content) => {
    
  await getNoteById(id); 
  return notesQueries.updateNote(id, title, content);
};

export const deleteNote = async (id) => {
  
  await getNoteById(id); 
  await notesQueries.deleteNote(id);
  return;
};
