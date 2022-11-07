import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import App from './App';
import {customTheme} from './customTheme';

ReactDOM.render(
    <React.StrictMode>
        <RecoilRoot>
            <BrowserRouter>
                <ChakraProvider theme={customTheme}>
                    <App />
                </ChakraProvider>
            </BrowserRouter>
        </RecoilRoot>
    </React.StrictMode>,
    document.getElementById('root')
);
