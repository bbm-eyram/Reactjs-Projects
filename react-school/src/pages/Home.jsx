import React, { useEffect, useState } from 'react';

const Home = () => {

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



  const testimonialsData = [
    {
      name: 'John Wilson',
      role: 'Student',
      feedback: 'Lorem ipsum dolor sit amet elit. Velit beatae laudantium voluptate rem ullam dolore nisi voluptatibus esse quasi, doloribus tempora. Dolores molestias adipisci dolo amet!.',
      imgSrc: 'assets/images/team1.jpg',
    },
    {
      name: 'Julia Sakura',
      role: 'Student',
      feedback: 'Lorem ipsum dolor sit amet elit. Velit beatae laudantium voluptate rem ullam dolore nisi voluptatibus esse quasi, doloribus tempora. Dolores molestias adipisci dolo amet!.',
      imgSrc: 'assets/images/team2.jpg',
    },
    {
      name: 'Roy Linderson',
      role: 'Student',
      feedback: 'Lorem ipsum dolor sit amet elit. Velit beatae laudantium voluptate rem ullam dolore nisi voluptatibus esse quasi, doloribus tempora. Dolores molestias adipisci dolo amet!.',
      imgSrc: 'assets/images/team3.jpg',
    },
    {
      name: 'Mike Thyson',
      role: 'Student',
      feedback: 'Lorem ipsum dolor sit amet elit. Velit beatae laudantium voluptate rem ullam dolore nisi voluptatibus esse quasi, doloribus tempora. Dolores molestias adipisci dolo amet!.',
      imgSrc: 'assets/images/team4.jpg',
    },
    {
      name: 'Laura Gill',
      role: 'Student',
      feedback: 'Lorem ipsum dolor sit amet elit. Velit beatae laudantium voluptate rem ullam dolore nisi voluptatibus esse quasi, doloribus tempora. Dolores molestias adipisci dolo amet!.',
      imgSrc: 'assets/images/team2.jpg',
    },
    {
      name: 'Smith Johnson',
      role: 'Student',
      feedback: 'Lorem ipsum dolor sit amet elit. Velit beatae laudantium voluptate rem ullam dolore nisi voluptatibus esse quasi, doloribus tempora. Dolores molestias adipisci dolo amet!.',
      imgSrc: 'assets/images/team3.jpg',
    },
  ];

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
                <li className="nav-item active">
                  <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
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

      <section className="w3l-main-slider" id="home">
        <div className="companies20-content">
          <div className="owl-one owl-carousel owl-theme">
            {['50% Discount on all Popular Courses', 'Learn and Improve Yourself in Less Time', 'Be More Productive to Be More Successful', 'Enhance your skills with best online courses'].map((text, idx) => (
              <div className="item" key={idx}>
                <li>
                  <div className="slider-info banner-view bg bg2">
                    <div className="banner-info">
                      <div className="container">
                        <div className="banner-info-bg">
                          <h5>{text}</h5>
                          <p className="mt-4 pr-lg-4">Take the first step to your journey to success with us</p>
                          <a className="btn btn-style btn-primary mt-sm-5 mt-4 mr-2" href="about.html">Ready to get started?</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </div>
            ))}
          </div>
        </div>

        <div className="waveWrapper waveAnimation">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none">
            <path d="M-5.07,73.52 C149.99,150.00 299.66,-102.13 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: "none" }}></path>
          </svg>
        </div>
      </section>

      <section className="w3l-courses">
        <div className="blog pb-5" id="courses">
          <div className="container py-lg-5 py-md-4 py-2">
            <h5 className="title-small text-center mb-1">Join our learn Courses</h5>
            <h3 className="title-big text-center mb-sm-5 mb-4">Featured Online <span>Courses</span></h3>
            <div className="row">
              {/* Course 1 */}
              <div className="col-lg-4 col-md-6 item">
                <div className="card">
                  <div className="card-header p-0 position-relative">
                    <a href="#course-single" className="zoom d-block">
                      <img className="card-img-bottom d-block" src="assets/images/c1.jpg" alt="Card image cap" />
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
                    <a href="#course-single" className="course-desc">Open Programming Courses for everyone: Python</a>
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
                        <li><span className="meta-value mx-1">by</span> <a href="#author">Olivia</a></li>
                        <li><span className="meta-value mx-1">in</span> <a href="#author">Programming</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Course 2 */}
              <div className="col-lg-4 col-md-6 item mt-md-0 mt-5">
                <div className="card">
                  <div className="card-header p-0 position-relative">
                    <a href="#course-single" className="zoom d-block">
                      <img className="card-img-bottom d-block" src="assets/images/c5.jpg" alt="Card image cap" />
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
                    <a href="#course-single" className="course-desc">Learning to Write as a clean and Professional Author</a>
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
                        <li><span className="meta-value mx-1">by</span> <a href="#author">Isabella</a></li>
                        <li><span className="meta-value mx-1">in</span> <a href="#author">Teaching</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Course 3 */}
              <div className="col-lg-4 col-md-6 item mt-lg-0 mt-5">
                <div className="card">
                  <div className="card-header p-0 position-relative">
                    <a href="#course-single" className="zoom d-block">
                      <img className="card-img-bottom d-block" src="assets/images/c6.jpg" alt="Card image cap" />
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
                      <img src="assets/images/a4.jpg" alt="" className="img-fluid rounded-circle" />
                      <ul className="blog-meta">
                        <li><span className="meta-value mx-1">by</span> <a href="#author">William</a></li>
                        <li><span className="meta-value mx-1">in</span> <a href="#author">Programming</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 text-more">
              <p className="pt-md-3 sample text-center">
                Control your personal preference settings to get notified about appropriate courses
                <a href="courses.html">View All Courses <span className="pl-2 fa fa-long-arrow-right"></span></a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w3l-features py-5" id="facilities">
      <div className="call-w3 py-lg-5 py-md-4 py-2">
        <div className="container">
          <div className="row main-cont-wthree-2">
            <div className="col-lg-5 feature-grid-left">
              <h5 className="title-small mb-1">Study and graduate</h5>
              <h3 className="title-big mb-4">Our Facilities</h3>
              <p className="text-para">
                Curabitur id gravida risus. Fusce eget ex fermentum, ultricies nisi ac sed, lacinia est. Quisque ut lectus consequat,
                venenatis eros et, commodo risus. Nullam sit amet laoreet elit. Suspendisse non magna a velit efficitur.
              </p>
              <p className="mt-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas ab qui impedit, libero illo quia sequi
                quibusdam iure. Error minus quod reprehenderit quae dolor velit soluta animi voluptate dicta enim? Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, provident!
              </p>
              <a href="#url" className="btn btn-primary btn-style mt-md-5 mt-4">Discover More</a>
            </div>
            <div className="col-lg-7 feature-grid-right mt-lg-0 mt-5">
              <div className="call-grids-w3 d-grid">
                <div className="grids-1 box-wrap">
                  <a href="#more" className="icon"><span className="fa fa-certificate"></span></a>
                  <h4><a href="#feature" className="title-head">Global Certificate</a></h4>
                  <p>Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor amet laoreet.</p>
                </div>
                <div className="grids-1 box-wrap">
                  <a href="#more" className="icon"><span className="fa fa-book"></span></a>
                  <h4><a href="#feature" className="title-head">Books & Library</a></h4>
                  <p>Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor amet laoreet.</p>
                </div>
                <div className="grids-1 box-wrap">
                  <a href="#more" className="icon"><span className="fa fa-trophy"></span></a>
                  <h4><a href="#feature" className="title-head">Scholarship</a></h4>
                  <p>Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor amet laoreet.</p>
                </div>
                <div className="grids-1 box-wrap">
                  <a href="#more" className="icon"><span className="fa fa-graduation-cap"></span></a>
                  <h4><a href="#feature" className="title-head">Alumni Support</a></h4>
                  <p>Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor amet laoreet.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
      <div className="w3l-homeblock3 py-5">
      <div className="container py-lg-5 py-md-4 py-2">
        <h5 className="title-small text-center mb-1">From the news</h5>
        <h3 className="title-big text-center mb-sm-5 mb-4">Latest <span>News</span></h3>
        <div className="row top-pics">
          {/* First News Block */}
          <div className="col-md-6">
            <div className="top-pic1">
              <div className="card-body blog-details">
                <a href="#blog-single" className="blog-desc">
                  Enhance your educational skills and also experience with best online courses
                </a>
                <div className="author align-items-center">
                  <img src="assets/images/team1.jpg" alt="" className="img-fluid rounded-circle" />
                  <ul className="blog-meta">
                    <li>
                      <a href="#author">Isabella Ava</a>
                    </li>
                    <li className="meta-item blog-lesson">
                      <span className="meta-value">Nov 19, 2020</span>
                      <span className="meta-value ml-2"><span className="fa fa-clock-o"></span> 1 min</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Second News Block */}
          <div className="col-md-6 mt-md-0 mt-4">
            <div className="top-pic2">
              <div className="card-body blog-details">
                <a href="#blog-single" className="blog-desc">
                  Be more productive to be more Successful. Take your first journey
                </a>
                <div className="author align-items-center">
                  <img src="assets/images/team2.jpg" alt="" className="img-fluid rounded-circle" />
                  <ul className="blog-meta">
                    <li>
                      <a href="#author">Charlotte Mia</a>
                    </li>
                    <li className="meta-item blog-lesson">
                      <span className="meta-value">Nov 19, 2020</span>
                      <span className="meta-value ml-2"><span className="fa fa-clock-o"></span> 1 min</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Third News Block */}
            <div className="mt-4">
              <div className="top-pic3">
                <div className="card-body blog-details">
                  <a href="#blog-single" className="blog-desc">
                    Our self-improvement courses are more effective. Start learning online
                  </a>
                  <div className="author align-items-center">
                    <img src="assets/images/team3.jpg" alt="" className="img-fluid rounded-circle" />
                    <ul className="blog-meta">
                      <li>
                        <a href="#author">Elizabeth</a>
                      </li>
                      <li className="meta-item blog-lesson">
                        <span className="meta-value">Nov 19, 2020</span>
                        <span className="meta-value ml-2"><span className="fa fa-clock-o"></span> 1 min</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* View All Posts */}
        <div className="mt-md-5 mt-4 text-more text-center">
          <a href="blog.html">View All Posts <span className="pl-2 fa fa-long-arrow-right"></span></a>
        </div>
      </div>
      </div>
      <div className="middle py-5">
      <div className="container py-lg-5 py-md-4 py-2">
        <div className="welcome-left text-center py-lg-4">
          <h5 className="title-small mb-1">Start learning online</h5>
          <h3 className="title-big">Enhance your skills with best online courses</h3>
          <a href="#started" className="btn btn-style btn-outline-light mt-sm-5 mt-4 mr-2">
            Get started now
          </a>
          <a href="contact.html" className="btn btn-style btn-primary mt-sm-5 mt-4">
            Contact Us
          </a>
        </div>
      </div>
      </div>

      <section className="w3l-team py-5" id="team">
      <div className="call-w3 py-lg-5 py-md-4">
        <div className="container">
          <div className="row main-cont-wthree-2">
            <div className="col-lg-5 feature-grid-left">
              <h5 className="title-small mb-1">Experienced professionals</h5>
              <h3 className="title-big mb-4">Meet our teachers</h3>
              <p className="text-para">
                Curabitur id gravida risus. Fusce eget ex fermentum, ultricies nisi ac sed,
                lacinia est. Quisque ut lectus consequat, venenatis eros et, commodo risus.
                Nullam sit amet laoreet elit. Suspendisse non magna a velit efficitur.
              </p>
              <p className="mt-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas ab qui impedit,
                libero illo quia sequi quibusdam iure. Error minus quod reprehenderit quae dolor velit
                soluta animi voluptate dicta enim? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Odio, provident!
              </p>
              <a href="#url" className="btn btn-primary btn-style mt-md-5 mt-4">Discover More</a>
            </div>
            <div className="col-lg-7 feature-grid-right mt-lg-0 mt-5">
              <div className="row">
                {[
                  { name: 'James', title: 'Director', img: 'assets/images/team1.jpg' },
                  { name: 'Victoria', title: 'Managing Director', img: 'assets/images/team2.jpg' },
                  { name: 'Isabella', title: 'Teacher', img: 'assets/images/team3.jpg' },
                  { name: 'Elizabeth', title: 'Teacher', img: 'assets/images/team4.jpg' },
                ].map((member, index) => (
                  <div className="col-sm-6" key={index}>
                    <div className="box16">
                      <a href="#url">
                        <img src={member.img} alt={member.name} className="img-fluid radius-image" />
                      </a>
                      <div className="box-content">
                        <h3 className="title">
                          <a href="#url">{member.name}</a>
                        </h3>
                        <span className="post">{member.title}</span>
                        <ul className="social">
                          <li>
                            <a href="#" className="facebook">
                              <span className="fa fa-facebook-f"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="twitter">
                              <span className="fa fa-twitter"></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>

      <section className="w3l-testimonials" id="clients">
      <div className="cusrtomer-layout py-5">
        <div className="container py-lg-4 py-md-3 pb-lg-0">
          <h5 className="title-small text-center mb-1">Testimonials</h5>
          <h3 className="title-big text-center mb-sm-5 mb-4">Happy Clients & Feedbacks</h3>
          <div className="testimonial-width">
            <div id="owl-demo1" className="owl-two owl-carousel owl-theme">
              {testimonialsData.map((testimonial, index) => (
                <div className="item" key={index}>
                  <div className="testimonial-content">
                    <div className="testimonial">
                      <blockquote>
                        <q>{testimonial.feedback}</q>
                      </blockquote>
                      <div className="testi-des">
                        <div className="test-img">
                          <img src={testimonial.imgSrc} className="img-fluid" alt="client-img" />
                        </div>
                        <div className="peopl align-self">
                          <h3>{testimonial.name}</h3>
                          <p className="indentity">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </section>

      <section className="w3l-clients py-5" id="clients">
      <div className="call-w3 py-md-4 py-2">
        <div className="container">
          <div className="company-logos text-center">
            <div className="row logos">
              <div className="col-lg-2 col-md-3 col-4">
                <img src="assets/images/brand1.png" alt="Brand 1" className="img-fluid" />
              </div>
              <div className="col-lg-2 col-md-3 col-4">
                <img src="assets/images/brand2.png" alt="Brand 2" className="img-fluid" />
              </div>
              <div className="col-lg-2 col-md-3 col-4">
                <img src="assets/images/brand3.png" alt="Brand 3" className="img-fluid" />
              </div>
              <div className="col-lg-2 col-md-3 col-4 mt-md-0 mt-4">
                <img src="assets/images/brand4.png" alt="Brand 4" className="img-fluid" />
              </div>
              <div className="col-lg-2 col-md-3 col-4 mt-lg-0 mt-4">
                <img src="assets/images/brand5.png" alt="Brand 5" className="img-fluid" />
              </div>
              <div className="col-lg-2 col-md-3 col-4 mt-lg-0 mt-4">
                <img src="assets/images/brand6.png" alt="Brand 6" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </div>
  );
}

export default Home;
