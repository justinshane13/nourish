import { Platform } from 'react-native';

export const AD_UNIT_IDS = {
  banner: Platform.select({
    android: 'ca-app-pub-6668764378901911~5520052111',
    ios: 'ca-app-pub-6668764378901911~4965324823',
  }),
};