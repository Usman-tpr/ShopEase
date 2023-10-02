import {useState,useEffect}from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
const ProtectedScreen = ({children}) => {
    const navigate = useNavigate();
   const [user, setUser] = useState('')
     const validateToken = async ()=>{
        try {
            const response  = await axios.get("http://localhost:5000/auth/get-current-user",    
          {
             headers:{
                authorization:`Bearer ${localStorage.getItem("token")}`
              }
        });
      
        
     if(response.data.success){
      console.log('enter to success');      
        setUser(response.data)
        
     }
    
        } catch (error) {
            console.log(error)
        }
     }

     useEffect(()=>{
        validateToken();
     },[])

  return (
   user && (
      <div>
       <Header />
         <div>
            {children}
         </div>
      </div>
   ) )
}

export default ProtectedScreen