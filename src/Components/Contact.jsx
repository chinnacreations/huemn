import React from 'react';
import "../App.css";

const Contact = () => {
  return (
    <div className="container my-5">
        <h1 className='text-center'>ABOUT US</h1>
      <div className="row align-items-center">
        <div className="col-md-6">
        <div className="w-75">
        <h3>Contact Us</h3>
         <p>Interested in working together? Fill out some info and we will be in touch shortly. We can’t wait to hear from you!</p>

        </div>
                </div>
        <div className="col-md-6">
         <form>
            <label htmlFor="name">Name</label>
            <div className="row">
<div className="col-6">
    <label htmlFor="Firstname">First Name</label>
<input type="text" className='form-control' placeholder='First Name' />
</div>
<div className="col-6">
    
<label htmlFor="lastname">Last Name</label>
<input type="text" className='form-control' placeholder='Last Name'/>
</div>
<label htmlFor="email" className='mt-3'>Email</label>
<input type="email" className='form-control' placeholder='Email'/>
<label htmlFor="phnumer" className='mt-3'>Phone Number</label>
<input type="number" className='form-control' placeholder='Phone Number'/>
<label htmlFor="message" className='mt-3'>Message</label>
<textarea className='form-control' cols={10}></textarea>
            </div>
         </form>
       <button className='btn btn-success mt-3'>Send</button>
        </div>
      </div>
    </div>
  );
}
export default Contact;
