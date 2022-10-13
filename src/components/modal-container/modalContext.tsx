import React, { createContext, useState } from 'react';

type Modal = JSX.Element

// Keys are set to optional to initialize the context
interface ModalMethods {
    getCurrentModal?: () => Modal | undefined
    openModal?: (modal: Modal) => void
    closeModal?: () => void
}

const modal = createContext<ModalMethods>({})
const { Provider } = modal

const ModalProvider: React.FC = ({ children }) => {
    const [ currentModal, updateModal ] = useState<Modal>()

    const openModal = (modal: Modal) => {
        if (modal !== undefined) {
            updateModal(modal)
        }
    }
    const closeModal = () => updateModal(undefined)
    const getCurrentModal = () => currentModal

    const modalMethods = { getCurrentModal, openModal, closeModal }

    return (
        <Provider value={modalMethods}>
            {children}
        </Provider>
    )
}

export { ModalProvider, modal }