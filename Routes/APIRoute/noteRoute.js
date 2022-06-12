const router = require('express').Router();
const { createNewNote, deleteNote } = require('../../lib/notes');
let { savedNotes } = require('../../db/db');

router.get('/notes', (req, res) => {
  let results = savedNotes;
  res.json(results);
});

router.post('/notes', (req, res) => {
  if(savedNotes){
  req.body.id = savedNotes.length.toString();
  } else 
  {req.body.id = 0}
  res.json(createNewNote(req.body, savedNotes));
});

router.delete('/notes/:id', async (req, res) => {
  const { id } = req.params
  savedNotes = await deleteNote(id, savedNotes);
  res.json(savedNotes);
});

module.exports = router;