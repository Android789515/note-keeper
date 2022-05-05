import { useContext } from 'react'

import { modal } from './modalContext'

import styles from './ModalContainer.module.scss'

const ModalContainer = () => {
    // Methods are defined in modal context
    const { getCurrentModal } = useContext(modal)

    return (
        <div className={styles.modalContainer}>
            {getCurrentModal!()}
        </div>
    )
}

export default ModalContainer