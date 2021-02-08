import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Profile = () => {
  return (
    <div className="wrapper">
      <div className="container-fluid">
        <header>
          <h1>tbaba.info</h1>
          <p>Web Application Developer.</p>
        </header>
        <div className="body">
          <ul className="list-unstyled">
            <li>
              <a href="/">Back</a>
            </li>
          </ul>
          <h2>Profile</h2>

          <div className="section" id="basic-information">
            <ul>
              <li>Web Application Developer.</li>
              <li>In Japan.</li>
              <li>
                Must: Ruby, Rails, JavaScript, TypeScript, React, AWS, and
                GitHub.
              </li>
              <li>Want: Go, Next.js, Vue.js, Nuxt.js</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
