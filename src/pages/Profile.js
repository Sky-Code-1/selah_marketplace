import React from 'react'

const Profile = () => {
  return (
    <div className='profile-page-div'>
        <nav>
            <h3 className=''>Account Details</h3>
            <ul>
                <li>Profile</li>
                <li>Update Profile</li>
                <li>Favorites</li>
            </ul>
        </nav>
        <div className='profile-form-div'>
            <form>
                <p>Edit Your Profile</p>
                <div className='profile-input-containers'>
                    <div>
                        <label htmlFor='firstname'>First Name</label>
                        <input type='text' id='firstname'/>
                    </div>
                    <div>
                        <label htmlFor='lastname'>Last Name</label>
                        <input type='text' id='lastname'/>
                    </div>
                </div>
                <div>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email'/>
                    </div>
                    <div>
                        <label htmlFor='address'>Address</label>
                        <input type='text' id='address'/>
                    </div>
                </div>
                <div className='password-change-div'>
                    <label htmlFor='password'>Current Password</label>
                    <input type='password' id='password'/>
                </div>
                <div className='password-change-div'>
                    <label htmlFor='new-password'>New Password</label>
                    <input type='password' id='new-password'/>
                </div>
                <div className='password-change-div'>
                    <label htmlFor='confirm-password'>Confirm New Password</label>
                    <input type='password' id='confirm-password'/>
                </div>
                <button type='button'>Save Changes</button>
            </form>
        </div>
    </div>
  )
}

export default Profile
