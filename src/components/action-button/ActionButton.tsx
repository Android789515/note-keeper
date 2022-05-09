import React, { useRef } from 'react'
import Color from 'color'

import { Color as ColorType, Text } from '../../types/types'
import { Colors } from '../../types/colors'
import useActionButton from './useActionButton'

import styles from './ActionButton.module.scss'

interface Props {
    text: Text
    action: Function
    baseColor: ColorType
    disabled?: boolean
}

const ActionButton = ({ text, action, baseColor, disabled }: Props) => {
    const computedColor = Color(baseColor)
    const isBaseColorDark = computedColor.isDark()

    const dynamicButtonStyles = {
        color: isBaseColorDark ? Colors.white : Colors.black,

        background: baseColor
    }

    const actionButtonRef = useRef<HTMLButtonElement>(null)
    const {
        darkenButton,
        restoreButtonColor,
        performActionOnClick
    } = useActionButton(actionButtonRef, action)

    return (
        <button
            className={styles.actionButton}
            style={dynamicButtonStyles}
            disabled={disabled}
            ref={actionButtonRef}
            onClick={performActionOnClick}
            onMouseEnter={darkenButton}
            onMouseLeave={restoreButtonColor}
            onFocus={darkenButton}
            onBlur={restoreButtonColor}
        >
            {text}
        </button>
    )
}

export default ActionButton