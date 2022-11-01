import { useRecoilState, useRecoilValue } from 'recoil';
import { onePlayer } from '../../recoil/atoms/onePlayer';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useCallback } from 'react';
import { Image, Transformation } from 'cloudinary-react';
import { userData } from '../../recoil/atoms/userData';
import { SinglePlayerCard } from '../SinglePlayerCard/SinglePlayerCard';

import axios from 'axios';
import PlayerComments from '../PlayerComments/PlayerComments';
import AddPlayerComment from '../AddPlayerComment/AddPlayerComment';
import editIcon from '../../assets/icons/edit-24px.svg';

const SinglePlayer = () => {
  const [player, setPlayer] = useRecoilState(onePlayer);
  const user = useRecoilValue(userData);
  const { id } = useParams();

  const history = useNavigate();

  const fetchPlayer = useCallback(() => {
    const playerData = async () => {
      const player = await axios
        .get(`http://localhost:8080/players/${id}`)
        .catch((err) => {
          console.log(err);
        });
      setPlayer(player.data[0]);
    };
    playerData();
  }, [id, setPlayer]);

  useEffect(() => {
    fetchPlayer();
  }, [id, fetchPlayer]);

  const handleClickUpdate = (e) => {
    e.preventDefault();
    history(`/players/update/${id}`);
  };

  return (
    <section
      key={player?.player_id}
      className="p-4 flex flex-col justify-center items-center  sm:p-[2.15rem] md:pt-10 lg:mx-auto lg:w-[83%] xl:w-[65%] 2xl:w-[65%] "
    >
      <div className="self-start text-sky-600 font-extrabold text-4xl text-center mt-4 xl:text-5xl">
        <h2>{player?.name}</h2>
      </div>
      <div className="self-center items-center py-4 w-[15rem]  md:w-[18rem] lg:w-[20rem] 2xl:w-[22rem]">
        <Image
          cloudName="dase1w9ff"
          publicId={player?.image}
          className="drop-shadow-[0_2px_8px_rgba(59,57,57,0.8)] rounded-2xl"
          alt="player photo"
        >
          <Transformation crop="scale" />
        </Image>
      </div>
      {/* Player Card information */}
      <SinglePlayerCard player={player} fetchPlayer={fetchPlayer} />
      <button onClick={handleClickUpdate}>
        {user?.role === 'admin' ? <img src={editIcon} alt="edit icon" /> : null}
      </button>

      <div className="w-full 2xl:w-[65%]">
        {<AddPlayerComment fetchPlayer={fetchPlayer} />}
        {<PlayerComments fetchPlayer={fetchPlayer} user={user} />}
      </div>
    </section>
  );
};

export default SinglePlayer;
