import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { Text } from '../../types/types'
import { Note } from '../../types/noteTypes'
import { deleteNote as deleteAction, updateNote } from '../notes/notesReducer'
import useColorPicker from '../color-picker/useColorPicker'

const useEditNote = (note: Note) => {
    const [ currentNoteText, updateNoteText ] = useState(note.text)
    const { getCurrentColor, setCurrentColor } = useColorPicker(note.color)

    const getNoteText = () => currentNoteText

    const setNoteText = (text: Text) => updateNoteText(text)

    const dispatch = useDispatch()
    const submitNoteChanges = () => {
        dispatch(updateNote(note.id, { text: currentNoteText, color: getCurrentColor() }))
    }

    const deleteNote = () => {
        dispatch(deleteAction(note.id))
    }

    return {
        getNoteText,
        setNoteText,
        getCurrentColor,
        setCurrentColor,
        submitNoteChanges,
        deleteNote
    }
}

export default useEditNote