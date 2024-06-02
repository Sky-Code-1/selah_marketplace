import React from 'react'
import regImage from '../img/login.png'
import Image from '../components/Image';
import LoginForm from '../components/LoginForm';

const Login = () => {
    const welcomeImage = regImage;
  return (
    <div className='login-container'>
        <Image src={welcomeImage} />
        <LoginForm />
    </div>
  )
}

export default Login
