import {
    useSelector
} from 'react-redux'

export const useRedux = () => {

    const users = useSelector(state => state.users)

    const isLoading = useSelector(state => state.config.isLoading)

    return {users, isLoading}
}