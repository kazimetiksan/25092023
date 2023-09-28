import {
    createSlice
} from '@reduxjs/toolkit'

const initialState = [{
    firstName: "Mehmet",
    lastName: "Demir",
    age: 28
}]

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUsers: (state, {payload, type}) => {
            console.log('current state', state)

            console.log('user action', payload)

            return payload
        }
    }
})

export const {setUsers} = userSlice.actions

export default userSlice.reducer