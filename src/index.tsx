import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';

import { store } from '@redux/configure-store';
import { MainPage } from './pages/MainPage/MainPage';
import { MainLayout } from '../src/layouts/MainLayout/MainLayout';

import 'normalize.css';
import './index.css';
import 'antd/dist/antd.css';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <HashRouter>
                <Routes>
                    <Route path='/' element={<MainLayout />}>
                        <Route path='/' element={<MainPage />} />
                    </Route>
                </Routes>
            </HashRouter>
        </Provider>
    </React.StrictMode>,
);
