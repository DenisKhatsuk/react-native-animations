import { StyleSheet } from 'react-native';
import { BACKGROUND_LIGHT, TEXT_COLOR } from 'constants';
import { BORDER_COLOR } from '../../constants';

export const styles = StyleSheet.create({
  panel: {
    width: '100%',
    backgroundColor: BACKGROUND_LIGHT,
    padding: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: BORDER_COLOR,
  },
  panelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
  },
  rowText: {
    fontSize: 18,
    paddingRight: 10,
    color: TEXT_COLOR,
  },
});
