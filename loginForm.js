import React from 'react';



function loginForm() {
return (
    <form>
        <div className='form-inner'>
            <h3>Login</h3>
            {/*error */}
            <div className='form-group'>
                <label htmlFor='name'>Name:</label>
                <input type='text' name='name' id='name' />
            </div>
            <div className='form-group'>
                <label htmlFor="email">Username:</label>
                <input type='email' name='email'id='email' />
            </div>
            <div className='form-group'>
                <label htmlFor='password'>Password</label>
                <input type='password' name='password'id='password' />
            </div>
            <input type='submit' value='log in'></input>
        </div>
        </form>
  )
}

export default loginForm; 