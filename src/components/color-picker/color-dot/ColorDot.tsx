import { Color } from '../../../types/types'
import useEnterAsClick from '../../../utils/useEnterAsClick'

import styles from './ColorDot.module.scss'

interface Props {
    color: Color
    isCurrentColor: boolean
    setCurrentColor: (color: Color) => void
}

const ColorDot = ({ color, isCurrentColor, setCurrentColor }: Props) => {
    const { clickOnEnterPress } = useEnterAsClick()

    return (
        <div
            className={`${styles.colorDot} ${isCurrentColor ? styles.currentColor : ''}`}
            style={{ backgroundColor: color }}
            tabIndex={0}
            onClick={() => setCurrentColor(color)}
            onKeyDown={clickOnEnterPress}
        />
    )
}

export default ColorDot