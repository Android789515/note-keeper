import React, { useEffect } from 'react'

import { Note } from '../../../types/noteTypes'

import useEditNote from '../../note/useEditNote'

import noteStyles from '../../note/Note.module.scss'
import styles from './ModalNote.module.scss'

import ModalNoteHeader from '../modal-note-header/ModalNoteHeader'
import ModalNoteBody from '../modal-note-body/ModalNoteBody'

interface Props {
    note: Note
    isSaving: boolean
    saveAndExit: (saveFunction: () => void) => void
}

const ModalNote = ({ note, isSaving, saveAndExit }: Props) => {

    const { getNoteText, setNoteText, getCurrentColor, setCurrentColor, submitNoteChanges } = useEditNote(note)

    const submitNoteChangesOnSave = () => {

        if (isSaving) {
            saveAndExit(submitNoteChanges)
        }
    }
    useEffect(submitNoteChangesOnSave, [isSaving])

    return (
        <div
            className={`${styles.modalNote} ${noteStyles.note}`}
            style={{ background: getCurrentColor() }}
        >
            <ModalNoteHeader
                getCurrentColor={getCurrentColor}
                setCurrentColor={setCurrentColor}
            />

            <ModalNoteBody
                getNoteText={getNoteText}
                setNoteText={setNoteText}
            />
        </div>
    )
}

export default ModalNote