import { useContext, useState } from 'react'

import { Note } from '../../types/noteTypes'
import { modal } from '../modal-container/modalContext'

import styles from './NoteEditModal.module.scss'

import ModalNote from './modal-note/ModalNote'
import NoteEditModalButtons from './note-edit-modal-buttons/NoteEditModalButtons'

interface Props {
    note: Note
}

const NoteEditModal = ({ note }: Props) => {
    // Methods are defined in modal context
    const { closeModal } = useContext(modal)

    const [ isSaving, setIsSaving ] = useState(false)

    const exitModal = () => {
        setIsSaving(false)
        closeModal!()
    }

    const save = () => setIsSaving(true)
    const saveAndExit = (saveFunction: () => void) => {
        saveFunction()
        exitModal()
    }

    return (
        <div className={styles.container}>
            <ModalNote
                note={note}
                isSaving={isSaving}
                saveAndExit={saveAndExit}
            />

            <NoteEditModalButtons
                isSaving={isSaving}
                save={save}
                exitModal={exitModal}
            />
        </div>
    )
}

export default NoteEditModal