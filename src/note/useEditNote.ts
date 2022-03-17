import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { Note, UpdatableNoteParts } from '../types/noteTypes'
import { deleteNote as deleteAction, updateNote as updateAction } from '../notes/notesReducer'

type TextTyped = string
interface ChangeEvent {
    target: {
        value: TextTyped
    }
}

const useEditNote = (note: Note) => {
    const [ currentNoteText, updateNoteText ] = useState(note.text)

    const getNoteText = () => currentNoteText

    const setNoteText = ({ target: { value: newNoteText } }: ChangeEvent) => {
        updateNoteText(newNoteText)
    }

    const dispatch = useDispatch()
    const updateNote = () => {
        dispatch(updateAction(note.id, UpdatableNoteParts.text, currentNoteText))
    }

    const deleteNote = () => {
        dispatch(deleteAction(note.id))
    }

    return {
        getNoteText,
        setNoteText,
        updateNote,
        deleteNote
    }
}

export default useEditNote