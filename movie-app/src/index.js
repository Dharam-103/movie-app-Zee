import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {ChakraProvider} from "@chakra-ui/react";
import AuthContextProvider from './Context/AuthContextProvider';
import SearchContextProvider from './Context/SearchContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <SearchContextProvider>
   <AuthContextProvider>
      <ChakraProvider>
         <BrowserRouter>
              <App />
         </BrowserRouter>
      </ChakraProvider>
   </AuthContextProvider>
   </SearchContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();