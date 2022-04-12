import { useState } from 'react'

import styles from './ColorPicker.module.scss'

import { NoteColors, NoteColor } from '../../types/noteTypes'
import useColorPicker from './useColorPicker'

const ColorPicker = () => {
    const { getCurrentColor, setCurrentColor } = useColorPicker(NoteColors.default)

    const colors = Object.entries(NoteColors).map(([name, color]: NoteColor) => {
        const isCurrentColor = getCurrentColor() === color
        return (
            <div
                className={`${styles.colorDot} ${isCurrentColor ? styles.currentColor : ''}`}
                style={{ backgroundColor: color }}
                onClick={() => setCurrentColor(color)}
            />
        )
    })

    return (
        <div className={styles.colorPicker}>
            {colors}
        </div>
    )
}

export default ColorPicker