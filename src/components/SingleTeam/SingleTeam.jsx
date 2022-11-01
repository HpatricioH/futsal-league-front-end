import '../../styles/global/button.css';
import React, { useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { teams } from '../../recoil/atoms/teams';
import axios from 'axios';
import Players from '../Players/Players';
import addIcon from '../../assets/icons/add_black_24dp.svg';
import NextGames from '../NextGames/NextGames';
import 'leaflet/dist/leaflet.css';
import { userData } from '../../recoil/atoms/userData';

const SingleTeam = () => {
  const [team, setTeam] = useRecoilState(teams);
  const user = useRecoilValue(userData);
  const { id } = useParams();
  const { name, description, image, players, games } = team;

  const history = useNavigate();

  const fetchTeam = useCallback(() => {
    const teamData = async () => {
      const team = await axios
        .get(`http://localhost:8080/teams/${id}`)
        .catch((err) => {
          console.log(err);
        });
      setTeam(team.data[0]);
    };
    teamData();
  }, [id, setTeam]);

  useEffect(() => {
    const fetchTeamData = async () => {
      await fetchTeam(id);
    };
    fetchTeamData();
  }, [id, fetchTeam, setTeam]);

  const handleClickAdd = (e) => {
    e.preventDefault();
    history(`/players/add`);
    window.scrollTo(0, 0);
  };

  return (
    <section className="flex flex-col p-4 sm:p-[2.15rem] lg:mx-auto lg:w-[96%]  xl:w-10/12 2xl:w-[65%]">
      <h2 className="font-extrabold text-4xl text-center mt-4 xl:text-5xl">
        {name}
      </h2>
      <div className="flex flex-col items-center ">
        <div className="self-center items-center w-[12rem] py-4 md:w-[14rem] lg:w-[16rem] 2xl:w-[18rem]">
          <img
            src={image}
            alt="team logo"
            className="drop-shadow-[0_2px_8px_rgba(59,57,57,0.8)]"
          />
        </div>
        <p className="text-lg text-[#6b7290] text-center sm:w-[90%] md:w-[80%] lg:w-[60%] xl:w-[50%]">
          {description}
        </p>
      </div>
      <div className="flex justify-between pb-4">
        <h3 className="font-extrabold text-2xl pt-6 pb-3 xl:text-3xl">
          Players
        </h3>
        {user.role === 'admin' ? (
          <button className="btn__add self-center" onClick={handleClickAdd}>
            <img src={addIcon} alt="add icon" className="w-6 mx-auto" />
          </button>
        ) : null}
      </div>
      <div className="flex flex-col justify-center items-center gap-4 sm:flex-row sm:flex-wrap sm:gap-6 ">
        {players?.map((player) => {
          return (
            <Players
              key={player.player_id}
              players={player}
              teamName={name}
              fetchTeam={fetchTeam}
            />
          );
        })}
      </div>
      <h3 className="font-extrabold text-2xl pt-6 pb-3 xl:text-3xl">
        Next Games
      </h3>
      <section className="flex flex-col justify-center items-center gap-4 sm:flex-row sm:flex-wrap sm:gap-6 ">
        {games?.map((game) => {
          return <NextGames key={game.idgames} games={game} />;
        })}
      </section>
    </section>
  );
};

export default SingleTeam;
