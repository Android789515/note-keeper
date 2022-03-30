import Color from 'color'

import { Note } from '../../../types/noteTypes'

import styles from '../Note.module.scss'

interface Props {
    note: Note
    deleteNote: () => void
}

const NoteHeader = ({ note, deleteNote }: Props) => {
    const { color } = note

    const baseNoteColor = Color(color)
    const headerColor = baseNoteColor.saturate(.6)

    return (
        <header
            className={styles.noteHeader}
            style={{ background: headerColor.hex() }}
        >
            <button
                className={styles.closeButton}
                onClick={deleteNote}
            >
                x
            </button>
        </header>
    )
}

export default NoteHeader