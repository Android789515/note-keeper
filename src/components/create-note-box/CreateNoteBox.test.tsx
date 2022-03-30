import { screen, render, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'

import store from '../../store'
import { Keys } from '../../types/types'
import { NoteColors } from '../../types/noteTypes'

import CreateNoteBox from './CreateNoteBox'

describe('Create note box', () => {
    test('Note creation', () => {
        render(
            <Provider store={store}>
                <CreateNoteBox />
            </Provider>
        )

        const input = screen.getByRole('textbox', { name: 'Create note' }) as HTMLInputElement

        const noteText = 'Take out trash'

        fireEvent.change(input, { target: { value: noteText } })
        expect(input.value).toBe(noteText)

        fireEvent.keyDown(input, { key: Keys.enter })

        const { notes } = store.getState()
        expect(notes.length).toBe(1)

        const firstNote = notes.at(-1)
        expect(firstNote.text).toBe(noteText)
        expect(firstNote.color).toBe(NoteColors.default)
    })
})