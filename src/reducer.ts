import { combineReducers } from '@reduxjs/toolkit'

import notes from './note-list/notesReducer'

const reducer = combineReducers({ notes })

export default reducer