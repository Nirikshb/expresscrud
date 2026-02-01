import express from 'express';
import cors from 'cors';

import notesRouter from './modules/notes/index.js';


const app = express();


app.use(cors());
app.use(express.json());


app.use('/api/v1/notes', notesRouter);


export default app;
