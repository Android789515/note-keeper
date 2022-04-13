import React from 'react'

import { Keys } from '../types/types'

const useEnterAsClick = () => {

    const clickOnEnterPress = ({ key, target: focusedElement }: React.KeyboardEvent) => {
        const wasEnterKeyPressed = key === Keys.enter

        if (wasEnterKeyPressed) {
            (focusedElement as HTMLElement).click()
        }
    }

    return {
        clickOnEnterPress
    }
}

export default useEnterAsClick