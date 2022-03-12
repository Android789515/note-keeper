import Color from 'color'

import { Note as NoteType } from '../types/noteTypes'

import styles from './Note.module.scss'

interface Props {
    note: NoteType
}

const Note = ({ note }: Props) => {
    const { text, color } = note

    const baseNoteColor = Color(color)
    const headerColor = baseNoteColor.saturate(.6)

    return (
        <li
            className={styles.note}
            style={{ background: color }}
        >
            <header
                className={styles.noteHeader}
                style={{ background: headerColor.hex() }}
            />

            <p className={styles.noteBody}>{text}</p>
        </li>
    )
}

export default Note