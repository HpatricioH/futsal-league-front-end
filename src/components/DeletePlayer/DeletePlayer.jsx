import '../../styles/global/button.css';
import axios from 'axios';
import { useEffect } from 'react';

const DeletePlayer = ({
  playerId,
  fetchTeam,
  playerName,
  teamName,
  closeModal,
}) => {
  const handleClick = async () => {
    await axios
      .delete(`http://localhost:8080/players/${playerId}`)
      .catch((err) => {
        console.log(err);
      });
    fetchTeam();
  };

  useEffect(() => {
    fetchTeam();
  }, [fetchTeam]);

  return (
    <>
      <h2 className="text-2xl font-extrabold">
        Delete <span className="text-sky-600">{playerName}</span> {''}
        from team {teamName}?
      </h2>
      <p>
        Please Confirm that you would like to delete {playerName} from team{' '}
        {teamName}. You won't be able to undo this action.
      </p>
      <div className="flex flex-col w-full pt-4 gap-4 sm:flex-row justify-center items-center sm:w-28">
        <button
          className="btn__delete"
          onClick={() => {
            handleClick();
            closeModal();
          }}
        >
          Delete
        </button>
        <button className="btn__cancel" onClick={closeModal}>
          Cancel
        </button>
      </div>
    </>
  );
};

export default DeletePlayer;
