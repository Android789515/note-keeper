import { Action } from '../types/reduxTypes'
import { Note, NoteID, NoteUpdates } from '../types/noteTypes'
import getNotesData from './getNotesData'

enum Actions {
    create = 'notes/create',
    delete = 'notes/delete',
    update = 'notes/update',
    updateAll = 'notes/updateAll'
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

const setNotesTo = (notes: Note[]) => {

    return { type: Actions.updateAll, payload: notes }
}

const notesReducer = (notes: Note[] = getNotesData(), action: Action) => {
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

        case Actions.updateAll:
            return action.payload

        default:
            return notes
    }
}

export const localStorageKey = 'noteKeeper-notesData'

export { createNote, updateNote, setNotesTo, deleteNote }
export default notesReducer