import { useContext, useEffect } from 'react'

import { modal } from './modalContext'
import useModalClose from './useModalClose'

import styles from './ModalContainer.module.scss'

const ModalContainer = () => {
    const { getCurrentModal, setModal } = useContext(modal)
    const closeModal = () => setModal!(undefined)

    const { closeModalOnEscPress } = useModalClose(closeModal)

    const listenForEscPressOnBody = () => {
        document.body.addEventListener('keydown', closeModalOnEscPress)

        return removeListener
    }
    const removeListener = () => document.removeEventListener('keydown', closeModalOnEscPress)

    useEffect(listenForEscPressOnBody, [])

    return (
        <div className={styles.modalContainer}>
            {getCurrentModal!()}
        </div>
    )
}

export default ModalContainer