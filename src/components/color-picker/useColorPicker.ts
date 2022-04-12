import { useState } from 'react'

import { Color } from '../../types/types'

const useColorPicker = (color: Color) => {
    const [ currentColor, changeCurrentColor ] = useState<Color>(color)

    const getCurrentColor = () => currentColor
    const setCurrentColor = (color: Color) => changeCurrentColor(color)

    return {
        getCurrentColor,
        setCurrentColor
    }
}

export default useColorPicker