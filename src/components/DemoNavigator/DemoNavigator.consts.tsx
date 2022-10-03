import React, { ReactNode } from 'react';

import { CodeIcon, LayersIcon, RocketIcon, FilmIcon } from 'icons';
import {
  ScreenNavigatorLabels,
  Screens,
  ScreenTitles,
} from './DemoNavigator.types';
import { NAV_BAR_ICON_HEIGHT, NAV_BAR_ICON_WIDTH } from 'constants';

export const iconsConfig: Record<Screens, () => ReactNode> = {
  [Screens.PlainJS]: () => (
    <CodeIcon width={NAV_BAR_ICON_WIDTH} height={NAV_BAR_ICON_HEIGHT} />
  ),
  [Screens.AnimatedAPI]: () => (
    <FilmIcon width={NAV_BAR_ICON_WIDTH} height={NAV_BAR_ICON_HEIGHT} />
  ),
  [Screens.Reanimated]: () => (
    <RocketIcon width={NAV_BAR_ICON_WIDTH} height={NAV_BAR_ICON_HEIGHT} />
  ),
  [Screens.LayoutAnimations]: () => (
    <LayersIcon width={NAV_BAR_ICON_WIDTH} height={NAV_BAR_ICON_HEIGHT} />
  ),
};

export const headerTitleConfig = {
  [Screens.PlainJS]: ScreenTitles.PlainJsTitle,
  [Screens.AnimatedAPI]: ScreenTitles.AnimatedApiTitle,
  [Screens.Reanimated]: ScreenTitles.ReanimatedTitle,
  [Screens.LayoutAnimations]: ScreenTitles.LayoutAnimationsTitle,
};

export const tabBarLabelConfig = {
  [Screens.PlainJS]: ScreenNavigatorLabels.PlainJsLabel,
  [Screens.AnimatedAPI]: ScreenNavigatorLabels.AnimatedApiLabel,
  [Screens.Reanimated]: ScreenNavigatorLabels.ReanimatedLabel,
  [Screens.LayoutAnimations]: ScreenNavigatorLabels.LayoutAnimationsLabel,
};
