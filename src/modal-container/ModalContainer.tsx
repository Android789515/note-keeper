import { useContext, useEffect } from 'react'

import { modal } from './modalContext'
import useModalClose from './useModalClose'

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
        <div>
            {getCurrentModal!()}
        </div>
    )
}

export default ModalContainer