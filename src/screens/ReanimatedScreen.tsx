import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { styles } from './screens.styles';

export const ReanimatedScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.screenContainer}>
        <Text>ReAnimated example</Text>
      </View>
    </SafeAreaView>
  );
};
