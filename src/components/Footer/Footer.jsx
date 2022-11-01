import logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="mt-auto" id="getTouch">
      <div className="relative z-0 py-[3rem] mt-6 flex flex-col items-center bg-cyan-900 overflow-hidden md:py-8">
        <div className="relative z-[1] flex flex-col items-left container m-auto px-6 text-white md:px-12 lg:m-auto lg:w-10/12 xl:w-2/3 2xl:w-2/4">
          <h2 className="text-3xl font-extrabold pb-4">Get In Touch</h2>
          <div className="text-left pb-4">
            <p className="font-semibold  pb-3">Information:</p>
            <p>Email: futsalleague@gmail.com</p>
            <p>Phone: 519-504-6558</p>
          </div>
          {/* <div className=" h-14 logo sm:absolute sm:self-end  "> */}
          <div className=" sm:absolute sm:self-end ">
            <Link to="/">
              <img className=" h-14 logo" src={logo} alt="futsal logo " />
            </Link>
          </div>
          {/* </div> */}
        </div>
        <div
          aria-hidden="true"
          className="absolute h-full inset-0 flex items-center"
        >
          <div
            aria-hidden="true"
            className="bg-layers bg-scale w-[22rem] h-[20rem] m-auto blur-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full md:w-[30rem] md:h-[30rem] md:blur-3xl"
          ></div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 w-full h-full bg-[#020314] opacity-80"
        ></div>
      </div>
    </footer>
  );
};

export default Footer;
