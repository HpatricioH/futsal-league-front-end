import React from 'react';
import Modal from 'react-modal';
import menuHamburger from '../../assets/icons/menu_hamburger.svg';
import close from '../../assets/icons/close_black.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';

const NavMenuModal = ({ user, handleLogout }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  let history = useNavigate();

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleClick = () => {
    history('/login');
  };

  return (
    <div className="lg:hidden">
      <img
        className="h-8"
        onClick={openModal}
        src={menuHamburger}
        alt="menu icon"
      />
      <Modal
        className="items-center z-30 p-4 pt-6 sm:p-6 h-full sm:h-auto sm:m-9 flex flex-col bg-white shadow-lg rounded-xl shadow-slate-600/50 gap-4"
        isOpen={modalIsOpen}
        closeModal={closeModal}
      >
        <img
          className="self-end"
          src={close}
          onClick={closeModal}
          alt="close modal icon"
        />
        <ul className="flex flex-col gap-3 items-center text-xl pt-5 [&_li]:header__link">
          <li>
            <HashLink to="/#about" smooth="true" onClick={closeModal}>
              About Us
            </HashLink>
          </li>
          <li>
            <HashLink to="/#ourTeam" smooth="true" onClick={closeModal}>
              Our Team
            </HashLink>
          </li>
          {!user ? null : (
            <li>
              <Link to="teams" smooth="true" onClick={closeModal}>
                Teams
              </Link>
            </li>
          )}
          {!user ? null : (
            <li>
              <Link to="video/live" smooth="true" onClick={closeModal}>
                Live Games
              </Link>
            </li>
          )}
          <li>
            <HashLink to="/#getTouch" smooth="true" onClick={closeModal}>
              Get In Touch
            </HashLink>
          </li>
        </ul>
        {user === null ? (
          <button
            className="btn__primary"
            onClick={() => {
              closeModal();
              handleClick();
            }}
          >
            Sign In
          </button>
        ) : (
          <button
            className="btn__primary"
            onClick={() => {
              handleLogout();
              closeModal();
            }}
          >
            Sign Out
          </button>
        )}
      </Modal>
    </div>
  );
};

export default NavMenuModal;
