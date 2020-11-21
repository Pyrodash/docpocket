import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import DoctorsScreen from '../screens/DoctorsScreen';
import AppointmentsScreen from '../screens/AppointmentsScreen'
import ProfileScreen from '../screens/ProfileScreen'

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <BottomTab.Navigator
            initialRouteName="Home"
            tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
            <BottomTab.Screen
                name="Home"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name="ios-home" color={color} />,
                }}
            />
            <BottomTab.Screen
                name="Doctors"
                component={DoctorsNavigator}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name="ios-medical" color={color} />,
                }}
            />
            <BottomTab.Screen
                name="Appointments"
                component={AppointmentsNavigator}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name="ios-calendar" color={color} />,
                }}
            />
            <BottomTab.Screen
                name="Profile"
                component={ProfileNavigator}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name="ios-person" color={color} />,
                }}
            />
        </BottomTab.Navigator>
    );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props) {
    return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator();

function HomeNavigator() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ headerTitle: 'Home' }}
            />
        </HomeStack.Navigator>
    );
}

const DoctorsStack = createStackNavigator();

function DoctorsNavigator() {
    return (
        <DoctorsStack.Navigator>
            <DoctorsStack.Screen
                name="DoctorsScreen"
                component={DoctorsScreen}
                options={{ headerTitle: 'Doctors' }}
            />
        </DoctorsStack.Navigator>
    );
}

const AppointmentsStack = createStackNavigator();

function AppointmentsNavigator() {
    return (
        <AppointmentsStack.Navigator>
            <AppointmentsStack.Screen
                name="AppointmentsScreen"
                component={AppointmentsScreen}
                options={{ headerTitle: 'Appointments' }}
            />
        </AppointmentsStack.Navigator>
    );
}

const ProfileStack = createStackNavigator();

function ProfileNavigator() {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{ headerTitle: 'Profile' }}
            />
        </ProfileStack.Navigator>
    );
}

