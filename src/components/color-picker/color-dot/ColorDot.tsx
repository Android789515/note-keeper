import { Color } from '../../../types/types'
import useEnterAsClick from '../../../utils/useEnterAsClick'

import styles from './ColorDot.module.scss'

interface Props {
    color: Color
    isCurrentColor: boolean
    needsDropShadow: boolean
    setCurrentColor: (color: Color) => void
}

const ColorDot = ({ color, isCurrentColor, needsDropShadow, setCurrentColor }: Props) => {
    const { clickOnEnterPress } = useEnterAsClick()

    return (
        <div
            className={`
            ${styles.colorDot}
            ${isCurrentColor ? styles.currentColor : ''}
            ${needsDropShadow ? styles.colorDotShadow : ''}
            `}
            style={{ backgroundColor: color }}
            tabIndex={0}
            onClick={() => setCurrentColor(color)}
            onKeyDown={clickOnEnterPress}
        />
    )
}

export default ColorDot