import { BORDER_COLOR } from 'constants/colors';
import React, { useState } from 'react';
import {
  Button,
  LayoutAnimation,
  SafeAreaView,
  TextInput,
  View,
} from 'react-native';
import { styles as screenStyles } from '../screens.styles';
import { AUTH_SCREEN_STATE } from './LayoutAnimationScreen.consts';
import { styles } from './LayoutAnimationScreen.styles';

const customLayoutAnimation = {
  duration: 400,
  create: {
    duration: 700,
    type: LayoutAnimation.Types.linear,
    property: LayoutAnimation.Properties.opacity,
  },
  update: {
    type: LayoutAnimation.Types.linear,
    property: LayoutAnimation.Properties.opacity,
  },
  delete: {
    duration: 100,
    type: LayoutAnimation.Types.linear,
    property: LayoutAnimation.Properties.opacity,
  },
};

export const LayoutAnimationScreen: React.FC = () => {
  const [screenState, setScreenState] = useState(AUTH_SCREEN_STATE.INITIAL);

  const isInitial = screenState === AUTH_SCREEN_STATE.INITIAL;
  const isRegister = screenState === AUTH_SCREEN_STATE.REGISTER;

  const onStateSwitch = (newState: AUTH_SCREEN_STATE) => {
    // LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
    LayoutAnimation.configureNext(customLayoutAnimation);
    setScreenState(newState);
  };

  return (
    <SafeAreaView style={screenStyles.wrapper}>
      <View style={screenStyles.screenContainer}>
        <View style={styles.loginWrapper}>
          <TextInput
            keyboardType="email-address"
            placeholder="Specify your email"
            autoFocus={false}
            style={styles.emailInput}
            placeholderTextColor={BORDER_COLOR}
          />
          {isRegister && (
            <TextInput
              placeholder="Specify your name"
              autoFocus={false}
              style={styles.emailInput}
              placeholderTextColor={BORDER_COLOR}
            />
          )}
          {!isInitial && (
            <TextInput
              placeholder="Specify your password"
              autoFocus={false}
              style={styles.emailInput}
              placeholderTextColor={BORDER_COLOR}
            />
          )}
          {isRegister && (
            <TextInput
              placeholder="Repeat your password"
              autoFocus={false}
              style={styles.emailInput}
              placeholderTextColor={BORDER_COLOR}
            />
          )}
          <View style={styles.buttonsContainer}>
            <View style={screenStyles.button}>
              <Button
                title="Log In"
                onPress={() => onStateSwitch(AUTH_SCREEN_STATE.LOG_IN)}
              />
            </View>
            <View style={screenStyles.button}>
              <Button
                title="Register"
                onPress={() => onStateSwitch(AUTH_SCREEN_STATE.REGISTER)}
              />
            </View>
          </View>
          {!isInitial && (
            <View style={[screenStyles.button, styles.buttonGoBack]}>
              <Button
                title="Go Back"
                onPress={() => onStateSwitch(AUTH_SCREEN_STATE.INITIAL)}
              />
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};
