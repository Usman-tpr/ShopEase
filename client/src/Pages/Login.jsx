import React from 'react'
import {Link} from 'react-router-dom'
const Login = () => {
  return (
<div className="container-fluid bg-light">
        <div className="row  min-vh-100  d-flex justify-content-center align-content-center">
            <div className="col-3 bg-white text-center p-5 shadow">
                  <h4 className='fw-bold'>Sign-In</h4>
                <form action="" className='d-flex flex-column '  >
                    <input type="text" placeholder='Email' name='name' className='custom-input mt-5' />
                    <input type="text" placeholder='Password' name='name' className='custom-input mt-5' />
                      <button className=' button p-1 bg-custom text-white mt-5 rounded-5 '>Register Yourself</button>
                      <span className='fs-6 text-muted pt-3'>Don't have an account. <Link className='theme-color fw-semibold text-decoration-none' to='/signup'>Signup</Link></span>
                </form>
            </div>
        </div>
    </div>
  
  )
}

export default Login