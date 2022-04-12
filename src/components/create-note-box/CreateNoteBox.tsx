import { useDispatch } from 'react-redux'

import styles from './CreateNoteBox.module.scss'

import { NoteColors } from '../../types/noteTypes'
import useCreateNote from './useCreateNote'

import ColorPicker from '../color-picker/ColorPicker'
import useColorPicker from '../color-picker/useColorPicker'

const CreateNoteBox = () => {
    const { getCurrentColor, setCurrentColor } = useColorPicker(NoteColors.default)

    const dispatch = useDispatch()
    const { getNoteText, setNoteText, submitOnEnter } = useCreateNote(getCurrentColor(), dispatch)

    return (
        <div title='Create note' className={styles.createNoteBox}>
            <input
                className={styles.input}
                type='text'
                placeholder='Take a note'
                name='Create note'
                aria-label='Create note'
                role='textbox'
                value={getNoteText()}
                onChange={setNoteText}
                onKeyDown={submitOnEnter}
            />

            <ColorPicker
                getCurrentColor={getCurrentColor}
                setCurrentColor={setCurrentColor}
            />
        </div>
    )
}

export default CreateNoteBox