import { Navigate, Route, Routes } from 'react-router-dom';
import { MainPage } from '../pages/MainPage/MainPage';
import { MainLayout } from '../layouts/MainLayout/MainLayout';
import { paths } from './paths';
import AuthPage from '@pages/AuthPage/AuthPage';
import { AuthLayout } from '../layouts/AuthLayout/AuthLayout';
import RegistrationPage from '@pages/RegistrationPage/RegistrationPage';
import { ResultLayout } from '../layouts/ResultLayout/ResultLayout';
import ErrorLoginPage from '@pages/Result/ErrorLoginPage/ErrorLoginPage';
import SuccessPage from '@pages/Result/SuccessPage/SuccessPage';
import ErrorUserExitPage from '@pages/Result/ErrorUserExistPage/ErrorUserExistPage';
import ErrorPage from '@pages/Result/ErrorPage/ErrorPage';
import ErrorEmailNoExistPage from '@pages/Result/ErrorEmailNoExistPage/ErrorEmailNoExistPage';
import ErrorCheckEmailPage from '@pages/Result/ErrorCheckEmail/ErrorCheckEmail';

export const routes = () => {
    return (
        <>
            <Routes>
                <Route path={paths.RESULT} element={<Navigate to={paths.AUTH} replace />} />
                <Route path='*' element={<Navigate to={paths.MAIN} replace />} />

                <Route path={paths.AUTH} element={<AuthLayout />}>
                    <Route path={paths.AUTH} index={true} element={<AuthPage />} />
                    <Route path={paths.REGISTRATION} element={<RegistrationPage />} />
                </Route>

                <Route path={paths.RESULT} element={<ResultLayout />}>
                    <Route path={paths.SUCCESS} element={<SuccessPage />} />
                    <Route path={paths.ERROR} element={<ErrorPage />} />
                    <Route path={paths.ERROR_LOGIN} element={<ErrorLoginPage />} />
                    <Route path={paths.ERROR_USER_EXIST} element={<ErrorUserExitPage />} />
                    <Route path={paths.ERROR_EMAIL_NO_EXIST} element={<ErrorEmailNoExistPage />} />
                    <Route path={paths.ERROR_CHECK_EMAIL} element={<ErrorCheckEmailPage />} />
                </Route>
                <Route element={<MainLayout />}>
                    <Route path={paths.MAIN} element={<MainPage />} />
                </Route>
            </Routes>
        </>
    );
};
