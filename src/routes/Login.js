import React from 'react'
import './LoginStyles.css'
import img1 from '../assests/login.png'

const Login = () => {
  return (
    <div className='container'>
      <div className='leftcontainer'>
        <div className='left'>
         <p className='largetext'>SIGN IN</p>
         <h2 className='smalltext'>Sign in to continue our application</h2>
         <div className='form'>
         <div><textarea rows="1" placeholder="youremail@gmail.com"></textarea></div>
         <div><textarea rows="1" placeholder="Password"></textarea></div>
         <div className='btn'>Sign in</div>
        </div>
        </div>
      </div>
      <div className='right'>
        <img className='into-img' src={img1}/>
      </div>
    </div>
  )
}

export default Login