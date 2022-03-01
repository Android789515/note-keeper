import { render, screen } from '@testing-library/react'

import NoteViewer from './NoteViewer'

describe('NoteViewer', () => {
    it('Renders the NoteViewer component', function () {
        render(<NoteViewer />)
        const component = screen.getByRole('main')
        expect(component).toBeInTheDocument()
    })
})