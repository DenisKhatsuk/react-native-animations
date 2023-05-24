import { BACKGROUND_LIGHT, BORDER_COLOR, TEXT_COLOR } from 'constants/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  loginWrapper: {
    flex: 1,
    width: '80%',
    alignItems: 'center',
    paddingTop: 50,
  },
  emailInput: {
    height: 40,
    width: '100%',
    paddingHorizontal: 5,
    marginTop: 20,
    backgroundColor: BACKGROUND_LIGHT,
    borderColor: BORDER_COLOR,
    borderWidth: 1,
    borderRadius: 5,
    color: TEXT_COLOR,
  },
  buttonsContainer: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonGoBack: {
    flexBasis: 'auto',
    width: '60%',
  },
});
