import {
    useSelector
} from 'react-redux'

export const useRedux = () => {

    const users = useSelector(state => state.users.list)
    const xauth = useSelector(state => state.users.xauth)
    const profile = useSelector(state => state.users.profile)


    const isLoading = useSelector(state => state.config.isLoading)

    return {users, isLoading, xauth, profile}
}