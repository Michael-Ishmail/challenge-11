const fs = require('fs')
const path = require('path')

function newNote(body, savedNotes) {
    const note = body
    savedNotes.push(note)
    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify({ savedNotes }, null, 2)
    )
    return note
}

function deleteNote(id, notes) {
    let savedNotes = notes.filter(el => {
        if (el.id == id) {
            return false
        } else {
            return true
        }
    })


let index = 0
savedNotes.forEach(note => {
    note.id = index
    index += 1
})

fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({savedNotes}, null, 2)
)
return savedNotes
}

module.exports = {
    newNote,
    deleteNote
}