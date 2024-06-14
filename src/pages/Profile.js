import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import UpdateProfile from '../components/UpdateProfile'
import ProfileDetails from '../components/ProfileDetails'

const Profile = () => {
  return (
    <div className='profile-page-div'>
        <nav>
            <h3 className=''>Account Details</h3>
            <ul>
                <li><Link to={'/profile'}>Profile</Link></li>
                <li><Link to={'/profile/update'}>Update Profile</Link></li>
            </ul>
        </nav>
        <Routes>
            <Route path='/update' element={<UpdateProfile />}></Route>
            <Route path='/' element={<ProfileDetails />}></Route>
        </Routes>
    </div>
  )
}

export default Profile
