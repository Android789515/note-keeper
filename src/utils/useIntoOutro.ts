import { useState } from 'react'

type CSS_Class = string

const useIntoOutro = (introClass: CSS_Class, outroClass: CSS_Class) => {
    const [ animationClass, updateAnimationClass ] = useState('')

    const getAnimationClass = () => animationClass

    // TODO - check out request animation frame
    const applyIntroClass = () => {
        setTimeout(() => {
            updateAnimationClass(introClass)
        }, 125)
    }

    // Unmount function that removes the element from the DOM
    type UnMounter = () => void
    const applyOutroClass = (unMounter: UnMounter) => {
        updateAnimationClass(outroClass)
        setTimeout(unMounter, 600)
    }

    return {
        getAnimationClass,
        applyIntroClass,
        applyOutroClass
    }
}

export default useIntoOutro