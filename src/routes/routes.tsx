import { Navigate, Route, Routes } from 'react-router-dom';
import { MainPage } from '../pages/MainPage/MainPage';
import { MainLayout } from '../layouts/MainLayout/MainLayout';
import { paths } from './paths';
import AuthPage from '@pages/AuthPage/AuthPage';
import { AuthLayout } from '../layouts/Layout/AuthLayout.tsx/AuthLayout';
import RegistrationPage from '@pages/RegistrationPage/RegistrationPage';

export const routes = () => {
    return (
        <>
            <Routes>
                <Route path={paths.AUTH} element={<AuthLayout />}>
                    <Route path={paths.AUTH} index={true} element={<AuthPage />} />
                    <Route path={paths.REGISTRATION} element={<RegistrationPage />} />
                </Route>

                <Route element={<MainLayout />}>
                    <Route path={paths.MAIN} element={<MainPage />} />
                </Route>
                <Route path='*' element={<Navigate to={paths.MAIN} />} />
            </Routes>
        </>
    );
};
