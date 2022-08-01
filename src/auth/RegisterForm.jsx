import '../stylesheets/AuthForms.css'
import '../stylesheets/Cyber.css'
import { useNavigate } from 'react-router-dom'
import { Button , Form } from 'semantic-ui-react'
import { useState } from 'react'
import { gql, useMutation } from '@apollo/client';
import { useForm } from '../utils/hooks'
import { AuthContext } from '../context/auth'
import { useContext } from 'react'

function RegisterForm(){
    const context = useContext(AuthContext)
    const navigate = useNavigate()
    const [errors, setErrors] = useState({})
    const { onChange, onSubmit, values } = useForm(registerUser, {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })


    const [addUser, { loading }] = useMutation(REGISTER_USER, {
        update(_, {data: {register: userData }}){
            context.login(userData)
            navigate('/')
        },
        onError(err){
            setErrors(err.graphQLErrors[0].extensions.errors)
        },
        variables: values
    })

    function registerUser(){
        addUser()
    }

    return (
        <>
        <div className="overlay" onClick={() => navigate(-1)}/>
        <div className='loginForm centered col-sm-3'>
            <Form onSubmit={onSubmit} noValidate className={loading ? 'loading' : ''}>
                <Form.Input
                    type='text'
                    placeholder='Username...'
                    name='username'
                    value={values.username}
                    onChange={onChange}
                    error={errors.username ? true : false}
                />
                <Form.Input
                    type='email'
                    placeholder='Email...'
                    name='email'
                    value={values.email}
                    onChange={onChange}
                    error={errors.email ? true : false}
                />
                <Form.Input
                    type='password'
                    placeholder='Password...'
                    name='password'
                    value={values.password}
                    onChange={onChange}
                    error={errors.password ? true : false}
                />
                <Form.Input
                    type='password'
                    placeholder='Confirm password...'
                    name='confirmPassword'
                    value={values.confirmPassword}
                    onChange={onChange}
                    error={errors.confirmPassword ? true : false}
                />
                <Button type="submit" className='cybr-btn cybr-btn-smaller'>  
                     <span aria-hidden className='loginText'>Create Account_</span>
                     <span aria-hidden className="cybr-btn__glitch">root_</span>
                     <span aria-hidden className="cybr-btn__tag">R25</span>
                 </Button>
            </Form>
            {Object.keys(errors).length > 0 && (
                <div className="ui error message">
                    <ul className='list'>
                        {
                            Object.values(errors).map(
                                (value) => (
                                    <li key={value}>{value}</li>
                                )
                            )
                        }
                    </ul>
                </div>
            )}
        </div>   
        </>
    )
}

const REGISTER_USER =  gql`
    mutation register(
        $username: String!
        $password: String!
        $confirmPassword: String!
        $email: String!
    ) {
        register(
            registerInput: {
                username: $username
                password: $password
                confirmPassword: $confirmPassword
                email: $email
            }
        ){
            id username createdAt token
        }
    }
`

export default RegisterForm