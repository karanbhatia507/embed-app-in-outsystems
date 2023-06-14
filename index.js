import React from 'react';
import { createRoot } from 'react-dom/client';
import { store, persistor } from './src/redux/store';
import { Provider } from 'react-redux';
import App from './src/packages/messenger/App.js';
import { PersistGate } from 'redux-persist/integration/react';

const container = document.getElementById('reactroot');
const reactroot = createRoot(container);

const getDataFromOutsystems = (data) => {
  console.log('------------getDataFromOutsystems in react-----------', data);
}

const passDataToOutsystems = (data) => {
  console.log('------------passDataToOutsystems from react-----------', data);
  return data + 3;
}

reactroot.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

window.getDataFromOutsystems = getDataFromOutsystems;
window.passDataToOutsystems = passDataToOutsystems