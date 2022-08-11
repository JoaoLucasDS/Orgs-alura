import react from 'react';

import { StyleSheet, StatusBar, SafeAreaView, View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold} from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';

import Basket from './src/screens/basket';
import mock from './src/mocks/Basket'

export default function App() {
  const [fontLoaded] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  })

  if(!fontLoaded){
    return <AppLoading/>
  }
  
  return (
    <SafeAreaView styles={{ flex: 1}}>
      
      <Basket {...mock}/>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
