import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomePage from './src/screens/HomePage';

const nagivator = createStackNavigator(
  {
    Home: HomePage,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Chat AI',
    },
  }
);

export default createAppContainer(nagivator);
