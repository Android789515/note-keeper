import { createStore } from '@reduxjs/toolkit'

import reducer from './reducer'

const store = createStore(
    reducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
)

export const localStorageKey = 'notes'

export default store