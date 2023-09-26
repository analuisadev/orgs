import { StatusBar, SafeAreaView, View } from 'react-native';
// import * as SplashScreen from 'expo-splash-screen';
import { 
  useFonts, 
  Montserrat_400Regular, 
  Montserrat_700Bold 
} from '@expo-google-fonts/montserrat'; 

import Cest from './src/screens/Cest';
import mock from './src/mocks/cest';
import React from 'react';

export default function App() {
  const [ fontLoaded ] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  })

  if(!fontLoaded) {
    return <View />
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <Cest {...mock}/>
    </SafeAreaView>
  );
}