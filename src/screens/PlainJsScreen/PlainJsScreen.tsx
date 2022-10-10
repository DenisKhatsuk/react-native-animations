import React, { useRef, useState } from 'react';
import { Button, SafeAreaView, View } from 'react-native';

import { COLORS } from 'constants';
import { AnimationOptionsPanel } from 'components';

import { styles } from '../screens.styles';

import { animateParam } from './PlainJsScreen.utils';
import {
  DEFAULT_ANIMATION_COLOR_DATA,
  DEFAULT_ANIMATION_POSITION_DATA,
  DEFAULT_ANIMATION_SIZE_DATA,
  SIZE_MAX,
} from './PlainJsScreen.consts';

export const PlainJsScreen: React.FC = () => {
  const [translation, setTranslation] = useState(0);
  const [color, setColor] = useState(COLORS[0]);
  const [size, setSize] = useState(SIZE_MAX);

  const [isPositionEnabled, setIsPositionEnabled] = useState(true);
  const [isColorEnabled, setIsColorEnabled] = useState(false);
  const [isSizeEnabled, setIsSizeEnabled] = useState(false);

  const animationData = useRef({
    position: {
      ...DEFAULT_ANIMATION_POSITION_DATA,
    },
    color: {
      ...DEFAULT_ANIMATION_COLOR_DATA,
    },
    size: {
      ...DEFAULT_ANIMATION_SIZE_DATA,
    },
  });

  const onAnimatePress = () => {
    if (isPositionEnabled) {
      requestAnimationFrame(timestamp =>
        animateParam(timestamp, animationData.current.position, setTranslation),
      );
    }
    if (isColorEnabled) {
      requestAnimationFrame(timestamp =>
        animateParam(timestamp, animationData.current.color, setColor),
      );
    }
    if (isSizeEnabled) {
      requestAnimationFrame(timestamp =>
        animateParam(timestamp, animationData.current.size, setSize),
      );
    }
  };

  const onResetPress = () => {
    setTranslation(0);
    setColor(COLORS[0]);
    setSize(SIZE_MAX);
    animationData.current = {
      position: {
        ...DEFAULT_ANIMATION_POSITION_DATA,
      },
      color: {
        ...DEFAULT_ANIMATION_COLOR_DATA,
      },
      size: {
        ...DEFAULT_ANIMATION_SIZE_DATA,
      },
    };
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
