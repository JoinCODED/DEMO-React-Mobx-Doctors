import React from 'react';
import Logo from '../assets/img/logo/logo.png';
import { Link, NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <div>
      <header class="header">
        <div class="navbar-area ">
          <div class="container ">
            <div class="row align-items-center">
              <div class="col-lg-12">
                <nav class="navbar navbar-expand-lg ">
                  <Link class="navbar-brand" to="/">
                    <img src={Logo} alt="Logo" />
                  </Link>
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="toggler-icon"></span>
                    <span class="toggler-icon"></span>
                    <span class="toggler-icon"></span>
                  </button>

                  <div
                    class="collapse navbar-collapse sub-menu-bar"
                    id="navbarSupportedContent"
                  >
                    <ul id="nav" class="navbar-nav ms-auto">
                      <li class="nav-item">
                        <NavLink class="page-scroll" to="/">
                          Home
                        </NavLink>
                      </li>
                      <li class="nav-item">
                        <NavLink class="page-scroll" to="/doctors">
                          Doctors
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
