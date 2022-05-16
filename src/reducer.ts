import { combineReducers } from '@reduxjs/toolkit'

import notes from './notes-state/notesReducer'

const reducer = combineReducers({ notes })

export default reducer