import React from 'react'
import aboutImage from '../img/customer-about.jpg'

const About = () => {
  return (
    <div>
      <div>
        <div>
            <h3>Our Story</h3>
            <p>
                Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. 
            </p>
       </div>
       <div>
            <img className='customer-about-image' src={aboutImage}/>
       </div>
      </div>
    </div>
  )
}

export default About
