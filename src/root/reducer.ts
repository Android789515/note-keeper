import { State } from './store'

interface Action {
    type: string
    payload: any
}

const reducer = (state: State = {}, action: Action) => {
    switch (action.type) {
        default:
            return state
    }
}