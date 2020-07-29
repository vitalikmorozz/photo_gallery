import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {NavigationContainer} from '@react-navigation/native';
import {
    createStackNavigator,
    CardStyleInterpolators,
} from '@react-navigation/stack';

import Colors from './constants/Colors';
import rootReducer from './redux/reducers/rootReducer';

import GalleryScreen from './screens/GalleryScreen';
import SinglePhotoScreen from './screens/SinglePhotoScreen';

const store = createStore(rootReducer, applyMiddleware(thunk));

const Stack = createStackNavigator();

const App = () => {
    return (
        <Provider store={store}>
            <StatusBar backgroundColor={Colors.headerColor} />
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: Colors.headerColor,
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            color: 'white',
                        },
                        gestureEnabled: true,
                        gestureDirection: 'horizontal',
                        cardStyleInterpolator:
                            CardStyleInterpolators.forHorizontalIOS,
                    }}>
                    <Stack.Screen name="Gallery" component={GalleryScreen} />
                    <Stack.Screen name="Photo" component={SinglePhotoScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default App;
