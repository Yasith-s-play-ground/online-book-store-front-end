import React from 'react'

import Meta from '../components/Meta';

const Contact = () => {
  return (
    <>
      <Meta title={"Contact"}/>
      <div className='contact-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d696.1080294369616!2d80.33319330987007!3d6.22202824044221!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae1646ff273cfe3%3A0x754e50b0196b83d6!2sUdugama%20Main%20Bus%20Station!5e0!3m2!1sen!2slk!4v1695440830976!5m2!1sen!2slk" 
              width="600" 
              height="450" 
              className='border-0 w-100' 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
            </div>
            <div className='col-12 mt-5'>
              <div className='contact-inner-wrapper d-flex justify-content-between'>
                <div>
                  <h3 className='contact-title mb-4'>Contact</h3>
                  <form action='' className='d-flex flex-column gap-15'>
                    <div>
                      <input 
                      type='text' 
                      className='form-control' 
                      placeholder='Name'/>
                    </div>
                    <div>
                      <input 
                      type='text' 
                      className='form-control' 
                      placeholder='Email'/>
                    </div>
                    <div>
                      <input 
                      type='text' 
                      className='form-control' 
                      placeholder='Phone Number'/>
                    </div>
                    <div>
                      <textarea
                      name=''
                      id=''
                      className='w-100 form-control'
                      cols="30"
                      rows="4"
                      placeholder='Comments'
                      ></textarea>
                    </div>
                    <div>
                      <button className='button border-0'>Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className='contact-title mb-4'>Get in Tuch with Us</h3>
                  <div>
                    <ul className='ps-0'>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <img 
                        src='images/home-3.png' 
                        alt='home' 
                        className='fs-5'
                        />
                        <address className='mb-0'>
                          Ranasinghe Tea Room, Ketagoda, Udugama, Galle 
                        </address>
                        </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <img 
                        src='images/phone-call-3.png'
                        alt='phone' 
                        className='fs-5'
                        />
                        <a href='tel:+94 912285339'>+94 912285339</a>
                        </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <img 
                        src='images/mail-3.png' 
                        alt='mail' 
                        className='fs-5'
                        />
                        <a href='mailto:kasunranasingha1@gmail.com'>kasunranasingha1@gmail.com</a>
                        </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <img 
                        src='images/info-2.png' 
                        alt='info' 
                        className='fs-5'
                        />
                        <p className='mb-0'>Mondy - Friday 10 AM - 8 PM </p>
                        </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;