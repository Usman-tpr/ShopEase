import React from 'react'
import {Link} from 'react-router-dom'
import swal from 'sweetalert'
// import { Form , Input } from 'antd'
import './style.css'
const Signup = () => {
  const handle =  ((e)=>{
    e.preventDefault()
    swal('Loggined','Welcome','success')
  })
  return (
    <div className="container-fluid bg-light">
        <div className="row  min-vh-100  d-flex justify-content-center align-content-center">
            <div className="col-3 bg-white text-center p-5 shadow">
                  <h4 className='fw-bold'>Registration</h4>
                <form  className='d-flex flex-column ' >
                    <input type="text" placeholder='Name' name='name'  className='custom-input mt-3' />
                    <input type="text" placeholder='Email' name='email' className='custom-input mt-5' />
                    <input type="text" placeholder='Password' name='password' className='custom-input mt-5' />
                      <button className=' button p-1 bg-custom text-white mt-5 rounded-5 ' type='submit' onClick={handle}>Register Yourself</button>
                      <span className='fs-6 text-muted pt-3'>Already have an account. <Link className='theme-color fw-semibold text-decoration-none' to='/login'>Login</Link></span>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Signup