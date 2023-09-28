import {
    configureStore
} from '@reduxjs/toolkit'

import userSlice from './userSlice'
import configSlice from './configSlice'

export const store = configureStore({
    reducer: {
        users: userSlice,
        config: configSlice
    }
})
