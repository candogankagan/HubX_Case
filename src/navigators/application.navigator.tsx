import React, {memo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StartedScreen from '../screens/StartedScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import OnboardingSecondScreen from '../screens/OnboardingSecondScreen';
import PaywallScreen from '../screens/PaywallScreen';
import HomeScreen from '../screens/HomeScreen';
import {Image} from 'react-native';
import {useAppSelector} from '../hooks/reduxHooks';

export type OnboardingStackParamList = {
    Started: undefined;
    Onboarding: undefined;
    OnboardingSecond: undefined;
    Paywall: undefined;
};

const Stack = createNativeStackNavigator();

export const ApplicationNavigator = memo(function ApplicationNavigator() {
    const route = useAppSelector(state => state.ui.switchNavigate);

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                {route === 'onboarding' && <Stack.Screen name="OnboardingStack" component={OnboardingNavigator} />}
                {route === 'main' && <Stack.Screen name="MainStack" component={TabNavigator} />}
            </Stack.Navigator>
        </NavigationContainer>
    );
});

const OnboardingStack = createNativeStackNavigator<OnboardingStackParamList>();

export const OnboardingNavigator = memo(function ApplicationNavigator() {
    return (
        <OnboardingStack.Navigator screenOptions={{headerShown: false}}>
            <OnboardingStack.Screen name="Started" component={StartedScreen} />
            <OnboardingStack.Screen name="Onboarding" component={OnboardingScreen} />
            <OnboardingStack.Screen name="OnboardingSecond" component={OnboardingSecondScreen} />
            <OnboardingStack.Screen name="Paywall" component={PaywallScreen} />
        </OnboardingStack.Navigator>
    );
});

const Tab = createBottomTabNavigator();

export const TabNavigator = memo(function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarLabelStyle: {
                    fontFamily: 'Rubik-Medium',
                    fontSize: 10,
                    alignItems: 'center',
                },
                tabBarStyle: {
                    position: 'absolute',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#FFF',
                    height: 80,
                    paddingBottom: 25,
                    zIndex: 100,
                },
                headerShown: false,
                tabBarActiveTintColor: '#28AF6E',
                tabBarInactiveTintColor: '#979798',
            }}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({color}) => (
                        <Image style={{tintColor: color}} source={require('../assets/icons/homeIcon.png')} />
                    ),
                }}
            />
            <Tab.Screen
                name="Diagnose"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Diagnose',
                    tabBarIcon: ({color}) => (
                        <Image style={{tintColor: color}} source={require('../assets/icons/shieldIcon.png')} />
                    ),
                }}
            />
            <Tab.Screen
                name="ScanButton"
                component={HomeScreen}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({color}) => (
                        <Image style={{marginBottom: 20}} source={require('../assets/icons/scanButton.png')} />
                    ),
                }}
            />
            <Tab.Screen
                name="Garden"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'My Garden',
                    tabBarIcon: ({color}) => (
                        <Image style={{tintColor: color}} source={require('../assets/icons/gardenIcon.png')} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({color}) => (
                        <Image style={{tintColor: color}} source={require('../assets/icons/profileIcon.png')} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
});
