const Row = ({
    data
}) => {

    const {firstName, lastName, age} = data

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row'
        }}>
            <div>{firstName}</div>
            <div>{lastName}</div>
            <div>{age}</div>
            <div>{age > 30 ? "Yaşı Uygun" : "Yaşı Uygun Değil"}</div>
        </div>
    )
}

export default Row