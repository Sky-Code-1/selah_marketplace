import React from 'react'
import aboutImage from '../img/customer-about.jpg'
import { metrics } from '../app/utilities'
import Tag from '../components/Tag'

const About = () => {
  return (
    <div className='about-page'>
      <h1>About Us</h1>
      <div className='about-section-1'>
        <div>
          <Tag status={<h3>Our Story</h3>} />
          <p>
              Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. 
          </p>
          <p>
              Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. 
          </p>
       </div>
       <div>
          <img className='customer-about-image' src={aboutImage}/>
       </div>
      </div>
      <div>
        <div className=' margin-4rem'></div>
        <Tag status={<h3>Our Aim</h3>} />
        <div className='trending-product-list category-buttons-container'>
          {metrics.map(metric => <div className='about-metric-div'><>
            <div className='icon-cover'>
              <div>
                {metric.element}
              </div>
            </div>
            <p>{metric.name}</p></></div>)
          }
        </div>
      </div>
      <div>
        <Tag status={'The Team'} category={<p>Meet the great minds behind the project</p>} />
        <div>
          
        </div>
      </div>
    </div>
  )
}

export default About
