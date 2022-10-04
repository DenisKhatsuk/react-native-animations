import React from 'react';
import { Switch, Text, View } from 'react-native';

import { AnimationOptionsPanelProps } from './AnimationOptionsPanel.types';
import { styles } from './AnimationOptionsPanel.styles';
import { SWITCH_TRACK_ACTIVE } from 'constants/colors';

export const AnimationOptionsPanel: React.FC<AnimationOptionsPanelProps> = ({
  options,
}) => {
  const optionRows = options.map(([value, setter, title]) => (
    <View style={styles.panelRow} key={title}>
      <Text style={styles.rowText}>{title}</Text>
      <Switch
        value={value}
        onValueChange={setter}
        trackColor={{ true: SWITCH_TRACK_ACTIVE }}
      />
    </View>
  ));

  return <View style={styles.panel}>{optionRows}</View>;
};
