import logo from '../../assets/images/logo.svg';
import '../../styles/global/button.css';
import './Header.css';
import Modal from 'react-modal';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userData } from '../../recoil/atoms/userData';
import axios from 'axios';
import NavMenuModal from '../NavMenuModal/NavMenuModal';
import NavMenu from '../NavMenu/NavMenu';
import { userSession } from '../../recoil/atoms/userSession';

Modal.setAppElement('*');

const Header = () => {
  const [user, setUser] = useRecoilState(userData);
  const [userLoggedIn, setUserLoggedIn] = useRecoilState(userSession);
  let history = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:8080/users/logout');
      sessionStorage.removeItem('userLoggedIn');
      setUser(null);
      setUserLoggedIn(null);
      history('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <header className="flex justify-between items-center px-4 pt-4 sm:px-7 sm:pt-6 lg:mx-auto lg:w-[95%] lg:pt-5 xl:w-[75%]">
        <Link to="/">
          <img className="h-14" src={logo} alt="futsal league logo" />
        </Link>

        <NavMenuModal user={user} handleLogout={handleLogout} />
        <NavMenu user={user} handleLogout={handleLogout} />
      </header>
    </>
  );
};

export default Header;
