import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Color from 'color'

import { Note as NoteType } from '../types/noteTypes'
import useIntoOutro from '../utils/useIntoOutro'
import useEditNote from './useEditNote'

import styles from './Note.module.scss'

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
        animationClass,
        applyIntroClass,
        applyOutroClass
    } = useIntoOutro(noteOnMount, noteOnDestroy)

    const deleteNoteAfterOutro = () => applyOutroClass(deleteNote)

    useEffect(applyIntroClass, [])

    return (
        <li className={`${styles.note} ${animationClass}`} style={{ background: color }}>
            <header
                className={styles.noteHeader}
                style={{ background: headerColor.hex() }}
            >
                <button
                    className={styles.closeButton}
                    onClick={deleteNoteAfterOutro}
                >
                    x
                </button>
            </header>

            <p className={styles.noteBody}>{text}</p>
        </li>
    )
}

export default Note