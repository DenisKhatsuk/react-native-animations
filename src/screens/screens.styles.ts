import { StyleSheet } from 'react-native';
import { NAV_BAR_SELECTION_COLOR } from '../components/DemoNavigator/DemoNavigator.consts';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ball: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'blue',
  },
  button: {
    marginTop: 20,
    backgroundColor: NAV_BAR_SELECTION_COLOR,
    borderRadius: 5,
  },
});
