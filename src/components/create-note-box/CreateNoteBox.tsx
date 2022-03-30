import { useDispatch } from 'react-redux'

import styles from './CreateNoteBox.module.scss'

import useCreateNote from './useCreateNote'

const CreateNoteBox = () => {
    const dispatch = useDispatch()
    const { getNoteText, setNoteText, submitOnEnter } = useCreateNote(dispatch)

    return (
        <div title='Create note'>
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
        </div>
    )
}

export default CreateNoteBox