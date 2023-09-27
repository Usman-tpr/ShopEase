import {useState} from 'react'
import {Link} from 'react-router-dom'
import swal from 'sweetalert'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const data = { 
        email: email,
        password: password
      };
  
      const response = await axios.post("http://localhost:5000/auth/login", data,{
        headers:{
          authorization:`Bearer ${localStorage.getItem("token")}`
        }
      });
  
      if (response.data.success) {
        console.log(response.data);
        localStorage.setItem('token', response.data.data);
        swal("Wow", response.data.message, "success");
        navigate('/')
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
                  <h4 className='fw-bold'>Sign-In</h4>
                <form action="" className='d-flex flex-column '  onSubmit={handleSubmit}>
                    <input type="text" placeholder='Email' name='name' className='custom-input mt-5' onChange={((e)=>setEmail(e.target.value))}/>
                    <input type="text" placeholder='Password' name='name' className='custom-input mt-5'  onChange={((e)=>setPassword(e.target.value))}/>
                      <button className=' button p-1 bg-custom text-white mt-5 rounded-5 ' type='submit'>Register Yourself</button>
                      <span className='fs-6 text-muted pt-3'>Don't have an account. <Link className='theme-color fw-semibold text-decoration-none' to='/signup'>Signup</Link></span>
                </form>
            </div>
        </div>
    </div>
  
  )
}

export default Login