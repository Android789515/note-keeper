import { combineReducers } from '@reduxjs/toolkit'

import notes from './components/notes/notesReducer'

const reducer = combineReducers({ notes })

export default reducer