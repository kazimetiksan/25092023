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

import {
    useRedux
} from './redux/hooks'

import {
    useNavigate
} from 'react-router-dom'

const SignUp = () => {

    const {xauth} = useRedux()
    console.log('signup sürecinde xauth', xauth)

    const navigate = useNavigate()
    if (xauth !== undefined) {
        navigate('/')
    }

    const [userInfo, setUserInfo] = useState({
        firstName: "",
        lastName: "",
        age: 30,
        email: "",
        password: ""
    })

    const [validationPassword, setValidationPassword] = useState("")

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
        <Form noValidate>
            <Form.Control value={userInfo.email} onChange={(e) => {
                inputChange('email', e.target.value)
            }} placeholder='E-Mail' />

            <Form.Control value={userInfo.password} onChange={(e) => {
                inputChange('password', e.target.value)
            }} placeholder='Password' security="true" type='password' />
            <Form.Control value={validationPassword} onChange={(e) => {
                const valPass = e.target.value
                setValidationPassword(valPass)
            }} placeholder='Password' security="true" type='password' isValid={validationPassword === userInfo.password} />

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
        </Form>
        </>
    )
}

export default SignUp