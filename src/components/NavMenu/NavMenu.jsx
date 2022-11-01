import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link, useNavigate } from 'react-router-dom';

const NavMenu = ({ user, handleLogout }) => {
  let history = useNavigate();

  const handleClick = () => {
    history('/login');
  };

  return (
    <ul className="hidden lg:flex sm:items-center gap-4 [&_li]:header__link">
      <li>
        <HashLink to="/#about" smooth="true">
          About Us
        </HashLink>
      </li>
      <li>
        <HashLink to="/#ourTeam" smooth="true">
          Our Team
        </HashLink>
      </li>
      {user === null ? null : (
        <li>
          <Link to="teams" smooth="true">
            Teams
          </Link>
        </li>
      )}
      {!user ? null : (
        <li>
          <Link to="video/live">Live Games</Link>
        </li>
      )}
      <li>
        <HashLink to="/#getTouch" smooth="true">
          Get In Touch
        </HashLink>
      </li>
      <li>
        {user === null ? (
          <button
            className="btn__secondary"
            onClick={() => {
              handleClick();
            }}
          >
            Sign In
          </button>
        ) : (
          <div className="flex flex-col gap-2">
            <p className="font-bold">Hello, {user.user_name}</p>
            <button
              className="btn__secondary"
              onClick={() => {
                handleLogout();
              }}
            >
              Sign Out
            </button>
          </div>
        )}
      </li>
    </ul>
  );
};

export default NavMenu;
