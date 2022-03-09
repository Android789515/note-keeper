import { v4 as uuid } from 'uuid'

import { ID } from '../types/types'
import { Action } from '../types/reduxTypes'
import { Note } from '../types/noteTypes'

enum Actions {
    create = 'notes/create',
    delete = 'notes/delete'
}

const createNote = ({ title, body, color }: Note) => {
    const payload = { id: uuid(), title, body, color }

    return { type: Actions.create, payload }
}

const deleteNote = (ID: ID) => {

    return { type: Actions.delete, payload: ID }
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

        default:
            return notes
    }
}

export { createNote, deleteNote }