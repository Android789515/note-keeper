import { useState } from 'react'

const isWidthMobileSize = () => {
    const viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)

    return viewportWidth < 600
}

const useLayoutChanger = () => {
    const [ isMobileLayout, setIsMobileLayout ] = useState(isWidthMobileSize())

    const isLayoutMobile = () => isMobileLayout

    const setLayout = () => {
        if (isWidthMobileSize()) {
            setIsMobileLayout(true)
        } else {
            setIsMobileLayout(false)
        }
    }

    return {
        isLayoutMobile,
        setLayout
    }
}

export default useLayoutChanger