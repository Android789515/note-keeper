import { Note as NoteType } from './noteTypes'

export interface Action {
    type: string
    payload: any
}

export interface State {
    notes: NoteType[]
}