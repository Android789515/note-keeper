import { Note } from '../../types/noteTypes'

import styles from './NoteEditModal.module.scss'

import ModalNoteBody from './modal-note-body/ModalNoteBody'
import ModalNoteHeader from './modal-note-header/ModalNoteHeader'
import ModalNote from './modal-note/ModalNote'
import HowToSaveText from './how-to-save-text/HowToSaveText'

interface Props {
    note: Note
}

const NoteEditModal = ({ note }: Props) => {

    return (
        <div className={styles.container}>
            <ModalNote note={note}>
                {(getCurrentColor, setCurrentColor) => (
                    <>
                        <ModalNoteHeader
                            getCurrentColor={getCurrentColor}
                            setCurrentColor={setCurrentColor}
                        />
                        <ModalNoteBody note={note} />
                    </>
                )}
            </ModalNote>

            <HowToSaveText />
        </div>
    )
}

export default NoteEditModal