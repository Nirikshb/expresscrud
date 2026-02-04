import { validationResult } from 'express-validator';
import * as notesService from './notes.service.js';

export const createNote = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next({ errors: errors.array() });
  }

  try {
    const { title, content } = req.body;
    const note = await notesService.createNote(title, content);
    res.status(201).json({ success: true, data: note });
  } catch (error) {
    next(error);
  }
};

export const getAllNotes = async (req, res, next) => {
  try {
    const notes = await notesService.getAllNotes();
    res.status(200).json({ success: true, data: notes });
    console.log(notes,'NOTES');
    
  } catch (error) {
    next(error);
  }
};

export const updateNote = async (req, res, next) => {
  const errors = validationResult(req);
  console.log(req,'req');
  if (!errors.isEmpty()) {
    return next({ errors: errors.array() });
  }
  
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    console.log({title, content},'{title, content}');
    const updatedNote = await notesService.updateNote(id, title, content);
    res.status(200).json({ success: true, data: updatedNote });
  } catch (error) {
    next(error);
  }
};

export const deleteNote = async (req, res, next) => {
  try {
    const { id } = req.params;
    
    await notesService.deleteNote(id);
    res.status(200).json({ success: true, message: 'Note deleted successfully' });
  } catch (error) {
    next(error);
  }
};
