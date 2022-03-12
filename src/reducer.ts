import { combineReducers } from '@reduxjs/toolkit'

import notes from './notes/notesReducer'

const reducer = combineReducers({ notes })

export default reducer