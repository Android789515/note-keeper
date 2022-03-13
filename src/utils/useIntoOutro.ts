import { useState } from 'react'

type CSS_Class = string

const useIntoOutro = (introClass: CSS_Class, outroClass: CSS_Class) => {
    const [ animationClass, updateAnimationClass ] = useState('')

    const applyIntroClass = () => {
        setTimeout(() => {
            updateAnimationClass(introClass)
        }, 250)
    }

    const applyOutroClass = () => {
        updateAnimationClass(outroClass)
    }

    return {
        animationClass,
        applyIntroClass,
        applyOutroClass
    }
}

export default useIntoOutro