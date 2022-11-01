import HomePlayersCard from '../HomePlayersCard/HomePlayersCard';
import addLike from '../../utilities/likes';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HomePlayers = () => {
  const [players, setPlayers] = useState(null);

  const fetchPlayers = async () => {
    const players = await axios
      .get(`http://localhost:8080/players`)
      .catch((err) => {
        console.log(err);
      });
    setPlayers(players.data);
  };

  const handleClick = async (id) => {
    await addLike(id);
    fetchPlayers();
  };

  useEffect(() => {
    fetchPlayers();
  }, []);

  // function to return the three players with more goals
  const randomPlayers = () => {
    return [...players].filter((player) => player.goals >= 7).slice(0, 3);
  };

  return players === null ? null : (
    <section className="xl:m-auto xl:w-[75%] 2xl:w-[65%]">
      <h2 className="uppercase font-extrabold pt-6 pb-2 text-xl self-start md:text-3xl lg:pb-6 lg:px-[2.4rem] xl:pl-[0]">
        Top League Players
      </h2>
      <ul className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center text-end">
        {randomPlayers().map((player) => {
          return (
            <HomePlayersCard
              key={player.player_id}
              player={player}
              handleClick={handleClick}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default HomePlayers;
