import { useState } from 'react';
import Modal from 'react-modal';
import close from '../../assets/icons/close_black.svg';
import VenueMap from '../VenueMap/VenueMap';
import '../../styles/global/button.css';

const NextGames = ({ games }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { date, time, team_one, team_two } = games;

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <div className="flex flex-col gap-2 p-2 h-[9.5rem] relative bg-[#f5f5f5] drop-shadow-[0_2px_8px_rgba(59,57,57,0.8)] rounded-xl justify-center items-center pt-4">
        <div className="flex flex-row justify-center items-center gap-3">
          <div className="flex flex-col flex-[50%] text-center border-r-2 pr-8 w-[10rem] font-extrabold">
            <p>{date}</p>
            <p>{time}</p>
          </div>
          <div className="flex flex-col flex-[50%]  justify-end items-end">
            <p className="text-sky-600 font-extrabold">{team_one}</p>
            <p className="text-red-800 font-extrabold">Vs</p>
            <p className="text-sky-600 font-extrabold">{team_two}</p>
          </div>
        </div>
        <div className="self-end">
          <button
            onClick={openModal}
            className="hover:text-[#0000EE] font-bold"
          >
            Venue
          </button>
          <Modal
            style={{
              overlay: { backgroundColor: 'rgba(0, 0, 0, 0.25)' },
            }}
            className="flex flex-col items-center  bg-white rounded-xl z-30 p-4 pt-6 overflow-hidden gap-4 sm:p-6 h-full  sm:m-4 sm:h-[94%] md:m-10 md:p-10 lg:mx-[12rem] xl:mx-[18rem] 2xl:mx-auto 2xl:w-[50%] 2xl:h-[94%]"
            isOpen={modalIsOpen}
            closeModal={closeModal}
          >
            <img
              className="self-end"
              src={close}
              onClick={closeModal}
              alt="close modal icon"
            />
            <VenueMap closeModal={closeModal} games={games} />
          </Modal>
        </div>
      </div>
    </>
  );
};

export default NextGames;
