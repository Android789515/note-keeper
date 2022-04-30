import Color from 'color'

import { Color as NoteColor } from '../../../types/types'

import noteStyles from '../../note/Note.module.scss'

import ColorPicker from '../../color-picker/ColorPicker'

interface Props {
    getCurrentColor: () => NoteColor
    setCurrentColor: (color: NoteColor) => void
}

const ModalNoteHeader = ({ getCurrentColor, setCurrentColor }: Props) => {
    const headerColor = Color(getCurrentColor()).saturate(.6)

    return (
        <header className={noteStyles.noteHeader} style={{ background: headerColor.hex() }}>
            <ColorPicker
                getCurrentColor={getCurrentColor}
                setCurrentColor={setCurrentColor}
            />
        </header>
    )
}

export default ModalNoteHeader