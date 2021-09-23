import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import { store } from './store/store';

const HeroApp = () => {

    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    )
}

export default HeroApp;