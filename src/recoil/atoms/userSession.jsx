import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const userSession = atom({
  key: 'userSession',
  default: {},
  effects_UNSTABLE: [persistAtom],
});
