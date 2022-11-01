import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddNewPlayer from '../components/AddNewPlayer/AddNewPlayer';
import UpdatePlayer from '../components/UpdatePlayer/UpdatePlayer';
import SinglePlayer from '../components/SinglePlayer/SinglePlayer';
import SingleTeam from '../components/SingleTeam/SingleTeam';
import Teams from '../components/Teams/Teams';
import Home from '../pages/Home/Home';
import LiveGames from '../components/LiveGames/LiveGames';

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="player/:id" element={<SinglePlayer />} />
      <Route path="players/add" element={<AddNewPlayer />} />
      <Route path="players/update/:id" element={<UpdatePlayer />} />
      <Route path="teams" element={<Teams />} />
      <Route path="team/:id" element={<SingleTeam />} />
      <Route path="video/live" element={<LiveGames />} />
    </Routes>
  );
};

export default PrivateRoutes;
