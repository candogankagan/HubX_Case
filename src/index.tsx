import React from 'react';
import {Provider} from 'react-redux';
import {ApplicationNavigator} from './navigators/application.navigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {store} from './store';

export function App() {
    return (
        <Provider store={store}>
            <SafeAreaProvider>
                <ApplicationNavigator />
            </SafeAreaProvider>
        </Provider>
    );
}

export default App;
