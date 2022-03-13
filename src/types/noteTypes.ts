import { NoteID, Text, Color } from './types'

export enum NoteColors {
    default = '#fff476',
    green = '#81ff76',
    blue = '#76a4ff',
    purple = '#767bff',
    pink = '#ed76ff',
    red = '#ff7676'
}

export interface Note {
    id: NoteID
    text: Text
    color?: Color
}

export enum UpdatableNoteParts {
    body = 'body',
    color = 'color'
}