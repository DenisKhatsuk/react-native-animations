import React, { useRef, useState } from 'react';
import { Button, SafeAreaView, View, Animated, Text } from 'react-native';

import { AnimationOptionsPanel } from 'components';
import { styles } from './screens.styles';
import { loadJsThread } from './screens.utils';
import { COLORS } from 'constants/colors';

export const AnimatedApiScreen: React.FC = () => {
  const [isPositionEnabled, setIsPositionEnabled] = useState(true);
  const [isUiPositionEnabled, setIsUiPositionEnabled] = useState(true);
  const [isColorEnabled, setIsColorEnabled] = useState(false);
  const [isSizeEnabled, setIsSizeEnabled] = useState(false);
  const [isJsThreadBusy, setIsJsThreadBusy] = useState(false);

  const animatedValue = useRef(new Animated.Value(0)).current;
  const nativeTranslation = useRef(new Animated.Value(0)).current;

  let translate = isPositionEnabled
    ? animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -200],
      })
    : 0;
  let size = isSizeEnabled
    ? animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [100, 50],
      })
    : 100;
  let color = isColorEnabled
    ? animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [COLORS[0], COLORS[COLORS.length - 1]],
      })
    : COLORS[0];

  const onAnimatePress = () => {
    if (isJsThreadBusy) {
      loadJsThread();
    }

    if (isUiPositionEnabled) {
      Animated.timing(nativeTranslation, {
        toValue: -200,
        duration: 1500,
        useNativeDriver: true,
      }).start();
    }

    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: false,
    }).start();
  };

  const onResetPress = () => {
    animatedValue.setValue(0);
    nativeTranslation.setValue(0);
  };

  const onStopPress = () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      useNativeDriver: false,
    }).stop();
    Animated.timing(nativeTranslation, {
      toValue: -200,
      useNativeDriver: true,
    }).stop();
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.screenContainer}>
        <View style={styles.demoPanel}>
          <Animated.View
            style={[
              styles.ball,
              {
                transform: [{ translateY: translate }],
              },
              {
                backgroundColor: color,
              },
              {
                width: size,
                height: size,
              },
            ]}>
            <Text style={styles.ballName}>JS</Text>
          </Animated.View>
          <Animated.View
            style={[
              styles.ball,
              {
                transform: [{ translateY: nativeTranslation }],
              },
              {
                backgroundColor: COLORS[10],
              },
            ]}>
            <Text style={styles.ballName}>UI</Text>
          </Animated.View>
        </View>
        <View style={styles.controlsPanel}>
          <View style={styles.buttonsPanel}>
            <View style={styles.button}>
              <Button title="Animate" onPress={onAnimatePress} />
            </View>
            <View style={styles.button}>
              <Button title="Stop" onPress={onStopPress} />
            </View>
            <View style={styles.button}>
              <Button title="Reset" onPress={onResetPress} />
            </View>
          </View>
          <AnimationOptionsPanel
            options={[
              [isPositionEnabled, setIsPositionEnabled, 'Position JS'],
              [isUiPositionEnabled, setIsUiPositionEnabled, 'Position UI'],
              [isColorEnabled, setIsColorEnabled, 'Color JS'],
              [isSizeEnabled, setIsSizeEnabled, 'Size JS'],
              [isJsThreadBusy, setIsJsThreadBusy, 'Load JS Thread'],
            ]}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
