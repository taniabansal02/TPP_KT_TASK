import React, {createContext, useState} from 'react';
import {Text, View} from 'react-native';
import Navigation from '../navigation';

export const AppContext = createContext({text: '', setText: (para) => {}});

const App = () => {
  const [appText, setAppText] = useState('');
  return (
    <AppContext.Provider value={{text: appText, setText: setAppText}}>
      <Navigation />
    </AppContext.Provider>
  );
};

export default App;
