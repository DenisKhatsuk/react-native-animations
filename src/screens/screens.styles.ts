import { StyleSheet } from 'react-native';
import {
  SELECTION_COLOR,
  BORDER_COLOR,
  COLORS,
  BACKGROUND_LIGHT,
} from 'constants';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ball: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: COLORS[0],
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ballName: {
    fontSize: 20,
    color: BACKGROUND_LIGHT,
  },
  demoPanel: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  controlsPanel: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '70%',
    minWidth: 230,
    paddingBottom: 20,
  },
  buttonsPanel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 15,
  },
  button: {
    flexBasis: 90,
    marginTop: 20,
    backgroundColor: SELECTION_COLOR,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: BORDER_COLOR,
  },
});
