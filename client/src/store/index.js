import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#AA6C39',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './logo.png',
  fullDecal: './logo.png',
});

export default state;