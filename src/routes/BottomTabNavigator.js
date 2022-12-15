import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/Home'
import MapScreen from '../screens/Map'

const Tab = createBottomTabNavigator()

function BottomTabNavigator({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: '#2d2d2d',
          borderTopColor: '#2d2d2d',
          borderTopWidth: 1,
        },
        headerStyle: {
          backgroundColor: '#E64848',
        },
        headerTintColor: '#fff',
        headerStatusBarHeight: 30,
        headerTitleStyle: {
          fontSize: 25,
          paddingBottom: 10,
        },
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? 'md-home' : 'md-home-outline'}
              size={size}
              color={color}
            />
          ),
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
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? 'map' : 'map-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator
