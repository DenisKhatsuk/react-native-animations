import { BORDER_COLOR, SELECTION_COLOR } from 'constants';
import {
  headerTitleConfig,
  iconsConfig,
  tabBarLabelConfig,
} from './DemoNavigator.consts';
import { GetScreenOptions, Screens } from './DemoNavigator.types';

export const getScreenOptions: GetScreenOptions = ({ route }) => ({
  tabBarIcon: iconsConfig[route.name as Screens],
  headerTitle: headerTitleConfig[route.name as Screens],
  tabBarLabel: tabBarLabelConfig[route.name as Screens],
  tabBarItemStyle: {
    paddingBottom: 2,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 15,
  },
  tabBarActiveBackgroundColor: SELECTION_COLOR,
  tabBarStyle: {
    borderTopColor: BORDER_COLOR,
    borderTopWidth: 2,
    height: 90,
  },
});
