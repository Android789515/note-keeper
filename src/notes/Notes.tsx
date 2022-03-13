import { useSelector } from 'react-redux'

import styles from './Notes.module.scss'

import { Note as NoteType } from '../types/noteTypes'

import Note from '../note/Note'

interface State {
    notes: NoteType[]
}

const Notes = () => {
    const notes = useSelector(({ notes }: State) => notes)

    const noteComponents = notes.map(note => {
        return (
            <Note key={note.id} note={note} />
        )
    })

    return (
        <ul className={styles.layout} role='list'>
            {noteComponents}
        </ul>
    )
}

export default Notes