import React, { useLayoutEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';

import { DemoNavigator } from 'components';

const App: React.FC = () => {
  useLayoutEffect(() => SplashScreen.hide(), []);

  return <DemoNavigator />;
};

export default App;
