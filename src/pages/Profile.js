import React, { useEffect } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import UpdateProfile from '../components/UpdateProfile'
import ProfileDetails from '../components/ProfileDetails'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProfile, profile } from '../features/profiles/profilesSlice'

const Profile = () => {
  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(fetchProfile())
  }, [])
  const userProfile = useSelector(profile)
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
            <Route path='/update' element={<UpdateProfile  profile={userProfile} />}></Route>
            <Route path='/' element={<ProfileDetails profile={userProfile} />}></Route>
        </Routes>
    </div>
  )
}

export default Profile
