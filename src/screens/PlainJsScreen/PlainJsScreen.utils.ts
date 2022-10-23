import { SetStateAction } from 'react';
import { COLORS } from 'constants';
import {
  ANIMATION_DURATION,
  COLOR_VELOCITY,
  SIZE_MAX,
  SIZE_MIN,
  SIZE_VELOCITY,
  TRANSLATE_MAX,
} from './PlainJsScreen.consts';
import {
  ANIMATED_PARAM,
  AnimateParam,
  DoneConditionConfig,
  ParamGetterConfig,
} from './PlainJsScreen.types';

const paramGetterConfig: ParamGetterConfig = {
  [ANIMATED_PARAM.TRANSLATION]: elapsed =>
    -Math.min((TRANSLATE_MAX / ANIMATION_DURATION) * elapsed, TRANSLATE_MAX),
  [ANIMATED_PARAM.COLOR]: elapsed =>
    COLORS[Math.floor(COLOR_VELOCITY * elapsed)],
  [ANIMATED_PARAM.SIZE]: elapsed =>
    Math.max(SIZE_MAX - SIZE_VELOCITY * elapsed, SIZE_MIN),
};

const doneConditionConfig: DoneConditionConfig = {
  [ANIMATED_PARAM.TRANSLATION]: translate => translate === TRANSLATE_MAX,
  [ANIMATED_PARAM.COLOR]: color => color === COLORS[COLORS.length - 1],
  [ANIMATED_PARAM.SIZE]: size => size === SIZE_MIN,
};

export const animateParam: AnimateParam = (
  time,
  { param, start, previousTimeStamp, done },
  paramSetter,
) => {
  if (!start) {
    start = time;
  }
  const elapsed = time - start;

  if (previousTimeStamp !== time) {
    const value = paramGetterConfig[param](elapsed);
    paramSetter(value as SetStateAction<number> & SetStateAction<string>);
    if (doneConditionConfig[param](value)) {
      done = true;
    }
  }

  if (elapsed < ANIMATION_DURATION) {
    previousTimeStamp = time;
    if (!done) {
      requestAnimationFrame(timestamp =>
        animateParam(
          timestamp,
          { param: param, start, previousTimeStamp, done },
          paramSetter,
        ),
      );
    }
  }
};
