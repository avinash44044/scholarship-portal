import React from 'react'
import { Card } from 'react-bootstrap'

const Contact = () => {
  return (
    <>
    <section id="contact">
        <div className="container">
          <h1 style={{textAlign:"center"}}>Contact us</h1>
          <div className="row">
            <div className="col-6" data-aos="fade-up" data-aos-duration="1000">
              <ul className="contact-list">
                <li>
                  <a
                    href="mailto:support@website.com"
                    className="contact-link"
                    style={{ textDecoration: "none" }}
                  >
                    <i className="ri-mail-line" />
                    <span>: vituniversity@.ac.in</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://vit.ac.in"
                    className="contact-link"
                    style={{ textDecoration: "none" }}
                  >
                    <i className="ri-earth-line" />
                    <span>: www.vit.ac.in</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+0011234567890"
                    className="contact-link"
                    style={{ textDecoration: "none" }}
                  >
                    <i className="ri-phone-line" />
                    <span>:+91234567890</span>
                  </a>
                </li>
                <li>
                  <div className="contact-link">
                    <i className="" />
                    <a
                      href="time"
                      className="contact-link"
                      style={{ textDecoration: "none" }}
                    >
                      <i className="ri-time-line" />
                    </a>
                    <span>: 9:00 AM - 6:00 PM</span>
                  </div>
                </li>
                <li>
                  <a
                    href="location"
                    className="contact-link"
                    style={{ textDecoration: "none" }}
                  >
                    <i className="ri-user-location-line" />
                    <span>:Vit University, Vellore 632014</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6" data-aos="fade-up" data-aos-duration="2000">
              <div className="row">
                <div className="col-md-12 mx-auto">
                  <Card>
                    <form>
                      <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Enter your name"
                        />
                      </div>
                      <br />
                      <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Enter your email"
                        />
                      </div>
                      <br />
                      <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                          className="form-control"
                          id="message"
                          rows={3}
                          placeholder="Enter your message here"
                        />
                      </div>
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </form>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact