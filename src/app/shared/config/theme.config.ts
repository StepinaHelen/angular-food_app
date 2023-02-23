import { ITHEMES } from '../../shared/types/types';
export const THEMES: ITHEMES = {
  default: {
    primary: '#64748B',
    secondary: '#a8b8cf',
    secondaryShadow: '#350e42',
    error: 'red',
    mainFont: '#252525',
    white: '#ffffff',
    secondaryFont: '#ffffff',
    background: 'rgba(255, 255, 255, 0.8)',
    borderColor: '#747474',
    boxShadow:
      '0px 2px 1px rgb(0 0 0 / 20%), 0px 1px 1px rgb(0 0 0 / 14%),0px 1px 3px rgb(0 0 0 / 12%)',
    transition: '500ms ease-in-out',
  },
  dark: {
    primary: '#64748B',
    secondary: '#a8b8cf',
    secondaryShadow: '#350e42',
    error: 'red',
    mainFont: 'white',
    white: '#ffffff',
    secondaryFont: '#252525',
    background: 'rgba(255, 255, 255, 0.8)',
    borderColor: '#747474',
    boxShadow: 'inset 2px 2px 5px rgb(213 213 213), 1px 1px 5px #64748B',
    transition: '500ms ease-in-out',
  },
};
