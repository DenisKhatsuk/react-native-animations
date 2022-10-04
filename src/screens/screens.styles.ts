import { StyleSheet } from 'react-native';
import { SELECTION_COLOR, BORDER_COLOR, COLORS } from 'constants';

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
  },
  demoPanel: {
    flex: 3,
    justifyContent: 'flex-end',
  },
  controlsPanel: {
    flex: 2,
    justifyContent: 'flex-end',
    width: 200,
    paddingBottom: 40,
  },
  buttonsPanel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 15,
  },
  button: {
    marginTop: 20,
    backgroundColor: SELECTION_COLOR,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: BORDER_COLOR,
  },
});
