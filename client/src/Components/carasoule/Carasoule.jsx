import React from 'react'
import './Carasoule.css'
const Carasoule = () => {
  return (
  <div >

<div id="carouselExampleCaptions" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" data-bs-interval="1000" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"data-bs-interval="2000" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner rounded-3 ">
    <div class="carousel-item active">
      <img src="/assets/images/c1.jpeg" className='carasoule-image'  alt="..." />
    </div>
    <div class="carousel-item">
      <img src="/assets/images/c2.jpg" className='carasoule-image' alt="..." />
    
    </div>
    <div class="carousel-item">
      <img src="/assets/images/c3.png" className='carasoule-image' alt="..." /> 
      
    </div>
  </div>
  {/* <button class="carousel-control-prev text-dark" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button> */}
</div>
    </div>
  )
}

export default Carasoule