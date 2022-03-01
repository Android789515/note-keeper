import { render, screen } from '@testing-library/react'

import App from './App'

describe('App', () => {
    it('Renders the App component', () => {
        render(<App/>)
        const component = screen.getByRole('application')
        expect(component).toBeInTheDocument()
    })
})
