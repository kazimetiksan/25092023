const Row = (props) => {

    console.log('props', props)

    const data = props

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row'
        }}>
            <div>{data.firstName}</div>
            <div>{data.lastName}</div>
        </div>
    )
}

const List = () => {

    const users = [{
        firstName: "Mehmet",
        lastName: "Demir",
        age: 30
    },{
        firstName: "Elif",
        lastName: "Tekin",
        age: 30
    },{
        firstName: "Ahmet",
        lastName: "Demir",
        age: 30
    }]

    return (
        <>
        {
            users.map((user, index) => {

                return (
                    <Row data={user} />
                )
            })
        }
        </>
    )
}

export default List