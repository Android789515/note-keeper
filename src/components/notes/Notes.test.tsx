import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'

import store from '../../store'
import { Note, NoteColors } from '../../types/noteTypes'
import { createNote } from './notesReducer'

import Notes from './Notes'

describe('Notes component', () => {
    test('Note displaying', () => {
        const blankNote: Note = { id: '1', text: '', color: NoteColors.default, position: { x: 0, y: 0 } }
        store.dispatch(createNote(blankNote))

        render(
            <Provider store={store}>
                <Notes />
            </Provider>
        )
        const notesComponent = screen.getByRole('list')
        expect(notesComponent).toBeInTheDocument()
    })
})