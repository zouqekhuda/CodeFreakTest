import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
    ScreenOne,
    ScreenTwo,
} from '../screens/index'
import BackArrowHeader from '../components/back-arrow-header';
import ArrowIconHeader from '../components/arrow-icon-header';

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen component={ScreenOne} name="ScreenOne" options={{
                    header: (props) => <BackArrowHeader />
                }} />
                <Stack.Screen component={ScreenTwo} name="ScreenTwo" options={{
                    header: (props) => <ArrowIconHeader />
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Navigation