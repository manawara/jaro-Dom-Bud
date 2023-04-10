import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/styles/theme';
import Home from '../components/pages/Home/Home';
import Contact from '../components/pages/Contact/Contact';
import { GlobalStyle } from '../assets/styles/GlobalStyle';

const Root = () => (
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/kontakt" element={<Contact />} />
            </Routes>
        </ThemeProvider>
    </BrowserRouter>
);

export default Root;
