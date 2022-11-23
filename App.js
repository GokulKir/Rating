import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

//Screen//
import Home from './Screen/Home' ;
import Add from './Screen/Add' ;
import Rate from './Screen/Rate' ;
import UserRate from './Screen/UserRate' ;
//Screen//

export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator>
<Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
<Stack.Screen name="Add" component={Add} options={{headerShown:false}}/>
<Stack.Screen name="Rate" component={Rate} options={{headerShown:false}}/>
<Stack.Screen name="UserRate" component={UserRate} options={{headerShown:false}}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}



