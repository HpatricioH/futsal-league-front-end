import axios from 'axios';
import React, { useState, useEffect } from 'react';
import TeamsCard from '../TeamsCard/TeamsCard';

const Teams = () => {
  const [teams, setTeams] = useState(null);

  const fetchTeams = async () => {
    const teams = await axios
      .get('http://localhost:8080/teams')
      .catch((err) => {
        console.log(err);
      });
    setTeams(teams.data);
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  return teams === null ? null : (
    <>
      <h2 className="text-4xl pb-4 font-bold text-center mt-4">Teams</h2>
      <ul className="flex flex-col gap-6 p-4 justify-center items-center text-center sm:flex-row sm:flex-wrap lg:mx-auto lg:w-11/12 2xl:w-[73%]">
        {teams.map((team) => {
          return <TeamsCard key={team.idteams} team={team} />;
        })}
      </ul>
    </>
  );
};

export default Teams;
