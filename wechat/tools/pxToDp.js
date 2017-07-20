import { Dimensions,PixelRatio } from 'react-native';
const deviceWidthDp = Dimensions.get('window').width;
const deviceHeightDp = Dimensions.get('window').height;

const pix = PixelRatio.get();
// const rem = deviceWidthDp / 16;
// console.error(2);
// console.warn(rem);
// ui 默认设计图大小
// const uiWidthPx = 640;

// const pxToDp = (uiElementPx) => {
//   return (uiElementPx / 40) * rem;
// }
const defaultWidth = 640;
const defaultHeight = 1136;
// const pxToDp = (px) => {
//   return px * deviceHeightDp / defaultHeight;
// };
const pxToDp = (px) => {
    return px * deviceWidthDp / defaultWidth;
};

const font = (px) => {
    return px*pix/4;
};

export default pxToDp;
