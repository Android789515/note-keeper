export type Text = string
export type Color = string

export type Key = string

export enum Keys {
    enter = 'Enter',
    escape = 'Escape'
}

type Coordinate = number
export type Position2D = { x: Coordinate, y: Coordinate }