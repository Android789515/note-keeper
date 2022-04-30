import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { State } from '../../types/reduxTypes'
import { Note as NoteType, NoteID } from '../../types/noteTypes'

import styles from './Notes.module.scss'

import Draggable from '../draggable/Draggable'
import Note from '../note/Note'

const Notes = () => {
    const notes = useSelector(({ notes }: State) => notes)

    const [ activeNoteID, setActiveNoteID ] = useState<NoteID>()
    useEffect(() => console.log(activeNoteID), [activeNoteID])

    const NoteComponent = (note: NoteType) => {
        return (
            <Note
                key={note.id}
                note={note}
                setActiveNoteID={setActiveNoteID}
            />
        )
    }

    const [ isMobileLayout, setIsMobileLayout ] = useState(false)
    useEffect(() => {
        const viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)

        if (viewportWidth < 600) {
            setIsMobileLayout(true)
        }
    }, [])

    const noteComponents = notes.map(note => {
        if (isMobileLayout) {
            return NoteComponent(note)
        } else {
            return (
                <Draggable
                    key={note.id}
                    isActiveDraggable={activeNoteID === note.id}
                    render={() => NoteComponent(note)}
                />
            )
        }
    })

    return (
        <ul className={`${styles.layout} notesCanvas`} role='list'>
            {noteComponents}
        </ul>
    )
}

export default Notes