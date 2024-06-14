import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProfileDetails = () => {
    const navigate = useNavigate();
    const navigateToProfileUpdate = () => {
        navigate('/profile/update')
    }
  return (
    <div className='profile-form-div profile-div'>
        <h3>Your Profile</h3>
        <div>
            <p>First Name : </p>
            <p>Johnson</p>
        </div>
        <div>
            <p>Last Name : </p>
            <p>Timothy</p>
        </div>
        <div>
            <p>Email : </p>
            <p>JohnsonT@gmail.com</p>
        </div>
        <div>
            <p>Address : </p>
            <p>8 Belignham Avenue</p>
        </div>
        <div>
        <   button type='button' onClick={navigateToProfileUpdate}>Update Profile</button> 
        </div>
    </div>
  )
}

export default ProfileDetails
