import React, { useState } from 'react';
import { Button, SafeAreaView, View } from 'react-native';
import { styles } from './screens.styles';

export const PlainJsScreen: React.FC = () => {
  const [translation, setTranslation] = useState(0);

  const onAnimatePress = () => {
    for (let i = -100; i < 0; i++) {
      setTimeout(() => setTranslation(i), 10 * -i);
    }
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.screenContainer}>
        <View
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
          <Button title="Reset" onPress={() => setTranslation(0)} />
        </View>
      </View>
    </SafeAreaView>
  );
};
