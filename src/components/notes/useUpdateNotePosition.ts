import { useDispatch } from 'react-redux'
import { DraggableData } from 'react-draggable'

import { NoteID } from '../../types/noteTypes'
import { updateNote } from '../../notes-state/notesReducer'

const useUpdateNotePosition = () => {
    const dispatch = useDispatch()

    const updateNotePosition = (event: Event, data: DraggableData, noteID: NoteID) => {
        const { x, y } = data

        dispatch(updateNote(noteID, { position: { x, y } }))
    }

    return {
        updateNotePosition
    }
}

export default useUpdateNotePosition