import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit'

import axios from 'axios'

const initialState = [] // array count 0

const userSlice = createSlice({
    name: 'user',
    initialState, // []
    reducers: {
        setUsers: (state, {payload, type}) => {
            console.log('current state', state)

            console.log('user action', payload)

            return payload
        },
        addUser: (state, {payload}) => {

            // axios

            return [...state, payload]
        }
    }
})

export const {setUsers, addUser} = userSlice.actions

// ASYNC

export const getUsers = createAsyncThunk('getUsers', (params, {dispatch}) => {

    // Async Promise

    console.log('thunk params', params)

    const {
        callback
    } = params

    const url = 'https://reactpm.azurewebsites.net/api/users'

    axios.get(url)

        .then((response) => {

            console.log('redux response', response.data)

            dispatch(setUsers(response.data))
            callback(true)
        })

        .catch((err) => {
            console.log('hata oluştu', err)
            callback(false)
        })
})

export default userSlice.reducer