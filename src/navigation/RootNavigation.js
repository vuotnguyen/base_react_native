import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from '../screen/Home';
import Menu from '../screen/Menu';


//https://reactnavigation.org/docs/nesting-navigators/#navigating-to-a-screen-in-a-nestd-navigator
const Stack = createNativeStackNavigator();

const navigationRef = React.createRef();

export {
    navigationRef
};
export function navigate(name, params) {
    navigationRef.current?.navigate(name, params);
}
export function navigateReplace(name, params) {
    navigationRef.current?.dispatch(StackActions.replace(name, params));
}
export function navigateBack() {
    navigationRef.current?.goBack();
}

export default function RootNavigation() {
    return (
        <SafeAreaProvider>
            <NavigationContainer
                ref={navigationRef}
            >
                <Stack.Navigator headerMode='none' initialRouteName="HomePage">
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Menu" component={Menu} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}