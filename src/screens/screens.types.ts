import { StyleProp, ViewStyle } from 'react-native';

export type GetBallStyle = (
  translation: number,
  color: string,
  size: number,
) => StyleProp<ViewStyle>;
