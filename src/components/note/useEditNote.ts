import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { Note, UpdatableNoteParts } from '../../types/noteTypes'
import { deleteNote as deleteAction, updateNote as updateAction } from '../notes/notesReducer'

const useEditNote = (note: Note) => {
    const [ currentNoteText, updateNoteText ] = useState(note.text)

    const getNoteText = () => currentNoteText

    const setNoteText = ({ target }: React.ChangeEvent) => {
        const { value: newNoteText } = target as HTMLTextAreaElement
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