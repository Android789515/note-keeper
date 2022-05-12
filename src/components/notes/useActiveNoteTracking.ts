import { useState } from 'react'

import { NoteID } from '../../types/noteTypes'

const useActiveNoteTracking = () => {
    const [ activeNoteID, setActiveNoteID ] = useState<NoteID>()

    const getActiveNoteID = () => activeNoteID

    const setActiveNote = (noteID: NoteID) => setActiveNoteID(noteID)

    return {
        getActiveNoteID,
        setActiveNote
    }
}

export default useActiveNoteTracking