import React from 'react'

import styles from './NoteEditModalButtons.module.scss'

import { Colors } from '../../../types/colors'

import ActionButton from '../../action-button/ActionButton'

interface Props {
    isSaving: boolean
    save: () => void
    exitModal: () => void
}

const NoteEditModalButtons = ({ isSaving, save, exitModal }: Props) => {
    return (
        <div className={styles.noteEditModalButtons}>
            <ActionButton
                text={isSaving ? 'Saving' : 'Save'}
                disabled={isSaving}
                action={save}
                baseColor={Colors.lightBlue}
            />

            <ActionButton
                text='Cancel'
                action={exitModal}
                baseColor={Colors.softWhite}
            />
        </div>
    )
}

export default NoteEditModalButtons