import { useState } from 'react'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './style.css'
const Signup = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const data = { // Create an object with the data
        name: name, // Assuming name, email, and password are defined elsewhere in your code
        email: email,
        password: password
      };
  
      const response = await axios.post("http://localhost:5000/auth/register", data);
  
      if (response.data.success) {
        console.log(response.data.message);
        swal("Wow", response.data.message, "success");
        navigate('/login')
      } 
      else if (!response.data.success) {
        console.log(response.data.message);
        swal("Oops!", response.data.message, "error");
      }
      else {
      
          console.log(response.data.message);
          swal("Oops!", response.data.message, "error");
        
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <div className="container-fluid bg-light">
      <div className="row  min-vh-100  d-flex justify-content-center align-content-center">
        <div className="col-3 bg-white text-center p-5 shadow">
          <h4 className='fw-bold'>Registration</h4>
          <form className='d-flex flex-column ' onSubmit={handleSubmit}>
            <input type="text" placeholder='Name' name='name' className='custom-input mt-3' onChange={((e) => setName(e.target.value))} />
            <input type="text" placeholder='Email' name='email' className='custom-input mt-5' onChange={((e) => setEmail(e.target.value))} />
            <input type="text" placeholder='Password' name='password' className='custom-input mt-5' onChange={((e) => setPassword(e.target.value))} />
            <button className=' button p-1 bg-custom text-white mt-5 rounded-5 ' type='submit' >Register Yourself</button>
            <span className='fs-6 text-muted pt-3'>Already have an account. <Link className='theme-color fw-semibold text-decoration-none' to='/login'>Login</Link></span>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup