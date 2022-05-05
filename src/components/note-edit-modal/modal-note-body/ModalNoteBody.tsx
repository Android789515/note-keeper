import React, { useEffect, useRef } from 'react'

import { Text } from '../../../types/types'
import useAutoResizeTextarea from '../../../utils/useAutoResizeTextarea'

import noteStyles from '../../note/Note.module.scss'
import styles from './ModalNoteBody.module.scss'

interface Props {
    setNoteText: (text: Text) => void
    getNoteText: () => Text
}

const ModalNoteBody = ({ getNoteText, setNoteText }: Props) => {

    const textAreaRef = useRef<HTMLTextAreaElement>(null)
    const { setTextAreaSize } = useAutoResizeTextarea()
    useEffect(() => setTextAreaSize(textAreaRef.current), [])

    const handleChange = (event: React.ChangeEvent) => {
        const textbox = event.target as HTMLTextAreaElement

        setNoteText(textbox.value)
        setTextAreaSize(textAreaRef.current)
    }

    return (
        <p className={`${noteStyles.noteBody} ${styles.noteTextBody}`}>
            <textarea
                className={styles.editableNoteText}
                value={getNoteText()}
                ref={textAreaRef}
                onChange={handleChange}
            />
        </p>
    )
}

export default ModalNoteBody