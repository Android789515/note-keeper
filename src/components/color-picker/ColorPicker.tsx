import { useState } from 'react'

import styles from './ColorPicker.module.scss'

import { NoteColors, NoteColor } from '../../types/noteTypes'
import useColorPicker from './useColorPicker'

const ColorPicker = () => {
    const { getCurrentColor, setCurrentColor } = useColorPicker(NoteColors.default)

    const colors = Object.entries(NoteColors).map(([name, hexcode]: NoteColor) => {
        return (
            <div className={styles.colorDot} style={{ backgroundColor: hexcode }} />
        )
    })

    return (
        <div className={styles.colorPicker}>
            {colors}
        </div>
    )
}

export default ColorPicker