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

    const setNoteText = ({ target: { value: inputtedText } }: ChangeEvent) => {
        updateNoteText(inputtedText)
    }

    const submitOnEnter = ({ key }: KeydownEvent) => {
        const wasEnterKeyPressed = key === Keys.enter

        if (wasEnterKeyPressed) {
            dispatchNote()
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
        noteText,
        setNoteText,
        submitOnEnter
    }
}

export default useCreateNote