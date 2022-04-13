import { BottomTabBar } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Component } from 'react/cjs/react.production.min';
import BottomTabNavigator from './component/BottomTabNavigator';

export default class App extends Component {
render(){
return <BottomTabNavigator/>
}
};
