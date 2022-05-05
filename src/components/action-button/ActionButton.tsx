import React from 'react'
import Color from 'color'

import { Color as ColorType, Text } from '../../types/types'
import { Colors } from '../../types/colors'

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

    const lightenButton = (event: React.SyntheticEvent) => {
        const button = event.target as HTMLButtonElement

        button.style.background = baseColor
    }

    const darkenButton = (event: React.SyntheticEvent) => {
        const button = event.target as HTMLButtonElement

        if (!disabled) {
            button.style.background = computedColor.darken(.125).hex()
        }
    }

    const performActionOnClick = () => {
        if (!disabled) {
            action()
        }
    }

    return (
        <button
            className={styles.actionButton}
            style={dynamicButtonStyles}
            disabled={disabled}
            onClick={performActionOnClick}
            onMouseEnter={darkenButton}
            onMouseLeave={lightenButton}
            onFocus={darkenButton}
            onBlur={lightenButton}
        >
            {text}
        </button>
    )
}

export default ActionButton