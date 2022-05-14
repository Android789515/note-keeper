import { Color, Position2D, Text } from './types'

export enum NoteColors {
    default = '#fff476',
    green = '#81ff76',
    blue = '#76a4ff',
    purple = '#767bff',
    pink = '#ed76ff',
    red = '#ff7676'
}

export type NoteID = string

export interface Note {
    id: NoteID
    text: Text
    color: Color
    position: Position2D
}

export interface NoteUpdates {
    text?: Text
    color?: Color
    position?: Position2D
}