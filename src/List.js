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

import {
    useNavigate
} from 'react-router-dom'

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

    const newUserTemplate = {
        firstName: "",
        lastName: "",
        age: 30
    }

    const [newUser, setNewUser] = useState(newUserTemplate)

    const [updateIndex, setUpdateIndex] = useState(-1)

    useEffect(() => {
        console.log('component render edildi')
    }, [])

    useEffect(() => {
        console.log('new user updated', newUser)
    }, [newUser])

    const inputChange = (key, value) => {
        console.log('input change', key, value)

        // algorithm

        const updatedUser = {
            ...newUser,
            [key]: value
        }

        setNewUser(updatedUser)
    }

    const navigate = useNavigate()

    return (
        <>
        {
            users.map((user, index) => {

                return (
                    <Row 
                        key={index} 
                        data={user} 
                        uniqueId={index} 
                        onNavigate={(uniqueId) => {
                            console.log(`${uniqueId} sıralı satır detay ekranına geçilecek`)

                            navigate(`/detail/${uniqueId}`)
                        }}
                        onUpdate={(uniqueId) => {
                            console.log(`${uniqueId} sıralı satır güncellenecek`)

                            setUpdateIndex(index)

                            setNewUser(user)
                        }}
                        onRemove={(uniqueId) => {
                            console.log(`${uniqueId} sıralı satır silinecek`)
                            
                            const updatedList = users.filter((item, itemIndex) => index !== itemIndex)
                            setUsers(updatedList)
                        }} 
                    />
                )
            })
        }
            <div>
                <div><input placeholder="Ad" value={newUser.firstName} onChange={(e) => {

                    // controlled input
                    inputChange('firstName', e.target.value)
                    // const firstName = e.target.value
                    // const updatedUser = {
                    //     ...newUser, // firstName, lastName, age
                    //     firstName
                    // }

                    // setNewUser(updatedUser)

                }} /></div>
                <div><input placeholder="Soyad" value={newUser.lastName} onChange={(e) => {
                    inputChange('lastName', e.target.value)
                    // const lastName = e.target.value
                    // const updatedUser = {
                    //     ...newUser, // firstName, lastName, age
                    //     lastName
                    // }

                    // setNewUser(updatedUser)

                }} /></div>
                <div><input placeholder="Yaş" value={newUser.age} onChange={(e) => {
                    inputChange('age', e.target.value)
                    // const age = e.target.value
                    // const updatedUser = {
                    //     ...newUser, // firstName, lastName, age
                    //     age
                    // }

                    // setNewUser(updatedUser)

                }} /></div>
                <div>
                    <Button title={updateIndex === -1 ? "Ekle" : "Güncelle"} onClick={() => {

                        let updatedList

                        if (updateIndex < 0) {

                            // ADD
                            updatedList = [...users, newUser]
                        } else {
                            
                            // UPDATE
                            updatedList = users.map((item, index) => {

                                if (index === updateIndex) {
                                    return newUser
                                }

                                return item
                            })

                            setUpdateIndex(-1)
                            setNewUser(newUserTemplate)
                        }

                        setUsers(updatedList)
                    }} />
                </div>
            </div>
        </>
    )
}

export default List