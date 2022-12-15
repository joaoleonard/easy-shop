import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'

import LoginScreen from '../screens/Login'
import NewShopScreen from '../screens/NewShop'
import CardScreen from '../screens/Card'
import SignUpScreen from '../screens/SignUp'
import BottomTabNavigator from './BottomTabNavigator'

import { Ionicons } from '@expo/vector-icons'

const Stack = createNativeStackNavigator()

function Router() {
  const navigation = useNavigation()
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#9EB23B' },
        headerTintColor: '#ffffff',
        title: 'Easy Shop',
      }}>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={BottomTabNavigator}
        options={{
          headerRight: () => (
            <Ionicons
              name="log-out"
              size={24}
              color="#ffffff"
              onPress={() => {
                navigation.navigate('Login')
              }}
            />
          ),
          headerLeft: () => (
            <Ionicons
              name="add"
              size={30}
              color="#ffffff"
              onPress={() => {
                navigation.navigate('NewShop')
              }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="NewShop"
        component={NewShopScreen}
        options={{
          headerLeft: () => (
            <Ionicons
              name="arrow-down"
              size={30}
              color="#ffffff"
              style={{
                transform: [{ rotate: '90deg' }],
              }}
              onPress={() => {
                navigation.goBack()
              }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Card"
        component={CardScreen}
        options={{
          headerLeft: () => (
            <Ionicons
              name="arrow-down"
              size={30}
              color="#ffffff"
              style={{
                transform: [{ rotate: '90deg' }],
              }}
              onPress={() => {
                navigation.goBack()
              }}
            />
          ),
        }}
      />
    </Stack.Navigator>
  )
}

export default Router
