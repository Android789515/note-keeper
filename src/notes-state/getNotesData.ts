import { localStorageKey } from '../store'
import { Note } from '../types/noteTypes'

const getNotesData = () => {
    const rawNotesData = localStorage.getItem(localStorageKey)
    const fallbackData: Note[] = []

    return rawNotesData ? JSON.parse(rawNotesData) : fallbackData
}

export default getNotesData