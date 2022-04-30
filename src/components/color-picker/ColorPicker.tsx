import React, { useRef } from 'react'
import { v4 as uuid } from 'uuid'

import styles from './ColorPicker.module.scss'

import { NoteColors } from '../../types/noteTypes'
import { Color } from '../../types/types'

import ColorDot from './color-dot/ColorDot'

interface Props {
    getCurrentColor: () => Color
    setCurrentColor: (color: Color) => void
}

const ColorPicker = ({ getCurrentColor, setCurrentColor }: Props) => {
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
                setCurrentColor={setCurrentColor}
            />
        )
    })

    return (
        <div
            className={`${styles.colorPicker}`}
            ref={colorPickerRef}
            onClick={openColorPicker}
        >
            {colors}
        </div>
    )
}

export default ColorPicker