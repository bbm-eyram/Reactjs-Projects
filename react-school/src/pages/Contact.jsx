import React, { useEffect, useState } from 'react';

const Contact = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);

  // On component mount, check local storage for theme
  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
      document.documentElement.setAttribute('data-theme', currentTheme);
      if (currentTheme === 'dark') {
        setIsDarkMode(true);
      }
    }
  }, []);

  // Function to handle theme switch
  const switchTheme = (e) => {
    if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    }
  };

  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send to an API)
    console.log('Form data submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };


  return (
    <div>
      <header id="site-header" className="fixed-top">
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark stroke">
        <h1>
          <a className="navbar-brand" href="index.html">
            <span className="fa fa-diamond"></span>Study Course <span className="logo">Journey to success</span>
          </a>
        </h1>

        {/* <a className="navbar-brand" href="#index.html">
          <img src="image-path" alt="Your logo" title="Your logo" style={{ height: '35px' }} />
        </a> */}

        <button className="navbar-toggler collapsed bg-gradient" type="button" data-toggle="collapse"
          data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
          <span className="navbar-toggler-icon fa icon-close fa-times"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mx-lg-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/courses">Courses</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/contact">Contact</a>
            </li>
          </ul>

          {/* Search */}
          <div className="search-right">
            <a href="#search" title="search"><span className="fa fa-search" aria-hidden="true"></span></a>
            <div id="search" className="pop-overlay">
              <div className="popup">
                <form action="error.html" method="GET" className="search-box">
                  <input type="search" placeholder="Search" name="search" required autoFocus />
                  <button type="submit" className="btn"><span className="fa fa-search" aria-hidden="true"></span></button>
                </form>
              </div>
              <a className="close" href="#close">x</a>
            </div>
          </div>

          <div className="top-quote mr-lg-2 text-center">
            <a href="#login" className="btn login mr-2"><span className="fa fa-user"></span> Login</a>
          </div>
        </div>

        {/* Toggle switch for light and dark theme */}
      <div className="mobile-position">
        <nav className="navigation">
          <div className="theme-switch-wrapper">
            <label className="theme-switch" htmlFor="checkbox">
              <input
                type="checkbox"
                id="checkbox"
                checked={isDarkMode}
                onChange={switchTheme}
              />
              <div className="mode-container py-1">
                <i className="gg-sun"></i>
                <i className="gg-moon"></i>
              </div>
            </label>
          </div>
        </nav>
      </div>
      </nav>
    </div>
      </header>

      <section className="w3l-breadcrumb">
      <div className="breadcrumb-bg breadcrumb-bg-about py-5">
        <div className="container pt-lg-5 pt-3 p-lg-4 pb-3">
          <h2 className="title mt-5 pt-lg-5 pt-sm-3">Get in touch</h2>
          <ul className="breadcrumbs-custom-path pb-sm-5 pb-4 mt-2 text-center mb-md-5">
            <li><a href="/">Home</a></li>
            <li className="active"> / Contact us </li>
          </ul>
        </div>
      </div>
      <div className="waveWrapper waveAnimation">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none">
          <path d="M-5.07,73.52 C149.99,150.00 299.66,-102.13 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: "none" }}></path>
        </svg>
      </div>
      </section>

      <section className="w3l-contact-1 pb-5" id="contact">
      <div className="contacts-9 py-lg-5 py-md-4">
        <div className="container">
          <div className="d-grid contact-view">
            <div className="cont-details">
              <h4 className="title-small">Get in touch</h4>
              <h3 className="title-big mb-4">Feel free to contact us</h3>
              <p className="mb-sm-5 mb-4">
                Start working with Us, We guarantee that you’ll be able to have any issue resolved within 24 hours.
              </p>

              <div className="cont-top">
                <div className="cont-left text-center">
                  <span className="fa fa-map-marker text-primary"></span>
                </div>
                <div className="cont-right">
                  <h6>Our head office address</h6>
                  <p className="pr-lg-5">Address here, 208 Trainer Avenue street, Illinois, UK - 62617.</p>
                </div>
              </div>

              <div className="cont-top margin-up">
                <div className="cont-left text-center">
                  <span className="fa fa-phone text-primary"></span>
                </div>
                <div className="cont-right">
                  <h6>Call for help</h6>
                  <p>
                    <a href="tel:+(21) 255 999 8888">+(21) 255 999 8888</a>
                  </p>
                </div>
              </div>

              <div className="cont-top margin-up">
                <div className="cont-left text-center">
                  <span className="fa fa-envelope-o text-primary"></span>
                </div>
                <div className="cont-right">
                  <h6>Contact with our support</h6>
                  <p>
                    <a href="mailto:coursing@mail.com" className="mail">coursing@mail.com</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="map-content-9">
              <h5 className="mb-sm-4 mb-3">Write to us</h5>
              <form onSubmit={handleSubmit}>
                <div className="twice-two">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="twice">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <textarea
                  name="message"
                  className="form-control"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <div className="text-right">
                  <button type="submit" className="btn btn-primary btn-style mt-4">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </section>

      <div className="map-iframe">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317718.69319292053!2d-0.3817765050863085!3d51.528307984912544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C+UK!5e0!3m2!1sen!2spl!4v1562654563739!5m2!1sen!2spl"
                width="100%"
                height="400"
                frameBorder="0"
                style={{ border: '0' }}
                allowFullScreen
            ></iframe>
        </div>
    </div>
  )
}

export default Contact;