import {
    useParams
} from 'react-router-dom'


const Detail = () => {

    const {_id} = useParams()
    
    console.log('_id', _id)

    return (
        <>
        <div>Detail</div>
        </>
    )
}

export default Detail