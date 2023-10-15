import React, { Component } from 'react'; // This imports the React and Component libraries from React Native.
import { View, Text, StyleSheet, Button } from 'react-native'; // This imports the View, Text, StyleSheet, and Button components from React Native.
import { DrawerNavigator } from '@react-navigation/drawer'; // This imports the DrawerNavigator component from @react-navigation/drawer.

/**
 * This is the home screen component.
 */
class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the home screen.</Text>
      </View>
    );
  }
}

/**
 * This is the second screen component.
 */
class SecondScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the second screen.</Text>
      </View>
    );
  }
}

/**
 * This is the drawer navigator component. It configures the two screens that will be included in the navigation drawer.
 */
const Drawer = DrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  Second: {
    screen: SecondScreen,
  },
});

/**
 * This is the app component. It simply renders the drawer navigator component.
 */
const App = () => {
  return <Drawer />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
