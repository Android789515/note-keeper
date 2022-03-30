import { screen, render } from '@testing-library/react'
import { Provider } from 'react-redux'

import store from '../../store'

import App from './App'

describe('App', () => {
    it('Renders the title', () => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        )
        const title = screen.getByText('Note Keeper')
        expect(title).toBeInTheDocument()
    })

    it('Renders the create note box', function () {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        )
        const createNoteBox = screen.getByTitle('Create note')
        expect(createNoteBox).toBeInTheDocument()
    })
})