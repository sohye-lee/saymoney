import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { SpeechProvider } from '@speechly/react-client';
import App from './App';
import store from './store';


ReactDOM.render(
    <SpeechProvider appId="ad25b836-9108-4321-b7ef-a8a8cc4f229d" language="en-US">
        <Provider store={store}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </Provider>
    </SpeechProvider>, 
    document.getElementById('root')
);