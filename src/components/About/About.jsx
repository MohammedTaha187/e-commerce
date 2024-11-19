import React from 'react';
import img0 from '../../assets/0.jpg';
import img2 from '../../assets/pic-2.png';
import img3 from '../../assets/pic-3.png';
import img4 from '../../assets/pic-4.png';
import './About.css';

export default function About() {
  return (
    <div className="about-page">
      <section className="hero-section text-center text-white">
        <div className="container py-5">
          <h1 className="display-4 about-page-title">About Us</h1>
          <p className="lead about-page-description">
            We are a leading online clothing store dedicated to bringing you the latest fashion trends.
          </p>
        </div>
      </section>

      <section className="our-story py-5">
        <div className="container">
          <h2 className="about-page-subheading text-center mb-4">Our Story</h2>
          <div className="row d-flex align-items-center">
            <div className="col-md-6">
              <p>
                Founded in 2020, we set out to revolutionize the clothing industry by combining quality, style, and affordability. Our mission is simple – to make fashion accessible for everyone, everywhere.
              </p>
              <p>
                We are passionate about offering a wide variety of styles for every occasion. Whether you’re looking for casual wear, formal attire, or something trendy, we’ve got you covered.
              </p>
            </div>
            <div className="col-md-6">
              <img src={img0} alt="Our Story" className="img-fluid rounded shadow-lg"/>
            </div>
          </div>
        </div>
      </section>

      <section className="our-mission py-5 bg-light">
        <div className="container">
          <h2 className="about-page-subheading text-center mb-4">Our Mission</h2>
          <p className="text-center about-page-paragraph">
            Our mission is to provide high-quality clothing that inspires confidence and promotes self-expression. We believe that everyone should feel comfortable and stylish in what they wear, no matter the occasion.
          </p>
        </div>
      </section>

      <section className="our-values py-5">
        <div className="container">
          <h2 className="about-page-subheading text-center mb-4">Our Values</h2>
          <div className="row">
            <div className="col-md-4 text-center">
              <h4 className="about-page-values-title">Quality</h4>
              <p className="about-page-values-text">We prioritize quality and ensure our products are made with the best materials for lasting comfort and style.</p>
            </div>
            <div className="col-md-4 text-center">
              <h4 className="about-page-values-title">Customer Satisfaction</h4>
              <p className="about-page-values-text">Your satisfaction is our top priority. We provide easy returns, fast delivery, and excellent customer service.</p>
            </div>
            <div className="col-md-4 text-center">
              <h4 className="about-page-values-title">Sustainability</h4>
              <p className="about-page-values-text">We are committed to sustainability and reducing our environmental impact by sourcing ethically and responsibly.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="team py-5 bg-light">
        <div className="container">
          <h2 className="about-page-subheading text-center mb-4">Meet the Team</h2>
          <div className="row d-flex justify-content-center">
            <div className="col-md-4 text-center">
              <img src={img2} alt="Mariam CEO" className="img-fluid rounded-circle mb-3" />
              <h4 className="about-page-team-name">Mariam</h4>
              <p>CEO & Founder</p>
            </div>
            <div className="col-md-4 text-center">
              <img src={img3} alt="Mohammed Marketing" className="img-fluid rounded-circle mb-3" />
              <h4 className="about-page-team-name">Mohammed</h4>
              <p>Head of Marketing</p>
            </div>
            <div className="col-md-4 text-center">
              <img src={img4} alt="Sara Product Manager" className="img-fluid rounded-circle mb-3" />
              <h4 className="about-page-team-name">Sara</h4>
              <p>Product Manager</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-info py-5">
        <div className="container text-center">
          <h2 className="about-page-subheading mb-4">Contact Us</h2>
          <p>If you have any questions, feel free to reach out to us. We would love to hear from you!</p>
          <p>Email: <a href="mailto:ant833292@gmail.com">ant833292@gmail.com</a> | Phone: +201212299383</p>
        </div>
      </section>
    </div>
  );
}
