import { NavigationContainer } from '@react-navigation/native'

import { StatusBar } from 'expo-status-bar'
import Router from './src/routes/Router'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Router />
    </NavigationContainer>
  )
}
