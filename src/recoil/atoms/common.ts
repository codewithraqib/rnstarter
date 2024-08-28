import {atom} from 'recoil';

export const homeRefreshKeyState = atom({
  key: 'homeRefreshKeyState', // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});

export const appTypeState = atom({
  key: 'appTypeState', // unique ID (with respect to other atoms/selectors)
  default: 'bus', // default value (aka initial value)
});

export const navigationState = atom({
  key: 'navigationState',
  default: {
    showHambergur: true,
    boldTitle: '',
    title: '',
    rightIcon: '',
    transparent: false,
  },
});

