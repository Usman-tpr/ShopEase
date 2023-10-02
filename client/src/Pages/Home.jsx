import React,{useState,useEffect} from 'react'

const Home = () => {
  const picsArray = ['/assets/images/landscape.jpg','/assets/images/download.jpeg','/assets/images/sunset.jpg'];
  const [changeImage,setChangeImage] = useState(0);
    
const handleChange = () =>{
       if(changeImage>2){
        setChangeImage(0);
       }
       const index = changeImage+1;
      
       console.log(changeImage)
     console.log('testing')
     setTimeout(()=>{
      
      setChangeImage(index)
     },[3000])
  }
// handleChange()


  return (
  <>
        <div className='container'>
          <div className="row">
            <div className="col-sm-6">
              <img src={picsArray[changeImage]} alt="" />
            </div>
          </div>

        </div>
  </>
  )
}

export default Home