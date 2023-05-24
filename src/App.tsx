import React, { useLayoutEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';

import { DemoNavigator } from 'components';
import { Platform, UIManager } from 'react-native';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const App: React.FC = () => {
  useLayoutEffect(() => SplashScreen.hide(), []);

  return <DemoNavigator />;
};

export default App;
