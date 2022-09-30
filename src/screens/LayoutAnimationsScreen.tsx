import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { styles } from './screens.styles';

export const LayoutAnimationsScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.screenContainer}>
        <Text>LayoutAnimations example</Text>
      </View>
    </SafeAreaView>
  );
};
