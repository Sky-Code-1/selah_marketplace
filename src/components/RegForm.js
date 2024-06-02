import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const RegForm = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        number: '',
        password: ''
    })
    const register = () => {
        alert('Registering an account!')
    }
    const onInputChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }
  return (
    <div className='reg-form-div'>
        <p className='bold-p'>Create an account</p>
        <p>Enter your details below</p>
        <form>
            <input placeholder='Name' name='name' type='text' value={user.name} onChange={onInputChange}/>
            <input placeholder='Email' name='email' type='email' value={user.email} onChange={onInputChange}/>
            <input placeholder='Mobile Number' name='number' type='number' value={user.email} onChange={onInputChange}/>
            <input placeholder='Password' name='password' type='password' value={user.password} onChange={onInputChange}/>
            <button type='button'>Create Account</button>
            <button type='button' className='flex-button'>Sign Up With Google</button>
        </form>
    </div>
  )
}

export default RegForm
