import React, { useRef, useState } from 'react';
import { Button, SafeAreaView, View, Animated } from 'react-native';

import { AnimationOptionsPanel } from 'components';
import { styles } from './screens.styles';

export const AnimatedApiScreen: React.FC = () => {
  const [isPositionEnabled, setIsPositionEnabled] = useState(true);
  const [isColorEnabled, setIsColorEnabled] = useState(false);
  const [isSizeEnabled, setIsSizeEnabled] = useState(false);

  const translation = useRef(new Animated.Value(0)).current;
  const size = useRef(new Animated.Value(100)).current;

  const onAnimatePress = () => {
    if (isPositionEnabled) {
      Animated.timing(translation, {
        toValue: -200,
        duration: 1500,
        useNativeDriver: false,
      }).start();
    }

    if (isSizeEnabled) {
      Animated.timing(size, {
        toValue: 50,
        duration: 1500,
        useNativeDriver: false,
      }).start();
    }
  };

  const onResetPress = () => {
    translation.setValue(0);
    size.setValue(100);
  };

  const onStopPress = () => {
    Animated.timing(translation, {
      toValue: -100,
      useNativeDriver: false,
    }).stop();
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.screenContainer}>
        <Animated.View style={styles.demoPanel}>
          <Animated.View
            style={[
              styles.ball,
              {
                transform: [{ translateY: translation }],
              },
              // {
              //   backgroundColor: color,
              // },
              {
                width: size,
                height: size,
              },
            ]}
          />
        </Animated.View>
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
              [isPositionEnabled, setIsPositionEnabled, 'Position'],
              [isColorEnabled, setIsColorEnabled, 'Color'],
              [isSizeEnabled, setIsSizeEnabled, 'Size'],
            ]}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
