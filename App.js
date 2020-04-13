import React from 'react';
import Main from './components/mainComponent';
import Menu from './components/MenuComponent';
import { configureStore } from './redux/configureStore';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react'
import { Loading } from './components/LoadingComponent';


const { persistor, store } = configureStore();

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate
                    loading={<Loading />}
                    persistor={persistor}>
                    <Main />
                </PersistGate>
            </Provider>
        );
    }
}