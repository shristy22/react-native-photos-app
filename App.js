// import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View,StatusBar,ActivityIndicator } from 'react-native';
import Cover from './src/components/cover';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Routes from './src/components/routes';



class App extends React.Component {
    state = { 
      fontsLoaded: false,
    };

  async componentDidMount(){
     await Font.loadAsync({
        'ariana' : require('./assets/fonts/ArianaVioleta-dz2K.ttf'),
        'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
        'caveat': require('./assets/fonts/Caveat-Regular.ttf')
      });
      this.setState({fontsLoaded: true});
    }

  render(){
    return this.state.fontsLoaded ? <Routes/> : <AppLoading/>
}}
export default App;

