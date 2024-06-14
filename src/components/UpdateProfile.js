import React from 'react'

const UpdateProfile = () => {
  return (
    <div className='profile-form-div'>
        <form>
            <h3>Update Your Profile</h3>
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
            <div>
                <button type='button'>Save Changes</button>
            </div>
        </form>
    </div>
    
  )
}

export default UpdateProfile
