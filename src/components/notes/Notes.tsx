import { useState } from 'react'
import { useSelector } from 'react-redux'

import { State } from '../../types/reduxTypes'
import { Note as NoteType } from '../../types/noteTypes'

import styles from './Notes.module.scss'

import Draggable from '../draggable/Draggable'
import Note from '../note/Note'

const Notes = () => {
    const notes = useSelector(({ notes }: State) => notes)

    const [ activeNote, setActiveNote ] = useState<NoteType>()

    const noteComponent = (note: NoteType) => {
        return (
            <Note
                note={note}
                setActiveNote={setActiveNote}
            />
        )
    }

    const noteComponents = notes.map(note => {
        return (
            <Draggable
                key={note.id}
                isActiveDraggable={activeNote?.id === note.id}
                render={() => noteComponent(note)}
            />
        )
    })

    return (
        <ul className={`${styles.layout} notesCanvas`} role='list'>
            {noteComponents}
        </ul>
    )
}

export default Notes