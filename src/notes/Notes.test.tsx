import { screen, render } from '@testing-library/react'
import { Provider } from 'react-redux'

import store from '../store'
import { Note } from '../types/noteTypes'
import { createNote } from './notesReducer'

import Notes from './Notes'

describe('Notes component', () => {
    test('Note displaying', () => {
        const blankNote: Note = { id: '1', text: '' }
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