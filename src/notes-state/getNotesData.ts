import { localStorageKey } from './notesReducer'
import { Note } from '../types/noteTypes'

const getNotesData = () => {
    const rawNotesData = localStorage.getItem(localStorageKey)
    const fallbackData: Note[] = []

    if (rawNotesData) {
        const { notes } = JSON.parse(rawNotesData)

        return notes
    }

    return fallbackData
}

export default getNotesData