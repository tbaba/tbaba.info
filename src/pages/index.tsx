import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faUser, faWaveSquare } from '@fortawesome/free-solid-svg-icons';

export default function App() {
  return (
    <div className="wrapper h-100">
      <div className="container-fluid my-auto">
        <header>
          <h1>tbaba.info</h1>
          <p>Web Application Developer.</p>
        </header>
        <div className="body">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a href="/profile" className="nav-link">
                <FontAwesomeIcon icon={faUser} className="fa-fw" /> Profile
              </a>
            </li>
            <li className="nav-item">
              <a href="https://github.com/tbaba" className="nav-link">
                <FontAwesomeIcon icon={faGithub} className="fa-fw" /> GitHub
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://portfolio.forkwell.com/@tbaba"
                className="nav-link"
              >
                <FontAwesomeIcon icon={faWaveSquare} className="fa-fw" />{' '}
                Forkwell
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
