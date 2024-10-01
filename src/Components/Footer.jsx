import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { FaInstagram, FaFacebook , FaTwitter, FaGoogle, FaLinkedin, FaGithub} from "react-icons/fa6";
export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='/#' className='me-4 text-reset'>
          <FaFacebook size={25} />
          </a>
          <a href='/#' className='me-4 text-reset'>
          <FaTwitter size={25} />
          </a>
          <a href='/#' className='me-4 text-reset'>
          <FaGoogle size={25} />
          </a>
          <a href='/#' className='me-4 text-reset'>
            <FaInstagram size={25} />
          </a>
          <a href='/#' className='me-4 text-reset'>
          <FaLinkedin size={25} />
          </a>
          <a href='/#' className='me-4 text-reset'>
          <FaGithub size={25} />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>

              <p>
                <a href='/#' className='text-reset'>
                  Home
                </a>
              </p>
              <p>
                <a href='/#' className='text-reset'>
                  About Us
                </a>
              </p>
              <p>
                <a href='/#' className='text-reset'>
                  Our Products
                </a>
              </p>
              <p>
                <a href='/#' className='text-reset'>
                  Our Services
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='/#' className='text-reset'>
                  Arwads
                </a>
              </p>
              <p>
                <a href='/#' className='text-reset'>
                  Terms & Conditions
                </a>
              </p>
              <p>
                <a href='/#' className='text-reset'>
                  Privacy Policy
                </a>
              </p>
              <p>
                <a href='/#' className='text-reset'>
                  Contact US
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                Moosapet, HYderabad, Telangana, 500084
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                info@example.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright:
        <a className='text-reset fw-bold' href='https://mybrand.com/'>
          MyBrand.com
        </a>
      </div>
    </MDBFooter>
  );
}