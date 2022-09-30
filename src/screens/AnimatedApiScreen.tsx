import React, { useRef } from 'react';
import { Button, SafeAreaView, View, Animated } from 'react-native';
import { styles } from './screens.styles';

export const AnimatedApiScreen: React.FC = () => {
  const translation = useRef(new Animated.Value(-100)).current;

  const onAnimatePress = () => {
    Animated.timing(translation, {
      toValue: -100,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.screenContainer}>
        <Animated.View
          style={[
            styles.ball,
            {
              transform: [{ translateY: translation }],
            },
          ]}
        />
        <View style={styles.button}>
          <Button title="Animate!" onPress={onAnimatePress} />
        </View>
        <View style={styles.button}>
          <Button title="Reset" onPress={() => translation.setValue(0)} />
        </View>
      </View>
    </SafeAreaView>
  );
};
