import { localStorageKey } from '../store'
import { Colors } from '../types/colors'
import { Note } from '../types/noteTypes'
import getNotesData from './getNotesData'

describe('getNotesData', () => {
    it('Gets any note data from local storage', () => {
        const testNote: Note = { id: '1', text: '', color: Colors.softWhite, position: { x: 0, y: 0 } }

        const testData = [testNote]

        localStorage.setItem(localStorageKey, JSON.stringify(testData))

        const actual = getNotesData()
        const expected = testData

        expect(actual).toEqual(expected)
    })

    it('Provides fallback data in the event that no prior notes data has been stored', () => {
        localStorage.clear()

        const actual = getNotesData()
        const expected: Note[] = []

        expect(actual).toEqual(expected)
    })
})