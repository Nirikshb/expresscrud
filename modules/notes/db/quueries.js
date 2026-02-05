
export const createNote = async (title, content) => {
  const [result] = 
//   await 
    'INSERT INTO notes (title, content) VALUES (?, ?)'
    // [title, content]
  return { id: result.insertId, title, content };
};

export const findAllNotes = async () => {
  const [rows] = await query('SELECT * FROM notes ORDER BY created_at DESC');
  return rows;
};

export const findNoteById = async (id) => {
  const [rows] = await query('SELECT * FROM notes WHERE id = ?', [id]);
  return rows[0];
};

export const updateNote = async (id, title, content) => {
  await query(
    'UPDATE notes SET title = ?, content = ? WHERE id = ?',
    [title, content, id]
  );
  return { id, title, content };
};

export const deleteNote = async (id) => {
  await query('DELETE FROM notes WHERE id = ?', [id]);
};
