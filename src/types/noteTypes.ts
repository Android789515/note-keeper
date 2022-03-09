import { ID, Text, Color } from './types'


export interface Note {
    id: ID
    body: Text
    color: Color
}

export enum UpdatableNoteParts {
    body = 'body',
    color = 'color'
}