import React, { useContext, useEffect, useRef } from 'react'
import Color from 'color'

import { Note as NoteType } from '../types/noteTypes'
import { modal } from '../modal-container/modalContext'
import useIntoOutro from '../utils/useIntoOutro'
import useEditNote from './useEditNote'

import styles from './Note.module.scss'

import NoteEditModal from '../note-edit-modal/NoteEditModal'

interface Props {
    note: NoteType
}

const Note = ({ note }: Props) => {
    const { text, color } = note

    const baseNoteColor = Color(color)
    const headerColor = baseNoteColor.saturate(.6)

    const { deleteNote } = useEditNote(note)

    const { noteOnMount, noteOnDestroy } = styles
    const {
        getAnimationClass,
        applyIntroClass,
        applyOutroClass
    } = useIntoOutro(noteOnMount, noteOnDestroy)

    const deleteNoteAfterOutro = () => applyOutroClass(deleteNote)

    useEffect(applyIntroClass, [])

    const { setModal } = useContext(modal)
    const openEditModal = () => setModal!(<NoteEditModal note={note} />)

    const closeButton = useRef<HTMLButtonElement>(null)
    const handleNoteClick = ({ target }: React.MouseEvent) => {
        const isNoteRendered = closeButton !== null
        const whatWasClicked = target as HTMLElement

        if (isNoteRendered) {
            const wasCloseButtonClicked = closeButton.current!.contains(whatWasClicked)
            if (!wasCloseButtonClicked) {
                openEditModal()
            }
        }
    }

    return (
        <li
            className={`${styles.note} ${getAnimationClass()}`}
            style={{ background: color }}
            onClick={handleNoteClick}
        >
            <header
                className={styles.noteHeader}
                style={{ background: headerColor.hex() }}
            >
                <button
                    className={styles.closeButton}
                    onClick={deleteNoteAfterOutro}
                    ref={closeButton}
                >
                    x
                </button>
            </header>

            <p className={styles.noteBody}>{text}</p>
        </li>
    )
}

export default Note