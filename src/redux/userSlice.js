import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit'

import axios from 'axios'

const initialState = {
    list: [],
    xauth: undefined,
    profile: {}
}

const userSlice = createSlice({
    name: 'user',
    initialState, // []
    reducers: {
        setUsers: (state, {payload, type}) => {
            console.log('current state', state)

            console.log('user action', payload)

            // return payload
            state.list = payload
        },
        addUser: (state, {payload}) => {

            state.list = [...state.list, payload]
            // return [...state, payload]
        },
        update: (state, {payload}) => {

            // payload._id güncellenecek id

            return state.map((item, index) => {

                if (item._id === payload._id) {
                    return payload
                }

                return item
            })
        },
        remove: (state, {payload}) => {

            return state.filter(item => item._id !== payload)
        },
        setXAuth: (state, {payload}) => {

            state.xauth = payload
        },
        setProfile: (state, {payload}) => {

            state.profile = payload
        },
    }
})

export const {setUsers, addUser, update, remove, setProfile, setXAuth} = userSlice.actions

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

export const updateUser = createAsyncThunk('updateUser', (payload, {dispatch}) => {

    console.log('updateUser thunk params', payload)

    const {
        callback,
        newUser 
    } = payload

    const url = `https://reactpm.azurewebsites.net/api/user/${newUser._id}`

    axios.patch(url, newUser)

        .then((response) => {

            console.log('redux update response', response.data)

            dispatch(update(response.data))
            callback(true)
        })

        .catch((err) => {
            console.log('hata oluştu', err)
            callback(false)
        })
})

export const removeUser = createAsyncThunk('removeUser', (payload, {dispatch}) => {

    console.log('removeUser thunk params', payload)

    const {
        callback=() => {},
        _id 
    } = payload

    const url = `https://reactpm.azurewebsites.net/api/user/${_id}`

    axios.delete(url)

        .then((response) => {

            console.log('redux update response', response.status)

            if (response.status === 200) {
                dispatch(remove(_id))
            }

            callback(true)
        })

        .catch((err) => {
            console.log('hata oluştu', err)
            callback(false)
        })
})

export const signUp = createAsyncThunk('signUp', (payload, {dispatch}) => {

    console.log('signUp thunk params', payload)

    const {
        callback,
        userInfo
    } = payload

    const url = '/api/signup' // relative adres

    axios.post(url, userInfo)

        .then((response) => {

            console.log('signup response', response.data)
            console.log('signup token', response.headers)

            const xauth = response.headers.xauth
            const userProfile = response.data

            dispatch(setXAuth(xauth))
            dispatch(setProfile(userProfile))

            callback(true)
        })

        .catch((err) => {
            console.log('hata oluştu', err)
            callback(false)
        })
})

export const signIn = createAsyncThunk('signIn', (payload, {dispatch}) => {

    console.log('signIn thunk params', payload)

    const {
        callback,
        userInfo
    } = payload

    const url = '/api/signin' // relative adres

    axios.post(url, userInfo)

        .then((response) => {

            console.log('signim response', response.data)
            console.log('signin token', response.headers)

            const xauth = response.headers.xauth
            const userProfile = response.data

            dispatch(setXAuth(xauth))
            dispatch(setProfile(userProfile))

            callback(true)
        })

        .catch((err) => {
            console.log('hata oluştu', err)
            callback(false)
        })
})

export default userSlice.reducer