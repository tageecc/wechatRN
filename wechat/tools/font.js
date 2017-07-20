import { Dimensions,PixelRatio } from 'react-native';
const pix = PixelRatio.get();

const font = (px) => {
  return px*pix/4;
};

export default font;
