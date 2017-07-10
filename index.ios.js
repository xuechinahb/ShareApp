import { AppRegistry } from 'react-native';

import App from './app.ios'
import Share from './share.ios'

AppRegistry.registerComponent('ShareApp', () => App);
AppRegistry.registerComponent('ShareContainer', () => Share);
