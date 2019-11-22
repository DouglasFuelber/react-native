import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/main';

const stackNavigator = createStackNavigator({
    Main
});

export default createAppContainer(stackNavigator);