import { Action } from '../../types/reduxTypes'
import { Note, NoteID, NoteUpdates } from '../../types/noteTypes'

enum Actions {
    create = 'notes/create',
    delete = 'notes/delete',
    update = 'notes/update'
}

const createNote = (note: Note) => {

    return { type: Actions.create, payload: note }
}

const deleteNote = (ID: NoteID) => {

    return { type: Actions.delete, payload: ID }
}

const updateNote = (noteID: NoteID, noteUpdates: NoteUpdates) => {

    return { type: Actions.update, payload: { noteID, noteUpdates } }
}

const notesReducer = (notes: Note[] = [], action: Action) => {
    switch (action.type) {
        case Actions.create:
            const newNote = action.payload
            return [...notes, newNote]

        case Actions.delete:
            const note_ID = action.payload
            return notes.filter(note => {
                const shouldKeepNote = note.id !== note_ID
                return shouldKeepNote
            })

        case Actions.update:
            const { noteID, noteUpdates } = action.payload

            return notes.map(note => {
                const isNoteToUpdate = note.id === noteID

                if (isNoteToUpdate) {
                    return { ...note, ...noteUpdates }
                }
                return note
            })

        default:
            return notes
    }
}

export { createNote, updateNote, deleteNote }
export default notesReducer