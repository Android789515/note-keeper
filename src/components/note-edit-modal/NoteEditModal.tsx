import { useContext, useEffect, useState } from 'react'

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
    useEffect(() => console.log(isSaving), [isSaving])

    const exitModal = () => {
        setIsSaving(false)
        closeModal!()
    }

    const save = () => setIsSaving(true)
    const saveAndExit = (saveFunction: () => void) => {
        setTimeout(() => {
            saveFunction()

            exitModal()
        }, 1500)
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