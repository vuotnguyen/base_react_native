import React, { useEffect, useRef, useState } from 'react';
import {
    StatusBar, View
} from 'react-native';
import { Provider } from 'react-redux';
import RootNavigation from './navigation/RootNavigation';
import store from './redux/Store';

let toggleLoading = () => {
}

const App = () => {
    const refLoading = useRef();
    const [isReady, setIsReady] = useState(false)

    useEffect(() => {
        toggleLoading = (flag) => {
            refLoading.current?.toggle(flag)
        }
        setIsReady(true);

    }, [])
    return (
        <View style={{ flex: 1 }}>
            <StatusBar translucent={true} backgroundColor={'rgba(0,0,0,0)'} />
            <Provider store={store}>
                {isReady && <RootNavigation />}
            </Provider>
        </View>
    );
};
export { toggleLoading };
export default App;