import {
    useParams
} from 'react-router-dom'

import {
    useRedux
} from './redux/hooks'

const Detail = () => {

    const {_id} = useParams()

    const {users} = useRedux()
    const selectedUser = users.find(item => item._id === _id)
    
    console.log('_id', _id)

    return (
        <div style={{
            margin: 20
        }}>
            <div>{selectedUser.firstName}</div>
            <div>{selectedUser.lastName}</div>
            <div>{selectedUser.age}</div>
        </div>
    )
}

export default Detail