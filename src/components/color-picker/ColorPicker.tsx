import React, { useRef } from 'react'
import { v4 as uuid } from 'uuid'

import styles from './ColorPicker.module.scss'

import { Color } from '../../types/types'
import { Colors } from '../../types/colors'
import { NoteColors } from '../../types/noteTypes'

import ColorDot from './color-dot/ColorDot'

interface Props {
    getCurrentColor: () => Color
    setCurrentColor: (color: Color) => void
    backgroundColor: Color
}

const ColorPicker = ({ getCurrentColor, setCurrentColor, backgroundColor }: Props) => {
    const colorPickerRef = useRef<HTMLDivElement>(null)

    const openColorPicker = (event: React.MouseEvent) => {
        const colorPicker = event.target as HTMLDivElement

        colorPicker.focus()
    }

    const colors = Object.entries(NoteColors).map(([name, color]: [string, string]) => {
        const isCurrentColor = getCurrentColor() === color
        return (
            <ColorDot
                key={uuid()}
                color={color}
                isCurrentColor={isCurrentColor}
                needsDropShadow={backgroundColor === Colors.none}
                setCurrentColor={setCurrentColor}
            />
        )
    })

    return (
        <div
            className={`${styles.colorPicker}`}
            ref={colorPickerRef}
            style={{ backgroundColor }}
            onClick={openColorPicker}
        >
            {colors}
        </div>
    )
}

export default ColorPicker