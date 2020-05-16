require('react-native').unstable_enableLogBox();
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import axios from 'axios';
import App from './App';

axios.defaults.baseURL = "http://192.168.3.102:3333";

AppRegistry.registerComponent(appName, () => App);
