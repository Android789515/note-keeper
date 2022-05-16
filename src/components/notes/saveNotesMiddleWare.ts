import { Middleware } from '@reduxjs/toolkit'

import { State } from '../../types/reduxTypes'

const saveNotesMiddleWare: Middleware<{}, State> = store => next => action => {
    if (action) {
        const notesData = store.getState()
        localStorage.setItem(JSON.stringify(notesData), 'notes')
    }

    next(action)
}

export default saveNotesMiddleWare