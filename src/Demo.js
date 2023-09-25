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
                <Button title="Azalt" onClick={() => {

                    const newNumber = number-1
                    setNumber(newNumber)

                    console.log('number = ', newNumber)
                }} />
            </div>
            <div>
                <Button title={`Arttır ${number}`} onClick={() => {

                    const newNumber = number+1
                    setNumber(newNumber)

                    console.log('number = ', newNumber)
                }} />
            </div>
        </>
    )
}

export const DemoRow = () => {
    return (
        <></>
    )
}

export const DemoRow1 = () => {
    return (
        <></>
    )
}

export default Demo