import React from 'react';

import * as Phosphor from 'phosphor-react-native';

import Animated from 'react-native-reanimated';
import {BottomTabBar, createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTabBottom} from '../hooks/useTabBottom';

import {Setting, Home, Notification, Job, Post} from '../screens';
import {useTheme} from 'styled-components';

const Tab = createBottomTabNavigator();

export function AppTabsRoutes() {
	const {styleAnimated} = useTabBottom();
	const theme = useTheme();

	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: theme.colors.dark,
				tabBarInactiveTintColor: theme.colors.inactive,
				tabBarStyle: {position: 'absolute', bottom: 0},
			}}
			tabBar={props => (
				<Animated.View style={[styleAnimated]}>
					<BottomTabBar {...props} />
				</Animated.View>
			)}
		>
			<Tab.Screen
				name='Início'
				component={Home}
				options={{
					tabBarIcon: ({color}) => (
						<Phosphor.House color={color} size={24} weight='fill' />
					),
				}}
			/>
			<Tab.Screen
				name='Setting'
				component={Setting}
				options={{
					tabBarIcon: ({color}) => (
						<Phosphor.Users color={color} size={24} weight='fill' />
					),
				}}
			/>
			<Tab.Screen
				name='Post'
				component={Post}
				options={{
					tabBarIcon: ({color}) => (
						<Phosphor.PlusCircle color={color} size={24} weight='fill' />
					),
				}}
			/>
			<Tab.Screen
				name='Notification'
				component={Notification}
				options={{
					tabBarIcon: ({color}) => (
						<Phosphor.Bell color={color} size={24} weight='fill' />
					),
				}}
			/>
			<Tab.Screen
				name='Jobs'
				component={Job}
				options={{
					tabBarIcon: ({color}) => (
						<Phosphor.Bag color={color} size={24} weight='fill' />
					),
				}}
			/>
		</Tab.Navigator>
	);
}
