import { Dispatch } from '@reduxjs/toolkit'

import { NoteID } from '../types/types'
import { deleteNote as deleteAction } from '../notes/notesReducer'

const useEditNote = (noteID: NoteID, dispatch: Dispatch) => {
    const deleteNote = () => {
        dispatch(deleteAction(noteID))
    }

    const editNote = () => {}

    return {
        deleteNote
    }
}

export default useEditNote