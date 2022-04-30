import { useContext, useEffect } from 'react'

import { Note as NoteType, NoteID } from '../../types/noteTypes'
import { modal } from '../modal-container/modalContext'
import useIntoOutro from '../../utils/useIntoOutro'
import useEnterAsClick from '../../utils/useEnterAsClick'

import styles from './Note.module.scss'

import NoteEditModal from '../note-edit-modal/NoteEditModal'
import NoteHeader from './note-header/NoteHeader'
import useEditNote from './useEditNote'

interface Props {
    note: NoteType
    setActiveNoteID: (noteID: NoteID) => void
}

const Note = ({ note, setActiveNoteID }: Props) => {
    const { text, color } = note

    const { noteOnMount, noteOnDestroy } = styles
    const { getAnimationClass, applyIntroClass, applyOutroClass } = useIntoOutro(noteOnMount, noteOnDestroy)
    useEffect(applyIntroClass, [])

    const { deleteNote } = useEditNote(note)
    const deleteNoteAfterOutro = () => applyOutroClass(deleteNote)

    const { setModal } = useContext(modal)
    const openEditModal = () => setModal!(<NoteEditModal note={note} />)

    const { clickOnEnterPress } = useEnterAsClick()

    const setActiveWhenCreated = () => setActiveNoteID(note.id)
    useEffect(setActiveWhenCreated, [])

    return (
        <div
            className={`${styles.note} ${getAnimationClass()}`}
            style={{ background: color }}
            onMouseDown={() => setActiveNoteID(note.id)}
        >
            <NoteHeader note={note} deleteNote={deleteNoteAfterOutro} />

            <p
                className={styles.noteBody}
                tabIndex={0}
                onKeyDown={clickOnEnterPress}
                onClick={openEditModal}
            >
                {text}
            </p>
        </div>
    )
}

export default Note