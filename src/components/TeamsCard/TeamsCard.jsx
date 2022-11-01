import { Link } from 'react-router-dom';

const TeamsCard = (props) => {
  const { name, description, image, idteams } = props.team;

  return (
    <>
      <Link to={`/team/${idteams}`}>
        <li className="relative overflow-hidden w-72 bg-black p-4 text-white flex flex-col justify-evenly items-center rounded-xl shadow-lg shadow-slate-600/50 hover:drop-shadow-[0_2px_8px_rgba(216,255,104,1)] sm:w-80 sm:justify-center md:hover:-translate-y-3 md:hover:scale-1 md:hover:duration-500 sm:h-[30rem]">
          <div className="flex flex-col w-[12rem] mb-4">
            <img
              src={image}
              alt="teams logo"
              className="drop-shadow-[0_2px_8px_rgba(216,255,104,1)]"
            />
          </div>
          <div className="px-2">
            <p className="pb-3 text-xl font-extrabold">{name}</p>
            <p className="h-[7rem] mb-6 leading-relaxed">{description}</p>
          </div>
          <img
            src={image}
            alt="teams logo"
            className="absolute right-[5.5rem] top-[16rem] opacity-[0.08] w-[25rem] h-[20rem] "
          />
        </li>
      </Link>
    </>
  );
};

export default TeamsCard;
