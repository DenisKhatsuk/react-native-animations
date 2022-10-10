type PositionStats = {
  param: ANIMATED_PARAM;
  start: number;
  previousTimeStamp: number;
  done: boolean;
};

export type setterNumber = React.Dispatch<React.SetStateAction<number>>;
export type setterString = React.Dispatch<React.SetStateAction<string>>;

export type AnimateParam = (
  time: number,
  positionStats: PositionStats,
  paramSetter: setterNumber | setterString,
) => void;

export enum ANIMATED_PARAM {
  TRANSLATION,
  COLOR,
  SIZE,
}

export type ParamGetterConfig = Record<
  ANIMATED_PARAM,
  (elapsed: number) => number | string
>;

export type DoneConditionConfig = Record<
  ANIMATED_PARAM,
  (value: number | string) => boolean
>;
