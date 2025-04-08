import React, { useState } from 'react';
import './Home.css';
import img1 from '../../assets/section2-img1.jpg'
import img2 from '../../assets/section2-img2.jpg'
import img3 from '../../assets/section2-img3.jpg'
import imgHover from '../../assets/image_hover.jpg'
import img4 from '../../assets/section4-img4.jpg'
import img5 from '../../assets/section4-img5.jpg'
import img6 from '../../assets/section4-img6.jpg'
import img7 from '../../assets/section4-img7.jpg'
import img8 from '../../assets/section4-img8.jpg'
import img9 from '../../assets/section4-img9.jpg'
import img10 from '../../assets/section5-img10.png'
import img11 from '../../assets/section6-img11.jpg'
import img12 from '../../assets/section7-img12.png'
import img13 from '../../assets/section7-img13.jpg'
import img14 from '../../assets/section7-img14.jpg'
import img15 from '../../assets/section7-img15.jpg'
import logo from '../../assets/logo.png';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import yelp from '../../assets/yelp.png';
import linkedIn from '../../assets/linked-in.png';

const imageList = [img4, img5, img6, img7, img8, img9];

function Home() {

    const [selectedImage, setSelectedImage] = useState(img4);

    return (
        <div className='homeContainer'>
            <div className='firstSection'>
                <h2>FIND YOUR DREAM HOME</h2>
                <div className='searchSection'>
                    <div className='search-container'>
                        <div className='dropdown-wrapper'>
                            <select className='dropdown'>
                                <option>Location</option>
                                <option>New York</option>
                                <option>Los Angeles</option>
                                <option>San Francisco</option>
                            </select>
                        </div>

                        <div className='dropdown-wrapper'>
                            <select className='dropdown'>
                                <option>Type</option>
                                <option>House</option>
                                <option>Apartment</option>
                                <option>Condo</option>
                            </select>
                        </div>

                        <div className='dropdown-wrapper'>
                            <select className='dropdown'>
                                <option>Bedrooms</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3+</option>
                            </select>
                        </div>

                        <div className='dropdown-wrapper'>
                            <select className='dropdown'>
                                <option>Bathrooms</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3+</option>
                            </select>
                        </div>

                        <div className='dropdown-wrapper'>
                            <select className='dropdown'>
                                <option>Price Range</option>
                                <option>$0 - $500K</option>
                                <option>$500K - $1M</option>
                                <option>$1M+</option>
                            </select>
                        </div>

                        <div className='dropdown-wrapper'>
                            <select className='dropdown'>
                                <option>Sort By</option>
                                <option>Price</option>
                                <option>Newest</option>
                                <option>Most Popular</option>
                            </select>
                        </div>
                    </div>
                    <button className="search-btn">Search</button>
                </div>
            </div>
            <div className='secondSection'>
                <h1>GET IT SOLD</h1>
                <div className='section2-wrapper'>
                    <div className='image-hover-wrapper'>
                        <img src={img1} alt="" className='normal-img' />
                        <img src={imgHover} alt="" className='hover-img' />
                    </div>
                    <div>
                        <h4>
                            Top Residential Sales Last 5 Years
                        </h4>
                        <p>
                            We helped nearly 90 clients in 2021, and closed 28.5 million in sales! Our team works hard everyday to grow and learn, so that we may continue to excel in our market. Our clients deserve our best, & we want to make sure our best is better every year.
                        </p>
                    </div>
                </div>
                <div className='section2-wrapper'>
                    <div>
                        <h4>
                            Don't Just List it...
                        </h4>
                        <h6>
                            Get it SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home.
                        </h6>
                    </div>
                    <div className='image-hover-wrapper'>
                        <img src={img2} alt="" className='normal-img' />
                        <img src={imgHover} alt="" className='hover-img' />
                    </div>
                </div>
                <div className='section2-wrapper'>
                    <div className='image-hover-wrapper'>
                        <img src={img3} alt="" className='normal-img' />
                        <img src={imgHover} alt="" className='hover-img' />
                    </div>
                    <div>

                        <h4>
                            Guide to Buyers
                        </h4>
                        <h6>
                            Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!
                        </h6>
                    </div>
                </div>
            </div>
            <div className='thirdSection'>
                <h3>BUY OR SELL YOUR HOUSE IN FEW
                    <br></br>SECOND IN MARCI METSGER HOMES</h3>
                <div>
                    <button className='thirdSection-sbmtBtn'>SUBMIT PROPERTY</button>
                    <button className='thirdSection-brwsBtn'>BROWSE PROPERTY</button>
                </div>

            </div>
            <div className='fourthSection'>
                <h1>GALLERY</h1>

                <div
                    className='gallery-container'
                    style={{ backgroundImage: `url(${selectedImage})` }}
                >
                    <div className='galleryOption'>
                        {imageList.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Gallery ${index + 1}`}
                                onClick={() => setSelectedImage(img)}
                                className={selectedImage === img ? 'active-thumb' : 'inactive-thumb'}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className='fifthSection'>
                <div>
                    <img src={img10} alt="" />
                    <div>
                        <h1>OUR SERVICES</h1>
                        <h6>WHAT WE DO FOR YOU</h6>
                        <h3>Real Estate Done Right</h3>
                        <p>Nervous about your property adventure? Don’t be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!</p>
                        <h3>Commercial & Residential</h3>
                        <p>Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put you hard-earned dollars.</p>
                        <h3>Rely on Expertise</h3>
                        <p>If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.</p>
                    </div>
                </div>
            </div>
            <div className="sixthSection">
                <div className="section6-left">
                    <h2>Meet Our Founder</h2>
                    <h3>Marci J. Metzger</h3>
                    <p>
                        Marci was a REALTOR®, then a licensed Broker, in Washington State. Now enjoying the sunshine in Southern Nevada, she brings decades of expertise to her clients. Having helped buyers and sellers across markets since 1995, she is truly a wealth of knowledge.
                    </p>
                </div>

                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src={img11} alt="Marci J. Metzger" />
                            <div className="info-box">
                                <h4>REALTOR® FOR NEARLY 3 DECADES</h4>
                                <p>📞 206-919-6886</p>
                            </div>
                        </div>
                        <div className="flip-card-back">
                            <p>
                                “I love that small-town feeling that our community offers — from
                                golf courses and parks to easy access to Las Vegas. Working or
                                retired, fast-paced or looking to relax... there’s a place for you
                                here.”
                            </p>
                            <h4>- Marci J. Metzger</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className='seventhSection'>
                <div className='logoContainer'>
                    <img src={img12} alt="Logo 1" />
                    <img src={img13} alt="Logo 2" />
                    <img src={img14} alt="Logo 3" />
                    <img src={img15} alt="Logo 4" />
                </div>
            </div>

            <div className='eighthSection'>
  <div>
    <div className='socials-container'>
      <img src={facebook} alt="Facebook" />
      <img src={instagram} alt="Instagram" />
      <img src={linkedIn} alt="LinkedIn" />
      <img src={yelp} alt="Yelp" />
    </div>

    <div className='section-divider'></div>

    <div className='companyDetails-container'>
      <div className='companyDetails-left'>
        <h2>Get in touch</h2>
        <p>Marci Metzger - THE RIDGE REALTY GROUP</p>
        <p>3190 HW-160, Suite F, Pahrump, Nevada 89048, United States</p>
        <p>(206) 919-6886</p>
        <h6>Office Hours</h6>
        <p>Open daily 8:00 am - 7:00 pm</p>
        <p>Appointments outside office hours available upon request. Just call!</p>
      </div>
      <div className='companyDetails-right'>
        <h2>PROPERTIES CITIES</h2>
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.2247632086513!2d-115.98308832409823!3d36.227450003812955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c7c743d4f5c6ff%3A0xf0c885c1fda72bfc!2s3190%20NV-160%20F%2C%20Pahrump%2C%20NV%2089048%2C%20USA!5e0!3m2!1sen!2sph!4v1681000000000!5m2!1sen!2sph"
          width="100%"
          height="200"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>

    <div className='section-divider'></div>

    <div className='message-container'>
      <h2>MESSAGE US</h2>
      <input type="text" placeholder="Your Name" />
      <input type="email" placeholder="Your Email" />
      <input type="text" placeholder="Your Message" />
      <button>Send</button>
    </div>

    <div className='section-divider'></div>

    <div>
      <p>© 2023 Marci METZGER Homes - All Rights Reserved</p>
    </div>
  </div>
</div>


        </div>
    );
}

export default Home;
