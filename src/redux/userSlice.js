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

            return [...state, payload]
        }
    }
})

export const {setUsers, addUser} = userSlice.actions

// ASYNC

export const getUsers = createAsyncThunk('getUsers', (payload, {dispatch}) => {

    // Async Promise

    console.log('thunk params', payload)

    const {
        callback
    } = payload

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

export const addNewUser = createAsyncThunk('addNewUser', (payload, {dispatch}) => {

    // Async Promise

    console.log('addNewUser thunk params', payload)

    const {
        callback,
        newUser
    } = payload

    const url = 'https://reactpm.azurewebsites.net/api/user'

    axios.post(url, newUser)

        .then((response) => {

            console.log('redux response', response.data)

            dispatch(addUser(response.data))
            callback(true)
        })

        .catch((err) => {
            console.log('hata oluştu', err)
            callback(false)
        })
})

export default userSlice.reducer