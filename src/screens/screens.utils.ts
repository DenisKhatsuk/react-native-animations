import { styles } from './screens.styles';
import { GetBallStyle } from './screens.types';

export const loadJsThread = () => {
  setTimeout(() => {
    let i = 0;
    while (i < 100000000) {
      i++;
    }
  }, 0);
};

export const getBallStyle: GetBallStyle = (translation, color, size) => [
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
];
