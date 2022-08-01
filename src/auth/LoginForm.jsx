import '../stylesheets/AuthForms.css'
import '../stylesheets/Cyber.css'
import { useNavigate } from 'react-router-dom'
import { Button , Form } from 'semantic-ui-react'
import { useState } from 'react'
import { gql, useMutation } from '@apollo/client';
import { useForm } from '../utils/hooks'
import { AuthContext } from '../context/auth'
import { useContext } from 'react'

function LoginForm(){
    const context = useContext(AuthContext)
    const navigate = useNavigate()
    const [errors, setErrors] = useState({})
    const { onChange, onSubmit, values } = useForm(loginUserCallback, {
        username: '',
        password: ''
    })


    const [loginUser, { loading }] = useMutation(LOGIN_USER, {
        update(_, { data: { login: userData }}){
            context.login(userData)
            navigate('/')
        },
        onError(err){
            setErrors(err.graphQLErrors[0].extensions.errors)
        },
        variables: values
    })

    function loginUserCallback(){
        loginUser()
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
                    type='password'
                    placeholder='Password...'
                    name='password'
                    value={values.password}
                    onChange={onChange}
                    error={errors.password ? true : false}
                />
                <Button type="submit" className='cybr-btn cybr-btn-smaller'>  
                     <span aria-hidden className='loginText'>Login__</span>
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

const LOGIN_USER =  gql`
    mutation login(
        $username: String!
        $password: String!
    ) {
        login(
            username: $username
            password: $password
        ){
            id username createdAt token
        }
    }
`

export default LoginForm