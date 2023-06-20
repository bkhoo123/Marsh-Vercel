import '<prefix>/styles/globals.css'
import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import store from "../state"


export default function App({ Component, pageProps }) {
 
  return (
    <Provider store={store}>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </Provider>
  );
}