import { configureStore } from '@reduxjs/toolkit'

import saveNotesMiddleWare from './notes-state/saveNotesMiddleWare'

import reducer from './reducer'

const store = configureStore({
    reducer,
    middleware: [saveNotesMiddleWare]
})

export default store