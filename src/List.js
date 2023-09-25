    // destructuring

    // const dummy = {
    //     ad: "ahmet",
    //     soyad: "demir"
    // }

    // const {
    //     ad,
    //     soyad
    // } = dummy

    // console.log('ad', ad)

    // const {data} = props

import { useState, useEffect } from "react"
import Row from "./Row"
import Button from "./Button"

const List = () => {

    // const users = [{
    //     firstName: "Mehmet",
    //     lastName: "Demir",
    //     age: 28
    // },{
    //     firstName: "Elif",
    //     lastName: "Tekin",
    //     age: 32
    // },{
    //     firstName: "Ahmet",
    //     lastName: "Demir",
    //     age: 43
    // }]

    const [users, setUsers] = useState([{
        firstName: "Mehmet",
        lastName: "Demir",
        age: 28
    },{
        firstName: "Elif",
        lastName: "Tekin",
        age: 32
    },{
        firstName: "Ahmet",
        lastName: "Demir",
        age: 43
    }])

    const [newUser, setNewUser] = useState({
        firstName: "",
        lastName: "",
        age: 30
    })

    useEffect(() => {
        console.log('component render edildi')
    }, [])

    useEffect(() => {
        console.log('new user updated', newUser)
    }, [newUser])

    const inputChange = (key, value) => {
        console.log('input change', key, value)

        const updatedUser = {
            ...newUser,
            [key]: value
        }

        setNewUser(updatedUser)
    }

    return (
        <>
        {
            users.map((user, index) => {

                return (
                    <Row key={index} data={user} />
                )
            })
        }
            <div>
                <div><input placeholder="Ad" value={newUser.firstName} onChange={(e) => {
                    inputChange('firstName', e.target.value)
                    // const firstName = e.target.value
                    // const updatedUser = {
                    //     ...newUser, // firstName, lastName, age
                    //     firstName
                    // }

                    // setNewUser(updatedUser)

                }} /></div>
                <div><input placeholder="Ad" value={newUser.lastName} onChange={(e) => {
                    inputChange('lastName', e.target.value)
                    // const lastName = e.target.value
                    // const updatedUser = {
                    //     ...newUser, // firstName, lastName, age
                    //     lastName
                    // }

                    // setNewUser(updatedUser)

                }} /></div>
                <div><input placeholder="Ad" value={newUser.age} onChange={(e) => {
                    inputChange('age', e.target.value)
                    // const age = e.target.value
                    // const updatedUser = {
                    //     ...newUser, // firstName, lastName, age
                    //     age
                    // }

                    // setNewUser(updatedUser)

                }} /></div>
                <div>
                    <Button title="Ekle" onClick={() => {

                        const updatedList = [...users, newUser]

                        setUsers(updatedList)
                    }} />
                </div>
            </div>
        </>
    )
}

export default List