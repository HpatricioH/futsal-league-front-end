import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const teams = atom({
  key: 'single',
  default: null,
  effects_UNSTABLE: [persistAtom],
});
