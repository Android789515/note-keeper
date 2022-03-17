import { Color, NoteID, Text } from '../types/types'
import { Action } from '../types/reduxTypes'
import { Note, UpdatableNoteParts } from '../types/noteTypes'

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

const updateNote = (id: NoteID, partOfNote: UpdatableNoteParts, content: Text | Color) => {

    return { type: Actions.update, payload: { id, partOfNote, content } }
}

const notesReducer = (notes: Note[] = [], action: Action) => {
    switch (action.type) {
        case Actions.create:
            const newNote = action.payload
            return [...notes, newNote]

        case Actions.delete:
            const noteID = action.payload
            return notes.filter(note => {
                const shouldKeepNote = note.id !== noteID
                return shouldKeepNote
            })

        case Actions.update:
            const { id, partOfNote, content } = action.payload

            return notes.map(note => {
                const isNoteToUpdate = note.id === id

                if (isNoteToUpdate) {
                    return { ...note, [partOfNote]: content }
                }
                return note
            })

        default:
            return notes
    }
}

export { createNote, updateNote, deleteNote }
export default notesReducer