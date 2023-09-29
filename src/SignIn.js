import {
    Form
} from 'react-bootstrap'

import {
    useEffect,
    useState
} from 'react'

import Button from './Button'

import {
    signIn
} from './redux/requests'

import {
    useRedux
} from './redux/hooks'

import {
    useNavigate
} from 'react-router-dom'

const SignIn = () => {

    const {xauth} = useRedux()
    console.log('signin sürecinde xauth', xauth)

    const navigate = useNavigate()
    if (xauth !== undefined) {
        navigate('/')
    }

    const [userInfo, setUserInfo] = useState({
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

    const signInUser = () => {

        signIn({
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

            <Button title='Giriş Yap' onClick={() => {
                signInUser()
            }} />
        </Form>
        </>
    )
}

export default SignIn