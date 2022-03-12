import { ID, Text, Color } from './types'

export enum NoteColors {
    default = '#fff'
}

export interface Note {
    id: ID
    text: Text
    color?: Color
}

export enum UpdatableNoteParts {
    body = 'body',
    color = 'color'
}