import Color from 'color'
import { MutableRefObject } from 'react'

type ActionButtonRef = MutableRefObject<HTMLButtonElement | null>

const useActionButton = (actionButtonRef: ActionButtonRef, action: Function) => {
    const actionButton = actionButtonRef.current

    const buttonColor = actionButton?.style.backgroundColor
    const darkenRatio = .125

    const restoreButtonColor = () => {
        if (buttonColor) {
            actionButton.style.backgroundColor = buttonColor
        }
    }

    const darkenButton = () => {
        if (buttonColor) {
            actionButton.style.backgroundColor = Color(buttonColor).darken(darkenRatio).hex()
        }
    }

    const performActionOnClick = () => {
        if (!actionButton?.disabled) {
            action()
        }
    }

    return {
        restoreButtonColor,
        darkenButton,
        performActionOnClick
    }
}

export default useActionButton