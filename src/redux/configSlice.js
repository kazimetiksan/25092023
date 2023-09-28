import {
    createSlice
} from '@reduxjs/toolkit'

const initialState = {
    isLoading: false
}

const configSlice = createSlice({
    name: 'config',
    initialState,
    reducers: {
        setLoading: (state, {payload}) => {
            console.log('current loading state', payload)

            state.isLoading = payload
        }
    }
})

export const {setLoading} = configSlice.actions

export default configSlice.reducer