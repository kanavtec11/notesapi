const express = require("express");
const { updateNote, createNote, deleteNote, getNotes } = require("../controller/noteController");
const notesRouter = express.Router();
const auth = require("../middlewares/auth");

notesRouter.get("/", auth, getNotes);

notesRouter.post("/", auth, createNote);

notesRouter.delete("/:id", auth, deleteNote);

notesRouter.put("/:id", auth, updateNote);

module.exports = notesRouter;