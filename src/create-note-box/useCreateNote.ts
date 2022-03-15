import { useState } from 'react'
import { Dispatch } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid'

import { Key, Keys } from '../types/types'
import { NoteColors } from '../types/noteTypes'
import { createNote } from '../notes/notesReducer'

interface ChangeEvent {
    target: {
        value: string
    }
}

interface KeydownEvent {
    key: Key
}

const useCreateNote = (dispatch: Dispatch) => {
    const [ noteText, updateNoteText ] = useState('')

    const getNoteText = () => noteText

    const setNoteText = ({ target: { value: inputtedText } }: ChangeEvent) => {
        updateNoteText(inputtedText)
    }

    const clearNoteTex = () => updateNoteText('')

    const submitOnEnter = ({ key }: KeydownEvent) => {
        const wasEnterKeyPressed = key === Keys.enter

        if (wasEnterKeyPressed) {
            dispatchNote()
            clearNoteTex()
        }
    }

    const dispatchNote = () => {
        dispatch(createNote({
            id: uuid(),
            text: noteText,
            color: NoteColors.default
        }))
    }

    return {
        getNoteText,
        setNoteText,
        submitOnEnter
    }
}

export default useCreateNote