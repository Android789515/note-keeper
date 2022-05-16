import { Middleware } from '@reduxjs/toolkit'

import { localStorageKey } from './notesReducer'

import { State } from '../types/reduxTypes'

const saveNotesMiddleWare: Middleware<{}, State> = store => next => action => {
    if (action) {
        const notesData = store.getState()
        localStorage.setItem(localStorageKey, JSON.stringify(notesData))
    }

    next(action)
}

export default saveNotesMiddleWare