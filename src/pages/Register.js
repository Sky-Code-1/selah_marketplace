import React from 'react'
import welcomeImage from '../img/register.png'
import Image from '../components/Image'
import RegForm from '../components/RegForm'

const Register = () => {
  return (
    <div className='register-container'>
        <Image src={welcomeImage} />
        <RegForm />
    </div>
  )
}

export default Register
