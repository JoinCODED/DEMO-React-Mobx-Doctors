import React from 'react';
import img1 from '../assets/img/hero/hero-img-1.png';
import img2 from '../assets/img/hero/hero-img-2.png';
import img3 from '../assets/img/hero/hero-img-3.png';
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <section id="home" class="hero-section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="hero-content">
              <h1 class="wow fadeInUp" data-wow-delay=".2s">
                Complete Health- Care Solution App For Everyone
              </h1>
              <p class="wow fadeInUp" data-wow-delay=".4s">
                Choose your doctor and create your appointment online!.
              </p>
              <Link to="/doctors" className="main-btn">
                Get Started
              </Link>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="hero-img wow fadeInUp" data-wow-delay=".5s">
              <img src={img1} alt="" class="img-1" />
              <img src={img2} alt="" class="img-2" />
              <img src={img3} alt="" class="img-3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
