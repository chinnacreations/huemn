import React from 'react';
import "../App.css";
import AboutImage from '../Images/About/Chair+.png';

const About = () => {
  return (
    <div className="container my-5">
        <h1 className='text-center'>ABOUT US</h1>
      <div className="row align-items-center">
        <div className="col-md-7">
          <img 
            src={AboutImage} 
            alt="About" 
            className="img-fluid"
          />
        </div>
        <div className="col-md-5">
          <h1>More about our brand</h1>
          <p>
          This is where your description or content will go. You can add any information about the image or the "About" section here.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
