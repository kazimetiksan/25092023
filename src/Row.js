import Button from "./Button"

const Row = ({
    data,
    onRemove,
    onUpdate,
    onNavigate,
    uniqueId
}) => {

    const {
        firstName, 
        lastName, 
        email="No Mail",
        age=43
    } = data

    return (
        <tr>
            <td>{uniqueId}</td>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{email}</td>
            <td>{age}</td>
            <td>
                <Button variant="light" title="Detaya Git" onClick={() => {
                    onNavigate(uniqueId)
                }} />
            </td>
            <td>
                <Button variant="success" title="Güncelle" onClick={() => {
                    onUpdate(uniqueId)
                }} />
            </td>
            <td>
                <Button variant="danger" title="Sil" onClick={() => {
                    onRemove(uniqueId)
                }} />
            </td>
        </tr>
    )
}

export default Row