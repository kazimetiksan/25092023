import * as userSlice from './userSlice'
import * as configSlice from './configSlice'

import {store} from './store'

export const setUsers = (payload) => store.dispatch(userSlice.setUsers(payload))
export const addUser = (payload) => store.dispatch(userSlice.addUser(payload))
export const getUsers = (payload) => store.dispatch(userSlice.getUsers(payload))

export const setLoading = (payload) => store.dispatch(configSlice.setLoading(payload))