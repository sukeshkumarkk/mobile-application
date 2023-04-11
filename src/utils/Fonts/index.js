import {Dimensions, PixelRatio} from 'react-native';

export const {width, height} = Dimensions.get('window');

const guidelineBaseWidth = 375;

const scale = size => (width / guidelineBaseWidth) * size;

export function normalize(size, factor) {
  const newSize = size + (scale(size) - size) * factor;

  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

export const SIZES = value => {
  return normalize(value, 0.01);
};
