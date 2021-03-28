import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Ionicons} from '@expo/vector-icons'
import {View,Text,StatusBar, Button} from 'react-native';
import Cover from './cover';
import Home from './home';
import Styles from '../style';
import Potrait from './potrait';
import Scenery from './scenery';

// const ThemeContext = React.createContext('light');

const Stack = createStackNavigator();

const Routes = (route,props) => {
    // const { subtitle } =  this.props.route.params;
    const[msg,setMsg] = React.useState("hello there")
    // const potraitfunc = ()=> {
    //     return(
            
    //         // <ThemeContext.Provider value="dark">
    //         //         <Potrait />
    //         // </ThemeContext.Provider>
           
    //         <Text>Hello</Text>
    //         // <Potrait/>
    //         // (route)=>(<Potrait sub={route.params.subtitle}/>)
    //     );
    
    return (           
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Cover"
                    screenOptions={{
                    headerStyle: {backgroundColor: '#004040'},
                      headerTintColor: '#fff',
                      headerTitleStyle: {fontFamily: 'roboto-bold', fontSize: 20},
                      gestureEnabled: true,}}>
                <Stack.Screen name="Cover" component={Cover} options={{headerShown: false}} />
                <Stack.Screen name="Home" component={Home} options={({ navigation })=>({
                    title: 'Welcome', 
                    headerLeft: null,
                    headerRight: ()=>(
                    <Ionicons name="menu" size={32} color="#ffff"/>)
                    })}/>
                <Stack.Screen name="Potrait" options={({route})=>({title: route.params.name})}>
                 {/* {props => <Potrait/>}</Stack.Screen> */}
                 {/* {props.subtitle} */}
                 {(props)=><Potrait msgpass={props.route.params.subtitle}/>}
                 </Stack.Screen>

                <Stack.Screen name="Scenery" component={Scenery} options={{title: 'Scenery'}} />
            </Stack.Navigator>
        </NavigationContainer>

    );
  };
  export default Routes;
  
