const useAutoResizeTextarea = () => {

    // Removes old whitespace left behind from previous resize
    // Used to downsize the textarea when content is removed
    const refreshSize = (textArea: HTMLTextAreaElement) => textArea.style.height = 'max-content'

    const setTextAreaSize = (textArea: HTMLTextAreaElement | null) => {
        if (textArea) {
            refreshSize(textArea)
            textArea.style.height = textArea.scrollHeight + 'px'
        }
    }

    return {
        setTextAreaSize
    }
}

export default useAutoResizeTextarea