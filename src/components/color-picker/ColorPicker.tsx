import styles from './ColorPicker.module.scss'

import { NoteColors } from '../../types/noteTypes'
import { Color } from '../../types/types'

interface Props {
    getCurrentColor: () => Color
    setCurrentColor: (color: Color) => void
}

const ColorPicker = ({ getCurrentColor, setCurrentColor }: Props) => {
    const colors = Object.entries(NoteColors).map(([name, color]: [string, string]) => {
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