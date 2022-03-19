import React from 'react'
import Color from 'color'

import { Keys } from '../types/types'
import { Note } from '../types/noteTypes'
import useEditNote from '../note/useEditNote'

import styles from './NoteEditModal.module.scss'
import noteStyles from '../note/Note.module.scss'

interface Props {
    note: Note
}

const NoteEditModal = ({ note }: Props) => {
    const { getNoteText, setNoteText, updateNote } = useEditNote(note)

    const { color } = note

    const baseNoteColor = Color(color)
    const headerColor = baseNoteColor.saturate(.6)

    const submitNoteChangesOnClose = ({ key }: React.KeyboardEvent) => {
        const wasEscapeKeyPressed = key === Keys.escape

        if (wasEscapeKeyPressed) {
            updateNote()
        }
    }

    return (
        <div className={styles.container}>
            <div
                className={`${styles.modalNote} ${noteStyles.note}`}
                style={{ background: note.color }}
            >
                <header className={noteStyles.noteHeader} style={{ background: headerColor.hex() }} />

                <p className={noteStyles.noteBody}>
                    <textarea
                        className={styles.editableNoteText}
                        value={getNoteText()}
                        onChange={setNoteText}
                        onKeyDown={submitNoteChangesOnClose}
                    />
                </p>
            </div>

            <p className={styles.howToSaveText}>
                Press escape when done
            </p>
        </div>
    )
}

export default NoteEditModal