import {
    Form
} from 'react-bootstrap'

import {
    useEffect,
    useState
} from 'react'

import Button from './Button'

import {
    signUp
} from './redux/requests'

const SignUp = () => {

    const [userInfo, setUserInfo] = useState({
        firstName: "",
        lastName: "",
        age: 30,
        email: "",
        password: ""
    })

    const inputChange = (key, value) => {
        const updatedUser = {
            ...userInfo,
            [key]: value
        }
        setUserInfo(updatedUser)
    }

    useEffect(() => {
        console.log('userInfo', userInfo)
    }, [userInfo])

    const saveUser = () => {

        signUp({
            callback: () => {
                // geri bildirim
            },
            userInfo
        })
    }

    return (
        <>
            <Form.Control value={userInfo.email} onChange={(e) => {
                inputChange('email', e.target.value)
            }} placeholder='E-Mail' />
            <Form.Control value={userInfo.password} onChange={(e) => {
                inputChange('password', e.target.value)
            }} placeholder='Password' />
            <Form.Control value={userInfo.firstName} onChange={(e) => {
                inputChange('firstName', e.target.value)
            }} placeholder='firstName' />
            <Form.Control value={userInfo.lastName} onChange={(e) => {
                inputChange('lastName', e.target.value)
            }} placeholder='lastName' />
            <Form.Control value={userInfo.age} onChange={(e) => {
                inputChange('age', e.target.value)
            }} placeholder='age' />
            <Button title='Kaydet' onClick={() => {
                saveUser()
            }} />
        </>
    )
}

export default SignUp