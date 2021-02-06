import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faWaveSquare } from '@fortawesome/free-solid-svg-icons';

export default function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <header>
          <h1>tbaba.info</h1>
          <p>Web Application Developer.</p>
        </header>
        <div className="body">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a href="https://github.com/tbaba" className="nav-link">
                <FontAwesomeIcon icon={faGithub} />
                GitHub
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://portfolio.forkwell.com/@tbaba"
                className="nav-link"
              >
                <FontAwesomeIcon icon={faWaveSquare} />
                Forkwell
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
