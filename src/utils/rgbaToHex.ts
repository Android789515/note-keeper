type RGBA_String = string

const rgbaToHex = (rgba: RGBA_String) => {
    return `#${rgba.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.?\d*))?\)$/)?.slice(1)
        .map((char, index) => {
            return (index === 3 ? Math.round(parseFloat(char) * 255) : parseFloat(char)).toString(16).padStart(2, '0').replace('NaN', '')
        }).join('')}`.toUpperCase()
}

export default rgbaToHex