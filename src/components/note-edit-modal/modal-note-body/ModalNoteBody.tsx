import React, { useEffect, useRef } from 'react'

import { Keys } from '../../../types/types'
import { Note } from '../../../types/noteTypes'
import useAutoResizeTextarea from '../../../utils/useAutoResizeTextarea'
import useEditNote from '../../note/useEditNote'

import noteStyles from '../../note/Note.module.scss'
import styles from './ModalNoteBody.module.scss'

interface Props {
    note: Note
}

const ModalNoteBody = ({ note }: Props) => {
    const { getNoteText, setNoteText, updateNote } = useEditNote(note)

    const submitNoteChangesOnClose = ({ key }: React.KeyboardEvent) => {
        const wasEscapeKeyPressed = key === Keys.escape

        if (wasEscapeKeyPressed) {
            updateNote()
        }
    }

    const textAreaRef = useRef<HTMLTextAreaElement>(null)
    const { setTextAreaSize } = useAutoResizeTextarea()
    useEffect(() => setTextAreaSize(textAreaRef.current), [])

    const handleChange = (event: React.ChangeEvent) => {
        setNoteText(event)
        setTextAreaSize(textAreaRef.current)
    }

    return (
        <p className={`${noteStyles.noteBody} ${styles.noteTextBody}`}>
            <textarea
                className={styles.editableNoteText}
                value={getNoteText()}
                ref={textAreaRef}
                onChange={handleChange}
                onKeyDown={submitNoteChangesOnClose}
            />
        </p>
    )
}

export default ModalNoteBody