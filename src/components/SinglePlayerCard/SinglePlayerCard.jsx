import React from 'react';
import soccerBall from '../../assets/images/soccer-ball.svg';
import thumbIcon from '../../assets/icons/thumb_up.svg';
import addLike from '../../utilities/likes';

export const SinglePlayerCard = ({ player, fetchPlayer }) => {
  const { teams, position, height, weigh, goals, likes, player_id } = player;

  const handleClick = async (id) => {
    await addLike(id);
    fetchPlayer();
  };

  return (
    <div className="rounded-2xl relative w-[18rem] p-4 mb-4 shadow-lg shadow-slate-600/50 bg-[#000000] text-white overflow-hidden z-0 md:w-[22rem] xl:w-[24rem]">
      <div className="flex flex-col items-end capitalize [&_span]:font-normal [&_span]:text-[#D8FF68] [&_span]:ml-2 [&_p]:font-bold">
        <p>
          team:<span>{teams?.name}</span>
        </p>
        <p>
          position:<span>{position}</span>
        </p>
        <p>
          height:<span>{height}</span>
        </p>
        <p>
          weight:<span>{weigh}</span>
        </p>
        <p>
          goals:<span>{goals}</span>
        </p>
        <p>
          likes:<span>{likes}</span>
        </p>
        <img
          src={soccerBall}
          alt="soccer ball"
          className="absolute -left-12 top-12 z-10"
        />
        <button className="btn__like" onClick={() => handleClick(player_id)}>
          <img className="w-5 self-center" src={thumbIcon} alt="like icon" />
          Like
        </button>
      </div>
    </div>
  );
};
