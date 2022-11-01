import { selector } from 'recoil';
import { singlePlayer } from '../atoms/singlePlayer';

export const singlePlayerChange = selector({
  key: 'changeSinglePlayer',
  get: ({ get }) => {
    const player = get(singlePlayer);
    return player;
  },
});
