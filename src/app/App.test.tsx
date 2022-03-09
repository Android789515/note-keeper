import { screen, render } from '@testing-library/react'

import App from './App'

describe('App', () => {
    it('Renders the title', () => {
        render(<App />)
        const title = screen.getByText('Note Keeper')
        expect(title).toBeInTheDocument()
    })

    it('Renders the create note box', function () {
        render(<App />)
        const createNoteBox = screen.getByTitle('Create note')
        expect(createNoteBox).toBeInTheDocument()
    })
})