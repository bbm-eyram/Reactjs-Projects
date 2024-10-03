import React, { useEffect, useState } from 'react';

const Courses = () => {

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
            <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li>
            <li className="nav-item active">
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
          <h2 className="title mt-5 pt-lg-5 pt-sm-3">Online Courses</h2>
          <ul className="breadcrumbs-custom-path pb-sm-5 pb-4 mt-2 text-center mb-md-5">
            <li><a href="/">Home</a></li>
            <li className="active"> / Courses </li>
          </ul>
        </div>
      </div>
      <div className="waveWrapper waveAnimation">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none">
          <path d="M-5.07,73.52 C149.99,150.00 299.66,-102.13 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none' }}></path>
        </svg>
      </div>
      </section>

      <section className="w3l-courses">
    <div className="blog pb-5" id="courses">
        <div className="container py-lg-5 py-md-4 py-2">
            <div className="row">
                <div className="col-lg-4 col-md-6 item">
                    <div className="card">
                        <div className="card-header p-0 position-relative">
                            <a href="#course-single" className="zoom d-block">
                                <img className="card-img-bottom d-block" src="assets/images/c1.jpg"
                                    alt="Card image cap" />
                            </a>
                            <div className="post-pos">
                                <a href="#reciepe" className="receipe blue">Beginner</a>
                            </div>
                        </div>
                        <div className="card-body course-details">
                            <div className="price-review d-flex justify-content-between mb-1 align-items-center">
                                <p>$35.00</p>
                                <ul className="rating-star">
                                    <li><span className="fa fa-star"></span></li>
                                    <li><span className="fa fa-star"></span></li>
                                    <li><span className="fa fa-star"></span></li>
                                    <li><span className="fa fa-star"></span></li>
                                    <li><span className="fa fa-star-o"></span></li>
                                </ul>
                            </div>
                            <a href="#course-single" className="course-desc">Open Programming Courses for everyone : Python
                            </a>
                            <div className="course-meta mt-4">
                                <div className="meta-item course-lesson">
                                    <span className="fa fa-clock-o"></span>
                                    <span className="meta-value"> 20 hrs </span>
                                </div>
                                <div className="meta-item course-">
                                    <span className="fa fa-user-o"></span>
                                    <span className="meta-value"> 50 </span>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="author align-items-center">
                                <img src="assets/images/a1.jpg" alt="" className="img-fluid rounded-circle" />
                                <ul className="blog-meta">
                                    <li>
                                        <span className="meta-value mx-1">by</span> <a href="#author"> Olivia</a>
                                    </li>
                                    <li>
                                        <span className="meta-value mx-1">in</span> <a href="#author"> Programing</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 item mt-md-0 mt-5">
                    <div className="card">
                        <div className="card-header p-0 position-relative">
                            <a href="#course-single" className="zoom d-block">
                                <img className="card-img-bottom d-block" src="assets/images/c2.jpg"
                                    alt="Card image cap" />
                            </a>
                            <div className="course-price-badge"> Free</div>
                            <div className="post-pos">
                                <a href="#reciepe" className="receipe blue">Beginner</a>
                            </div>
                        </div>
                        <div className="card-body course-details">
                            <div className="price-review d-flex justify-content-between mb-1 align-items-center">
                                <p>$0.00</p>
                                <ul className="rating-star">
                                    <li><span className="fa fa-star"></span></li>
                                    <li><span className="fa fa-star"></span></li>
                                    <li><span className="fa fa-star"></span></li>
                                    <li><span className="fa fa-star"></span></li>
                                    <li><span className="fa fa-star-o"></span></li>
                                </ul>
                            </div>
                            <a href="#course-single" className="course-desc">Learning to Write as a clean Professional
                                Author</a>
                            <div className="course-meta mt-4">
                                <div className="meta-item course-lesson">
                                    <span className="fa fa-clock-o"></span>
                                    <span className="meta-value"> 20 hrs </span>
                                </div>
                                <div className="meta-item course-">
                                    <span className="fa fa-user-o"></span>
                                    <span className="meta-value"> 50 </span>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="author align-items-center">
                                <img src="assets/images/a2.jpg" alt="" className="img-fluid rounded-circle" />
                                <ul className="blog-meta">
                                    <li>
                                        <span className="meta-value mx-1">by</span> <a href="#author"> Isabella</a>
                                    </li>
                                    <li>
                                        <span className="meta-value mx-1">in</span> <a href="#author"> Teaching</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 item mt-lg-0 mt-5">
                    <div className="card">
                        <div className="card-header p-0 position-relative">
                            <a href="#course-single" className="zoom d-block">
                                <img className="card-img-bottom d-block" src="assets/images/c3.jpg"
                                    alt="Card image cap" />
                            </a>
                            <div className="course-price-badge-new"> New</div>
                        </div>
                        <div className="card-body course-details">
                            <div className="price-review d-flex justify-content-between mb-1 align-items-center">
                                <p>$49.00</p>
                                <ul className="rating-star">
                                    <li><span className="fa fa-star"></span></li>
                                    <li><span className="fa fa-star"></span></li>
                                    <li><span className="fa fa-star"></span></li>
                                    <li><span className="fa fa-star"></span></li>
                                    <li><span className="fa fa-star-o"></span></li>
                                </ul>
                            </div>
                            <a href="#course-single" className="course-desc">Learn Master JQuery in a Short Period of Time</a>
                            <div className="course-meta mt-4">
                                <div className="meta-item course-lesson">
                                    <span className="fa fa-clock-o"></span>
                                    <span className="meta-value"> 20 hrs </span>
                                </div>
                                <div className="meta-item course-">
                                    <span className="fa fa-user-o"></span>
                                    <span className="meta-value"> 50 </span>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="author align-items-center">
                                <img src="assets/images/a3.jpg" alt="" className="img-fluid rounded-circle" />
                                <ul className="blog-meta">
                                    <li>
                                        <span className="meta-value mx-1">by</span> <a href="#author"> Alexander</a>
                                    </li>
                                    <li>
                                        <span className="meta-value mx-1">in</span> <a href="#author"> Programing</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 item mt-5 pt-lg-2">
                    <div className="card">
                        <div className="card-header p-0 position-relative">
                            <a href="#course-single" className="zoom d-block">
                                <img className="card-img-bottom d-block" src="assets/images/c4.jpg"
                                    alt="Card image cap" />
                            </a>
                            <div className="post-pos">
                                <a href="#reciepe" className="receipe blue">Beginner</a>
                            </div>
                        </div>
                        <div className="card-body course-details">
                            <div className="price-review d-flex justify-content-between mb-1 align-items-center">
                                <p>$35.00</p>
                                <ul className="rating-star">
                                    <li><span className="fa fa-star"></span></li>
                                    <li><span className="fa fa-star"></span></li>
                                    <li><span className="fa fa-star"></span></li>
                                    <li><span className="fa fa-star"></span></li>
                                    <li><span className="fa fa-star-o"></span></li>
                                </ul>
                            </div>
                            <a href="#course-single" className="course-desc">Open Programming Courses for everyone : Python
                            </a>
                            <div className="course-meta mt-4">
                                <div className="meta-item course-lesson">
                                    <span className="fa fa-clock-o"></span>
                                    <span className="meta-value"> 20 hrs </span>
                                </div>
                                <div className="meta-item course-">
                                    <span className="fa fa-user-o"></span>
                                    <span className="meta-value"> 50 </span>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="author align-items-center">
                                <img src="assets/images/a1.jpg" alt="" className="img-fluid rounded-circle" />
                                <ul className="blog-meta">
                                    <li>
                                        <span className="meta-value mx-1">by</span> <a href="#author"> Olivia</a>
                                    </li>
                                    <li>
                                        <span className="meta-value mx-1">in</span> <a href="#author"> Programming</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 item mt-md-0 mt-5">
                    <div className="card">
                        <div className="card-header p-0 position-relative">
                            <a href="#course-single" className="zoom d-block">
                                <img className="card-img-bottom d-block" src="assets/images/c2.jpg"
                                    alt="Card image cap" />
                            </a>
                            <div className="course-price-badge"> Free</div>
                            <div className="post-pos">
                                <a href="#reciepe" className="receipe blue">Beginner</a>
                            </div>
                        </div>
                        <div className="card-body course-details">
                            <div className="price-review d-flex justify-content-between mb-1 align-items-center">
                                <p>$0.00</p>
                                <ul className="rating-star">
                                    <li><span className="fa fa-star"></span></li>
                                    <li><span className="fa fa-star"></span></li>
                                    <li><span className="fa fa-star"></span></li>
                                    <li><span className="fa fa-star"></span></li>
                                    <li><span className="fa fa-star-o"></span></li>
                                </ul>
                            </div>
                            <a href="#course-single" className="course-desc">Learning to Write as a clean Professional
                                Author</a>
                            <div className="course-meta mt-4">
                                <div className="meta-item course-lesson">
                                    <span className="fa fa-clock-o"></span>
                                    <span className="meta-value"> 20 hrs </span>
                                </div>
                                <div className="meta-item course-">
                                    <span className="fa fa-user-o"></span>
                                    <span className="meta-value"> 50 </span>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="author align-items-center">
                                <img src="assets/images/a2.jpg" alt="" className="img-fluid rounded-circle" />
                                <ul className="blog-meta">
                                    <li>
                                        <span className="meta-value mx-1">by</span> <a href="#author"> Isabella</a>
                                    </li>
                                    <li>
                                        <span className="meta-value mx-1">in</span> <a href="#author"> Teaching</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 item mt-5 pt-lg-2">
                    <div className="card">
                        <div className="card-header p-0 position-relative">
                            <a href="#course-single" className="zoom d-block">
                                <img className="card-img-bottom d-block" src="assets/images/c3.jpg"
                                    alt="Card image cap" />
                            </a>
                            <div className="course-price-badge-new"> New</div>
                        </div>
                        <div className="card-body course-details">
                            <div className="price-review d-flex justify-content-between mb-1 align-items-center">
                                <p>$49.00</p>
                                <ul className="rating-star">
                                    <li><span className="fa fa-star"></span></li>
                                    <li><span className="fa fa-star"></span></li>
                                    <li><span className="fa fa-star"></span></li>
                                    <li><span className="fa fa-star"></span></li>
                                    <li><span className="fa fa-star-o"></span></li>
                                </ul>
                            </div>
                            <a href="#course-single" className="course-desc">Learn Master JQuery in a Short Period of Time</a>
                            <div className="course-meta mt-4">
                                <div className="meta-item course-lesson">
                                    <span className="fa fa-clock-o"></span>
                                    <span className="meta-value"> 20 hrs </span>
                                </div>
                                <div className="meta-item course-">
                                    <span className="fa fa-user-o"></span>
                                    <span className="meta-value"> 50 </span>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="author align-items-center">
                                <img src="assets/images/a3.jpg" alt="" className="img-fluid rounded-circle" />
                                <ul className="blog-meta">
                                    <li>
                                        <span className="meta-value mx-1">by</span> <a href="#author"> Alexander</a>
                                    </li>
                                    <li>
                                        <span className="meta-value mx-1">in</span> <a href="#author"> Programing</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Pagination */}
            <div className="pagination-wrapper mt-5 pt-lg-3 text-center">
                <ul className="page-pagination">
                    <li><a className="next" href="#url"><span className="fa fa-angle-left"></span> Prev</a></li>
                    <li><span aria-current="page" className="page-numbers current">1</span></li>
                    <li><a className="page-numbers" href="#url">2</a></li>
                    <li><a className="page-numbers" href="#url">3</a></li>
                    <li><a className="page-numbers" href="#url">....</a></li>
                    <li><a className="next" href="#url">Next <span className="fa fa-angle-right"></span></a></li>
                </ul>
            </div>
            {/* //Pagination */}
        </div>
    </div>
      </section>

    </div>
  )
}

export default Courses;