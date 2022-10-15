
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screen/LoginScreen';
import WelcomeScreen from './src/screen/Welcome'
import HomeScreen from './src/screen/HomeScreen';
import RegistrationScreen from './src/screen/RegistrationScreen';
import AvailableBusScreen from './src/screen/AvailableBusScreen';
// import ModelScreen from './src/screen/ModelScreen';

const Stack = createNativeStackNavigator();

function App() {
  const [availablity, setAvailablity] = useState({})

  console.log('app',availablity);
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen  } />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" initialParams={{ setAvailablity  }}  component={HomeScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="AvailableBus" initialParams={{ availablity  }}  component={AvailableBusScreen} />
        {/* <Stack.Screen name="ModelScreen" component={ModelScreen} /> */}


       
       </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

 export default App;