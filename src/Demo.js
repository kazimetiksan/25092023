import Button from "./Button"

// REACT HOOKS

import {
    useState
} from 'react'

const Demo = () => {

    // let number = 10
    // local variable

    const [number, setNumber] = useState(10)
    // state variable

    return (
        <>
            <div>Anlık Değer: {number}</div>
            <div>
                <Button title="Arttır" onClick={() => {

                    const newNumber = number+1
                    setNumber(newNumber)

                    console.log('number = ', newNumber)
                }} />
            </div>
        </>
    )
}

export default Demo