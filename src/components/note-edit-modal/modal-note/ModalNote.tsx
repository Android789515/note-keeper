import React from 'react'

import { Color as NoteColor } from '../../../types/types'
import { Note } from '../../../types/noteTypes'
import useColorPicker from '../../color-picker/useColorPicker'

import noteStyles from '../../note/Note.module.scss'
import styles from './ModalNote.module.scss'

type NoteColorGetter = () => NoteColor
type NoteColorSetter = (color: NoteColor) => void

interface Props {
    note: Note
    children: (getCurrentColor: NoteColorGetter, setCurrentColor: NoteColorSetter) => JSX.Element
}

const ModalNote: React.FC<Props> = (props) => {
    const { note } = props

    const { getCurrentColor, setCurrentColor } = useColorPicker(note.color)

    return (
        <div
            className={`${styles.modalNote} ${noteStyles.note}`}
            style={{ background: getCurrentColor() }}
        >
            {props.children(getCurrentColor, setCurrentColor)}
        </div>
    )
}

export default ModalNote