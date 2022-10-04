import React, { useState } from 'react';
import { Button, SafeAreaView, View } from 'react-native';
import { COLORS } from 'constants';
import { styles } from './screens.styles';
import { AnimationOptionsPanel } from 'components';
import { onAnimatePressHandler } from './screens.types';

const onAnimatePositionPress: onAnimatePressHandler<number> = setter => {
  for (let i = -100; i < 0; i++) {
    setTimeout(() => setter(i), 15 * -i);
  }
};

const onAnimateColorPress: onAnimatePressHandler<string> = setter => {
  for (let i = 0; i < COLORS.length; i++) {
    setTimeout(() => setter(COLORS[i]), 100 * i);
  }
};

const onAnimateSizePress: onAnimatePressHandler<number> = setter => {
  for (let i = 0; i < 50; i++) {
    setTimeout(() => setter(100 - i), 15 * i);
  }
};

export const PlainJsScreen: React.FC = () => {
  const [translation, setTranslation] = useState(0);
  const [color, setColor] = useState(COLORS[0]);
  const [size, setSize] = useState(100);

  const [isPositionEnabled, setIsPositionEnabled] = useState(true);
  const [isColorEnabled, setIsColorEnabled] = useState(false);
  const [isSizeEnabled, setIsSizeEnabled] = useState(false);

  const onAnimatePress = () => {
    if (isPositionEnabled) {
      onAnimatePositionPress(setTranslation);
    }
    if (isColorEnabled) {
      onAnimateColorPress(setColor);
    }
    if (isSizeEnabled) {
      onAnimateSizePress(setSize);
    }
  };

  const onResetPress = () => {
    setTranslation(0);
    setColor(COLORS[0]);
    setSize(100);
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.screenContainer}>
        <View style={styles.demoPanel}>
          <View
            style={[
              styles.ball,
              {
                transform: [{ translateY: translation }],
              },
              {
                backgroundColor: color,
              },
              {
                width: size,
                height: size,
              },
            ]}
          />
        </View>
        <View style={styles.controlsPanel}>
          <View style={styles.buttonsPanel}>
            <View style={styles.button}>
              <Button title="Animate" onPress={onAnimatePress} />
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
