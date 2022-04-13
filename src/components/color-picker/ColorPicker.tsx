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
        <div className={`${styles.colorPicker}`}>
            {colors}
        </div>
    )
}

export default ColorPicker