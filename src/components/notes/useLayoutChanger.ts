import { useState } from 'react'

const useLayoutChanger = () => {
    const [ isMobileLayout, setIsMobileLayout ] = useState(false)

    const isLayoutMobile = () => isMobileLayout

    const setLayout = () => {
        const viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)

        if (viewportWidth < 600) {
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