import { Keys } from '../types/types'

const useModalClose = (closeFunction: () => void) => {
    const closeModalOnEscPress = ({ key }: KeyboardEvent) => {
        const wasEscKeyPressed = key === Keys.escape

        if (wasEscKeyPressed) {
            closeFunction()
        }
    }

    return {
        closeModalOnEscPress
    }
}

export default useModalClose