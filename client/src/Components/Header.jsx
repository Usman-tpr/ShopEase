import React from 'react'
import {BiSolidUserCircle , BiSolidLogInCircle , BiSolidCart} from 'react-icons/bi'
import './Header.css'
const Header = ({user}) => {
  return (
    <div className='header'>
       <div className="container-xl">
            <div className="row p-3 d-flex align-items-center justify-content-between">
                <div className="col-sm-2"> 
                <h3 className='fw-bold text-white'>shopEase</h3>
                </div>
                <div className="col-sm-5 d-flex"> 
                <input type="text" className='form-control' placeholder='Search Here' />
                <a className='bg-custom btn text-white'>Search</a>
                </div>

              {user?(
                <>
                     <div className="col-sm-4 d-flex gap-1 align-items-center justify-content-around nav-items">
                <div><BiSolidUserCircle /> <a href="#" > {user.data.name}</a></div>
            <div>    <BiSolidLogInCircle  />    <a href="#" >Logout</a></div>
                <div><BiSolidCart />    <a href="#">cart</a></div>
                </div>
                </>
              
              ):(
                <>
                  <div className="col-sm-4 d-flex gap-1 align-items-center justify-content-around nav-items">
                <div><BiSolidUserCircle /> <a href="#" > Login</a></div>
            <div>    <BiSolidLogInCircle  />    <a href="#" >Signup</a></div>
                <div><BiSolidCart />    <a href="#">cart</a></div>
                </div>
                </>
              )}
            </div>
       </div>
    </div>

  )
}

export default Header