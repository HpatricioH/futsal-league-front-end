import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const onePlayer = atom({
  key: 'onePlayer',
  default: {},
  effects_UNSTABLE: [persistAtom],
});
