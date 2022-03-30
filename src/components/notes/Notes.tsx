import { useSelector } from 'react-redux'

import { State } from '../../types/reduxTypes'
import Note from '../note/Note'

import styles from './Notes.module.scss'

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