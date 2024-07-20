import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import supabase from '../config/supabaseConfig'

const RegForm = () => {
    const navigate = useNavigate()
    const handleInputChange = (e) => setUser(prev => ({...prev, [e.target.name] : e.target.value})) 

    const handleSignUp = async () => {
        let { data, error } = await supabase.auth.signUp(user)
        if(data) {
            console.log(data)
            console.log('Signup Successful')
            navigate('/')
        }
        if(error) {
            console.log(`An Error Occurred ${error}`)
        }
    }
    const [user, setUser] = useState({
        name: '',
        email: '',
        number: '',
        password: ''
    })
  return (
    <div className='reg-form-div'>
        <p className='bold-p'>Create an account</p>
        <p>Enter your details below</p>
        <form>
            <input placeholder='Name' name='name' type='text' value={user.name} onChange={handleInputChange}/>
            <input placeholder='Email' name='email' type='email' value={user.email} onChange={handleInputChange}/>
            <input placeholder='Mobile Number' name='number' type='number' value={user.number} onChange={handleInputChange}/>
            <input placeholder='Password' name='password' type='password' value={user.password} onChange={handleInputChange}/>
            <button type='button' onClick={handleSignUp}>Create Account</button>
            <button type='button' className='flex-button'>Sign Up With Google</button>
        </form>
    </div>
  )
}

export default RegForm
