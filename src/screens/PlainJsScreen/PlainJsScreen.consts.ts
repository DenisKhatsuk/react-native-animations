import { COLORS } from 'constants';
import { ANIMATED_PARAM } from './PlainJsScreen.types';

export const TRANSLATE_MAX = 200;
export const ANIMATION_DURATION = 2000;
export const SIZE_MAX = 100;
export const SIZE_MIN = 50;
export const SIZE_VELOCITY = (SIZE_MAX - SIZE_MIN) / ANIMATION_DURATION;
export const COLOR_VELOCITY = COLORS.length / ANIMATION_DURATION;

const DEFAULT_ANIMATION_DATA = {
  start: 0,
  previousTimeStamp: 0,
  done: false,
};

export const DEFAULT_ANIMATION_POSITION_DATA = {
  param: ANIMATED_PARAM.TRANSLATION,
  ...DEFAULT_ANIMATION_DATA,
};

export const DEFAULT_ANIMATION_COLOR_DATA = {
  param: ANIMATED_PARAM.COLOR,
  ...DEFAULT_ANIMATION_DATA,
};

export const DEFAULT_ANIMATION_SIZE_DATA = {
  param: ANIMATED_PARAM.SIZE,
  ...DEFAULT_ANIMATION_DATA,
};
