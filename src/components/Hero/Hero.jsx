import { useNavigate } from 'react-router-dom';
import heroImg from '../../assets/images/hero-image.jpg';
import '../../styles/global/button.css';

const Hero = () => {
  const history = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();

    history('/register', { replace: true });
  };

  return (
    <section className="mt-3 pt-4 pb-6 px-4 h-fit bg-[#f9fafc] sm:px-7 ">
      <div className=" flex flex-col md:flex-row md:gap-12 lg:m-auto lg:w-10/12 lg:pt-5 xl:w-2/3">
        <div className="md:w-1/2 md:flex flex-col justify-center">
          <h1 className="text-[2.64rem] font-bold text-center leading-tight">
            Premier League{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4f46e5] to-[#3f0087e0]">
              Futsal
            </span>
          </h1>
          <p className="text-center text-[#6b7290] pt-4">
            Futsal supports young players development. The speed of the game
            help them to improve their skills.
          </p>
          {sessionStorage.getItem('userLoggedIn') ? (
            <button
              className="btn__secondary mt-4 md:w-52 self-center hidden"
              onClick={handleClick}
            >
              Register
            </button>
          ) : (
            <button
              className="btn__secondary mt-4 md:w-52 self-center"
              onClick={handleClick}
            >
              Register
            </button>
          )}
        </div>
        <div className="hidden md:block md:w-1/2">
          <img
            src={heroImg}
            alt="soccer net"
            className="h-full rounded-xl shadow-lg shadow-slate-600/50"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
