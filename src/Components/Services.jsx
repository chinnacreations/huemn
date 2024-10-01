import React from 'react';
import "../App.css";
import Serviceimage1 from '../Images/Services/Light+Objects+1.png';
import Serviceimage2 from '../Images/Services/Serviceimage.png';
import Serviceimage3 from '../Images/Services/Sleek+Objects+2.png';


const Services = () => {
  return (
    <div className="container my-5">
        <h1 className='text-center'>OUR SERVICES</h1>
        <div className="row mt-3 align-items-center">
            <div className="col-6">
                <h1>Our Services</h1>
            </div>
            <div className="col-6">
           <p>It all begins with an idea. Maybe you want to launch a business. Maybe you 
            want to turn your hobby into something more. Or maybe you have a creative project 
            to share with the world. 
            Whatever it is, the way you tell your story online can make all the difference. 
            Don’t worry about sounding professional. Sound like you. There are over 1.5 million
             websites out there, but your story is what’s going to separate this one from the rest. </p>
            </div>
         </div>
         <div className="row align-items-center">
        <div className="col-md-4">
          <img 
            src={Serviceimage1} 
            alt="Serviceimage1" 
            className="img-fluid img-Services"
          />
          <div className='text-center'>
         <h3>Basic Service</h3>
          <h5>$99</h5>
          <p>Describe important details like price, value, length of service, and why it’s unique. Or use these sections to showcase different key values of your products or services.</p>
            <button className='btn btn-outline-dark'>Book Now</button>
            </div>          
        </div>
        <div className="col-md-4">
          <img 
            src={Serviceimage2} 
            alt="Serviceimage2" 
            className="img-fluid img-Services"
          />
           <div className='text-center'>
           <h3>Intermediate Service</h3>
          <h5>$149</h5>
          <p>Describe important details like price, value, length of service, and why it’s unique. Or use these sections to showcase different key values of your products or services.</p>
         <button className='btn btn-outline-dark'>Book Now</button>
            </div>  
        </div>

        <div className="col-md-4">
          <img 
            src={Serviceimage3} 
            alt="Serviceimage3" 
            className="img-fluid img-Services"
          />
           <div className='text-center'>
           <h3>Advanced Service</h3>
          <h5>$199</h5>
          <p>Describe important details like price, value, length of service, and why it’s unique. Or use these sections to showcase different key values of your products or services.</p>
        <button className='btn btn-outline-dark'>Book Now</button>
            </div>  
        </div>
      </div>
      <div className='service-bg'>
<h2 className='text-white'>Book a free consultation</h2>
<button className='btn btn-success'>Book Now</button>
      </div>
      </div>
  );
}

export default Services;
