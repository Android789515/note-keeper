import { useSelector } from 'react-redux'

import { State } from '../../types/reduxTypes'

import styles from './Notes.module.scss'

import Note from '../note/Note'
import Draggable from '../draggable-component/Draggable'

const Notes = () => {
    const notes = useSelector(({ notes }: State) => notes)

    const noteComponents = notes.map(note => {
        return (
            <Draggable key={note.id}>
                <Note note={note} />
            </Draggable>
        )
    })

    return (
        <ul className={styles.layout} role='list'>
            {noteComponents}
        </ul>
    )
}

export default Notes