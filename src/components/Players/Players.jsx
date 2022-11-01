import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Modal from 'react-modal';
import soccerBall from '../../assets/images/soccer-ball.svg';
import deleteIcon from '../../assets/icons/delete_icon.svg';
import close from '../../assets/icons/close_black.svg';
import DeletePlayer from '../DeletePlayer/DeletePlayer';
import { useRecoilValue } from 'recoil';
import { userData } from '../../recoil/atoms/userData';

const Players = ({ players, teamName, fetchTeam }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { name, position, likes, goals, player_id } = players;
  const user = useRecoilValue(userData);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="flex flex-col rounded-2xl relative w-[18rem] shadow-lg shadow-slate-600/50 p-4 bg-[#000000] text-white overflow-hidden z-0">
      <Link to={`/player/${player_id}`}>
        <h3 className="text-[#B2A5FD] font-extrabold text-xl pb-1 z-20">
          {name}
        </h3>
        <div className="flex flex-col items-end">
          <p className="font-bold capitalize">
            position:{' '}
            <span className="font-normal  text-[#D8FF68] ml-2">{position}</span>
          </p>
          <p className="font-bold capitalize">
            likes:{' '}
            <span className="font-normal  text-[#D8FF68] ml-2">{likes}</span>
          </p>
          <p className="font-bold capitalize">
            goals:{' '}
            <span className="font-normal  text-[#D8FF68] ml-2">{goals}</span>
          </p>
        </div>
        <img
          src={soccerBall}
          alt="soccer ball"
          className="absolute -left-12 top-12 z-10"
        />
      </Link>
      <div className="flex z-20 absolute top-[5.8rem] gap-4 ">
        <button onClick={openModal}>
          {user.role === 'admin' ? (
            <img src={deleteIcon} alt="delete icon" />
          ) : null}
        </button>
        <Modal
          style={{ overlay: { backgroundColor: 'rgba(0, 0, 0, 0.75)' } }}
          className="items-center z-30 p-4 pt-6 flex flex-col bg-white rounded-xl gap-4 sm:p-6 h-full sm:h-auto sm:m-9 md:m-20 md:p-10 lg:mx-[12rem] xl:mx-[18rem] 2xl:mx-auto 2xl:w-[40%]"
          isOpen={modalIsOpen}
          closeModal={closeModal}
        >
          <img
            className="self-end"
            src={close}
            onClick={closeModal}
            alt="close modal icon"
          />
          <DeletePlayer
            teamName={teamName}
            playerName={name}
            playerId={player_id}
            closeModal={closeModal}
            fetchTeam={fetchTeam}
          />
        </Modal>
      </div>
    </div>
  );
};

export default Players;
