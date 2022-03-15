import React, { useContext, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import Color from 'color'

import { Note as NoteType } from '../types/noteTypes'
import useIntoOutro from '../utils/useIntoOutro'
import useEditNote from './useEditNote'
import { modal } from '../modal-container/modalContext'

import styles from './Note.module.scss'

import NoteEditModal from '../note-edit-modal/NoteEditModal'

interface Props {
    note: NoteType
}

const Note = ({ note }: Props) => {
    const { text, color } = note

    const baseNoteColor = Color(color)
    const headerColor = baseNoteColor.saturate(.6)

    const dispatch = useDispatch()
    const { deleteNote } = useEditNote(note.id, dispatch)

    const { noteOnMount, noteOnDestroy } = styles
    const {
        getAnimationClass,
        applyIntroClass,
        applyOutroClass
    } = useIntoOutro(noteOnMount, noteOnDestroy)

    const deleteNoteAfterOutro = () => applyOutroClass(deleteNote)

    useEffect(applyIntroClass, [])

    const { setModal } = useContext(modal)
    const openEditModal = () => setModal!(NoteEditModal())


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