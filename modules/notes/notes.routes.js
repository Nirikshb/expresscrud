import { Router } from 'express';
import * as notesController from './notes.controller.js';
import { noteValidator } from './notes.validation.js';

const router = Router();

router.route('/')
  .post(noteValidator, notesController.createNote)
  .get(notesController.getAllNotes);

router.route('/:id')
  .put(noteValidator, notesController.updateNote)
  .delete(notesController.deleteNote);

export default router;
