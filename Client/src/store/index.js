import { proxy } from 'valtio';

const state = proxy({
  intro: false,
  color: '#EFBD48',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './logo.png',
  fullDecal: './logo.png',
});

export default state;