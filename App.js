import React from 'react';
import { registerRootComponent } from 'expo';
import MainApp from './app/index';

export default function App() {
  return <MainApp />;
}

registerRootComponent(App);