import React from 'react';
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
        <Link>
        <a href="./home.js">Home</a>
          </Link>
        </div>
        <div>
        <Link>
          <a href="./about.js">About</a>
          </Link>
        </div>
        <div>
        <Link>
          <a href="./contact.js">Contact</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
