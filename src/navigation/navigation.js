import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../screen/home';
import Explore from '../screen/explore';
import Cart from '../screen/cart';
import Profile from '../screen/profile';
import Detail from '../screen/detail';




// import Profile from '../screen/profile';
// import Keranjang from '../screen/cart';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                showIcon: true,
                style: {
                    // elevation: 2, // remove shadow on Android
                    // shadowOpacity: 1,
                    // borderTopWidth: 0,
                    // borderRadius: 50,
                    // marginHorizontal: 15,
                    // marginBottom: 10,
                    // height: 60,
                    
                    alignItems: 'center',
                },
                keyboardHidesTabBar: true,
                // activeBackgroundColor: 'white',
                // inactiveBackgroundColor: 'white',


            }} >
            <Tab.Screen
                name="Home"
                component={Dashboard}
                options={{
                    
                    tabBarIcon: ({ color, focused }) => (
                        <Image
                            style={[styles.bottomTabIcon, { tintColor: focused ? '#177FE2' : 'gray' }]}
                            source={focused == true ? require('../assets/home.png') : require('../assets/home.png')
                            } />
                    ),
                    tabBarLabel: ''
                }}
            />
            <Tab.Screen
                name="Explore"
                component={Explore}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <Image
                            style={[styles.bottomTabIcon, { tintColor: focused ? '#177FE2' : 'gray' }]}
                            source={focused == true ? require('../assets/placeholder.png') : require('../assets/placeholder.png')
                            } />
                    ),
                    tabBarLabel: ''
                }}
            />
            <Tab.Screen
                name="Cart"
                component={Cart}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <Image
                            style={[styles.bottomTabIcon, { tintColor: focused ? '#177FE2' : 'gray' }]}
                            source={focused == true ? require('../assets/cart.png') : require('../assets/cart.png')
                            } />
                    ),
                    tabBarLabel: ''
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <Image
                            style={[styles.bottomTabIcon, { tintColor: focused ? '#177FE2' : 'gray' }]}
                            source={focused == true ? require('../assets/profile.png') : require('../assets/profile.png')
                            } />
                    ),
                    tabBarLabel: ''
                }}
            />
            {/* <Tab.Screen
        name="Cart"
        component={Keranjang}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Image
              style={styles.bottomTabIcon}
              source={focused==true?require('../assets/cartOn.png'):require('../assets/cartOff.png')
              } />
          ),
          tabBarLabel: 'Keranjang'
        }}
      /> */}
        </Tab.Navigator>
        </View>
    );
}

const MainStackNavigator = (props) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="DashboardStack" component={BottomTabNavigator} options={{
                headerShown: false
            }} />
            <Stack.Screen name="Detail" component={Detail} options={{
        headerShown: false
      }}/>
        </Stack.Navigator>
    )
}

export default MainStackNavigator

const styles = StyleSheet.create({

    bottomTabIcon: {
        display: 'flex',
        width: 24,
        height: 24,
        padding: 5,
        // marginVertical: 5,
        // marginTop: 25,
        // marginBottom: 10,
        // borderTopWidth: 3,
    },
});