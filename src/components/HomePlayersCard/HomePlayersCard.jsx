import { memo } from 'react';
import { Image } from 'cloudinary-react';
import thumbIcon from '../../assets/icons/thumb_up.svg';
import '../../styles/global/button.css';
import './HomePlayersCard.css';

const HomePlayersCard = (props) => {
  const { name, goals, likes, teams, image, player_id } = props.player;

  return (
    <>
      <li className="bg-black flex flex-col rounded-xl shadow-lg shadow-slate-600/50 sm:w-80 sm:justify-center">
        <div className="flex justify-evenly h-40 pr-2">
          <div className="w-[6rem]">
            <Image
              cloudName="dase1w9ff"
              publicId={image}
              className="w-full h-full object-cover relative right-1 drop-shadow-[0_2px_8px_rgba(216,255,104,1)]"
            ></Image>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-[#B2A5FD] font-extrabold text-xl pb-1">
              {name}
            </h2>
            <p className="card__subtitle">
              team:
              <span className="card__subtitle--body">{teams.name}</span>
            </p>
            <p className="card__subtitle">
              goals:
              <span className="card__subtitle--body">{goals}</span>
            </p>
            <p className="card__subtitle">
              likes:
              <span className="card__subtitle--body">{likes}</span>
            </p>
            <button
              className="btn__like"
              onClick={() => props.handleClick(player_id)}
            >
              <img
                className="w-5 self-center"
                src={thumbIcon}
                alt="like icon"
              />
              Like
            </button>
          </div>
        </div>
      </li>
    </>
  );
};

export default memo(HomePlayersCard);
