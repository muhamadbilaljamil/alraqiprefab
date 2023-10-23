import React from "react";
import { Link } from "react-router-dom";
import contactBanner from "../../assets/image/banner/contact-bg.png";

function ContactWrapperArea() {
  return (
    <>
      <div className="contact-wrapper pt-[200px]">
        <div className="container mx-auto">
          <div className="flex row align-items-center justify-content-lg-center gy-5 justify-center">
            <div className="col-lg-6">
              <div className="contatc-intro-figure">
                <img
                  src={contactBanner}
                  alt="ContactBannerIMG"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-6 flex items-center">
              <div className="contact-info">
                <h3>Contact Info.</h3>
                <ul>
                  <li>
                    <h6>Let’s Email</h6>
                    <a href="mailto:info@alraqiprefab.com">
                      info@alraqiprefab.com
                    </a>
                    <a href="mailto:sales@alraqiprefab.com">
                      sales@alraqiprefab.com
                    </a>
                    <a href="mailto:gm@alraqiprefab.com">gm@alraqiprefab.com</a>
                  </li>
                  <li>
                    <h6>Let’s Contact</h6>
                    <a target="_blank" href="tel:+971 55 827 3554">
                      +971 55 827 3554
                    </a>
                    <a target="_blank" href="tel: +971 52 484 4246">
                      +971 52 484 4246
                    </a>
                  </li>
                  <li>
                    <h6>Location.</h6>
                    <a href="">Al Sajaa Industrial Sharjah UAE</a>
                  </li>
                  <li>
                    <h6>Visit Us.</h6>
                    <a
                      target="_blank"
                      href="https://www.facebook.com/alraqiprefab"
                    >
                      Facebook: https://www.facebook.com/alraqiprefab
                    </a>
                    <a target="_blank" href="https://twitter.com/alraqiprefab">
                      Twitter: https://www.twitter.com/alraqiprefab
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container pt-110 mx-auto">
          <form onSubmit={(e) => e.preventDefault()} id="contact_form">
            <div className="contact-form-wrap">
              <h4>Get a free key stroke quote now</h4>
              <p>
                Your email address will not be published. Required fields are
                marked *
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <div className="custom-input-group">
                    <label htmlFor="name">Name</label>
                    <input
                      required
                      type="text"
                      placeholder="Your name"
                      id="name"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="custom-input-group">
                    <label htmlFor="email">Email</label>
                    <input
                      required
                      type="text"
                      placeholder="Your Email"
                      id="email"
                    />
                  </div>
                </div>
              </div>
              <div className="custom-input-group">
                <textarea
                  cols={20}
                  rows={7}
                  required
                  placeholder="Your message"
                  defaultValue={""}
                />
              </div>
              <div className="custom-input-group">
                <div className="submite-btn">
                  <button type="submit">Send Message</button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="container-fluid p-0">
          <div className="contact-map mt-120">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  title="map"
                  id="gmap_canvas"
                  src={
                    "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3606.3124032406968!2d55.63366711311107!3d25.32729594351256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDE5JzM4LjEiTiA1NcKwMzgnMTAuNiJF!5e0!3m2!1sen!2s!4v1697973650460!5m2!1sen!2s"
                    // "https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=9&ie=UTF8&iwloc=&output=embed"
                  }
                />
                <Link to={"https://123movies-to.org"} />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactWrapperArea;
