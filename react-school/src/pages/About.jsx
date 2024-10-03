import React, { useEffect, useState } from 'react';

const About = () => {

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
            <li className="nav-item active">
              <a className="nav-link" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/courses">Courses</a>
            </li>
            <li className="nav-item">
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
          <h2 className="title mt-5 pt-lg-5 pt-sm-3">About Company</h2>
          <ul className="breadcrumbs-custom-path pb-sm-5 pb-4 mt-2 text-center mb-5">
            <li>
              <a href="/">Home</a>
            </li>
            <li className="active"> / About us </li>
          </ul>
        </div>
      </div>
      <div className="waveWrapper waveAnimation">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none">
          <path
            d="M-5.07,73.52 C149.99,150.00 299.66,-102.13 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            style={{ stroke: 'none' }}
          ></path>
        </svg>
      </div>
      </section>

      <section id="about" className="home-services pt-lg-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="box-wrap">
              <div className="box-wrap-grid">
                <div className="icon">
                  <span className="fa fa-graduation-cap"></span>
                </div>
                <div className="info">
                  <p>Our</p>
                  <h4>
                    <a href="#url">Mission</a>
                  </h4>
                </div>
              </div>
              <p className="mt-4">
                If you are looking for high-quality and reliable online courses.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mt-md-0 mt-4">
            <div className="box-wrap">
              <div className="box-wrap-grid">
                <div className="icon">
                  <span className="fa fa-book"></span>
                </div>
                <div className="info">
                  <p>Our</p>
                  <h4>
                    <a href="#url">Vision</a>
                  </h4>
                </div>
              </div>
              <p className="mt-4">
                If you are looking for high-quality and reliable online courses.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mt-lg-0 mt-4">
            <div className="box-wrap">
              <div className="box-wrap-grid">
                <div className="icon">
                  <span className="fa fa-trophy"></span>
                </div>
                <div className="info">
                  <p>Our</p>
                  <h4>
                    <a href="#url">Goal</a>
                  </h4>
                </div>
              </div>
              <p className="mt-4">
                If you are looking for high-quality and reliable online courses.
              </p>
            </div>
          </div>
        </div>
      </div>
      </section>

      <section className="w3l-aboutblock1 py-5" id="about">
      <div className="container py-lg-5 py-md-4 py-2">
        <div className="row">
          <div className="col-lg-6 align-self">
            <span className="title-small mb-2">About Us</span>
            <h3 className="title-big mx-0">Welcome to the Coursing - all available online courses</h3>
            <p className="mt-lg-4 mt-3">
              Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quae, fugiat.
            </p>
            <p className="mt-3 mb-lg-5">
              Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices ligula. Semper at. Lorem ipsum dolor sit amet elit. Non quae.
            </p>
          </div>
          <div className="col-lg-6 left-wthree-img mt-lg-0 mt-sm-5 mt-4">
            <img src="assets/images/about.jpg" alt="" className="img-fluid radius-image" />
          </div>
        </div>
      </div>
      </section>

      <section className="w3l-servicesblock w3l-servicesblock1 py-5" id="progress">
  <div className="container py-lg-5 py-md-4 py-2">
    <div className="row">
      <div className="col-lg-6 align-self pr-lg-4">
        <div className="progress-info info1">
          <h6 className="progress-title">Figma illustrations <span className="">80%</span></h6>
          <div className="progress">
            <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: '80%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        <div className="progress-info info2">
          <h6 className="progress-title">PHP programming <span className="">95%</span></h6>
          <div className="progress">
            <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: '95%' }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        <div className="progress-info info3">
          <h6 className="progress-title">Web design & development <span className="">90%</span></h6>
          <div className="progress">
            <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: '90%' }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        <div className="progress-info info4">
          <h6 className="progress-title">Adobe Photoshop <span className="">75%</span></h6>
          <div className="progress">
            <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: '75%' }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        <div className="progress-info info2 mb-0">
          <h6 className="progress-title">WordPress design <span className="">95%</span></h6>
          <div className="progress">
            <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: '95%' }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 mt-lg-0 mt-5 pl-lg-4">
        <span className="title-small mb-2">Progress bars</span>
        <h3 className="title-big">What you have in our Popular Online Courses</h3>
        <p className="mt-md-4 mt-3">
          Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at. 
          Lorem ipsum dolor sit amet elit. Non quae, fugiat nihil ad. Lorem ipsum dolor sit amet. 
          Lorem ipsum init dolor sit, amet elit. Dolor ipsum non velit, culpa! elit ut et.
        </p>
        <a href="#url" className="btn btn-primary btn-style mt-md-5 mt-4">Get started now</a>
      </div>
    </div>
  </div>
      </section>

      <section className="w3l-block py-5" id="">
      <div className="container py-lg-5 py-md-3">
        <div className="row">
          <div className="col-lg-6 about-right-faq align-self">
            <span className="title-small mb-2">Start online course</span>
            <h3 className="title-big mx-0">Enhance your skills with best online courses</h3>
            <p className="mt-lg-4 mt-3 mb-lg-5 mb-4">
              Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at
              tempufddfel. Lorem ipsum dolor sit amet elit. Non quae, fugiat libero ut justo, ultrices in
              ligula amet dolor sit.
            </p>
            <div className="two-grids mt-md-0 mt-md-5 mt-4">
              <div className="grids_info">
                <h4>Global Certificate</h4>
                <p className="">Pellen tesque libero ut justo, ultrices in ligula elit sed.</p>
              </div>
              <div className="grids_info">
                <h4>Books and library</h4>
                <p className="">Pellen tesque libero ut justo, ultrices in ligula elit sed.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6 left-wthree-img mt-lg-0 mt-sm-5 mt-4">
            <img src="assets/images/about1.jpg" alt="" className="img-fluid radius-image" />
          </div>
          <div className="col-lg-3 col-6 left-wthree-img mt-lg-0 mt-sm-5 mt-4">
            <img src="assets/images/about2.jpg" alt="" className="img-fluid radius-image" />
          </div>
        </div>
      </div>
      </section>

      <section className="w3l-stats py-5" id="stats">
      <div className="gallery-inner container py-lg-5 py-md-4">
        <span className="title-small text-center mb-1">Our Achievements</span>
        <h3 className="title-big text-center mb-5">Our progress never Ends</h3>
        <div className="row stats-con">
          <div className="col-md-3 col-6 stats_info counter_grid">
            <p className="counter">500</p>
            <span className="plus">+</span><br />
            <h3>Students Enrolled</h3>
          </div>
          <div className="col-md-3 col-6 stats_info counter_grid1">
            <p className="counter">56</p>
            <span className="plus">+</span><br />
            <h3>Courses Uploaded</h3>
          </div>
          <div className="col-md-3 col-6 stats_info counter_grid mt-md-0 mt-4">
            <p className="counter">130</p>
            <span className="plus">k</span><br />
            <h3>Certified Students</h3>
          </div>
          <div className="col-md-3 col-6 stats_info counter_grid2 mt-md-0 mt-4">
            <p className="counter">243</p>
            <span className="plus">+</span><br />
            <h3>Global Teachers</h3>
          </div>
        </div>
      </div>
      </section>

    </div>
  )
}

export default About;