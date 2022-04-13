import styles from './ColorDot.module.scss'

import { Color } from '../../../types/types'

interface Props {
    color: Color
    isCurrentColor: boolean
    setCurrentColor: (color: Color) => void
}

const ColorDot = ({ color, isCurrentColor, setCurrentColor }: Props) => {
    return (
        <div
            className={`${styles.colorDot} ${isCurrentColor ? styles.currentColor : ''}`}
            style={{ backgroundColor: color }}
            onClick={() => setCurrentColor(color)}
        />
    )
}

export default ColorDot