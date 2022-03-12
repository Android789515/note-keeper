import { useDispatch } from 'react-redux'

import useCreateNote from './useCreateNote'

const CreateNoteBox = () => {
    const dispatch = useDispatch()
    const { noteText, setNoteText, submitOnEnter } = useCreateNote(dispatch)

    return (
        <div title='Create note'>
            <input
                type='text'
                name='Create note'
                aria-label='Create note'
                role='textbox'
                value={noteText}
                onChange={setNoteText}
                onKeyDown={submitOnEnter}
            />
        </div>
    )
}

export default CreateNoteBox