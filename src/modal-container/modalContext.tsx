import React, { createContext, useState } from 'react'

type Modal = JSX.Element | undefined

interface ModalMethods {
    getCurrentModal?: () => Modal | undefined
    setModal?: (modal: Modal) => void
}

const modal = createContext<ModalMethods>({})
const { Provider } = modal

const ModalProvider: React.FC = ({ children }) => {
    const [ currentModal, updateModal ] = useState<Modal>()

    const setModal = (modal: Modal) => updateModal(modal)
    const getCurrentModal = () => currentModal

    const modalMethods = { getCurrentModal, setModal }

    return (
        <Provider value={modalMethods}>
            {children}
        </Provider>
    )
}

export { ModalProvider, modal }