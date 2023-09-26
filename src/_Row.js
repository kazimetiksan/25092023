import Button from "./Button"

const Row = ({
    data,
    onRemove,
    onUpdate,
    onNavigate,
    uniqueId
}) => {

    const {firstName, lastName, email, age} = data

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row'
        }}>
            <div>{firstName}</div>
            <div>{lastName}</div>
            <div>{email}</div>
            <div>{age}</div>
            <div>{age > 30 ? "Yaşı Uygun" : "Yaşı Uygun Değil"}</div>
            <div>
                <Button variant="light" title="Detaya Git" onClick={() => {
                    onNavigate(uniqueId)
                }} />
            </div>
            <div>
                <Button variant="success" title="Güncelle" onClick={() => {
                    onUpdate(uniqueId)
                }} />
            </div>
            <div>
                <Button variant="danger" title="Sil" onClick={() => {
                    onRemove(uniqueId)
                }} />
            </div>
        </div>
    )
}

export default Row