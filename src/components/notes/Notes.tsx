import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuid } from 'uuid'
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd'

import { State } from '../../types/reduxTypes'
import { setNotesTo } from './notesReducer'
import useActiveNoteTracking from './useActiveNoteTracking'
import useLayoutChanger from './useLayoutChanger'

import styles from './Notes.module.scss'

import Draggable from '../draggable/Draggable'
import DraggableDnD from '../draggable-dnd/DraggableDnD'
import Note from '../note/Note'

const Notes = () => {
    const notes = useSelector(({ notes }: State) => notes)

    const { getActiveNoteID, setActiveNote } = useActiveNoteTracking()

    const { isLayoutMobile, setLayout } = useLayoutChanger()
    useEffect(() => {
        window.addEventListener('resize', setLayout)

        return () => window.removeEventListener('resize', setLayout)
    }, [])

    const noteComponents = notes.map((note, index) => {
        if (isLayoutMobile()) {
            return (
                <DraggableDnD key={note.id} draggableID={note.id} index={index}>
                    <Note
                        note={note}
                        setActiveNoteID={setActiveNote}
                    />
                </DraggableDnD>
            )
        } else {
            return (
                <Draggable
                    key={note.id}
                    isActiveDraggable={getActiveNoteID() === note.id}
                >
                    <Note
                        note={note}
                        setActiveNoteID={setActiveNote}
                    />
                </Draggable>
            )
        }
    })

    const dispatch = useDispatch()
    const reorderNotes = ({ draggableId, source, destination }: DropResult) => {
        const notesCopy = [...notes]
        const noteToMove = notesCopy.find(note => note.id === draggableId)

        notesCopy.splice(source.index, 1)
        notesCopy.splice(destination!.index, 0, noteToMove!)

        dispatch(setNotesTo(notesCopy))
    }

    const onDragEnd = (result: DropResult) => {
        const { destination, source } = result
        const didLocationChange = destination?.index !== source.index

        if (destination && didLocationChange) {
            reorderNotes(result)
        }
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId={uuid()}>
                {({ innerRef, droppableProps, placeholder }) => (
                    <ul
                        className={`${styles.layout}
                        notesCanvas`}
                        role='list'
                        ref={innerRef}
                        {...droppableProps}
                    >
                        {noteComponents}
                        {placeholder}
                    </ul>
                )}
            </Droppable>
        </DragDropContext>
    )
}

export default Notes