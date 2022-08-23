import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({ config });


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider >
    {/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}

    <App />
  </ChakraProvider>
);
