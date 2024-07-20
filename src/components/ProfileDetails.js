import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfile, profile } from '../features/profiles/profilesSlice';

const ProfileDetails = ({ profile }) => {
    const navigate = useNavigate()
    const navigateToProfileUpdate = () => {
        navigate('/profile/update')
    }
  return (
    <div className='profile-form-div profile-div'>
        <h3>Your Profile</h3>
        <div>
            <p>First Name : </p>
            <p>{profile.firstname}</p>
        </div>
        <div>
            <p>Last Name : </p>
            <p>{profile.lastname}</p>
        </div>
        <div>
            <p>Email : </p>
            <p>{profile.email}</p>
        </div>
        <div>
            <p>Address : </p>
            <p>{profile.address}</p>
        </div>
        <div>
        <   button type='button' onClick={navigateToProfileUpdate}>Update Profile</button> 
        </div>
    </div>
  )
}

export default ProfileDetails
