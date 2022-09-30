import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { ParamListBase, RouteProp } from '@react-navigation/native';

export enum Screens {
  PlainJS = 'PlainJS',
  AnimatedAPI = 'AnimatedAPI',
  Reanimated = 'Reanimated',
  LayoutAnimations = 'LayoutAnimations',
}

export enum ScreenTitles {
  PlainJsTitle = 'Animation with plain JS',
  AnimatedApiTitle = 'Animation with Animated API',
  ReanimatedTitle = 'Animation with Reanimated',
  LayoutAnimationsTitle = 'Animations with LayoutAnimations',
}

export enum ScreenNavigatorLabels {
  PlainJsLabel = 'JS',
  AnimatedApiLabel = 'Animated',
  ReanimatedLabel = 'Reanimated',
  LayoutAnimationsLabel = 'Layout',
}

export type GetScreenOptions = (props: {
  route: RouteProp<ParamListBase, string>;
  navigation: any;
}) => BottomTabNavigationOptions;
