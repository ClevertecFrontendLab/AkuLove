import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import styles from './AuthLayout.module.scss';
import { LogoIcon } from '@components/Icons/Logo';
import { Tabs } from 'antd';
import { useEffect, useState } from 'react';
import { paths } from '../../routes/paths';

const AuthLayout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isRegistrationPage, setIsRegistrationPage] = useState(false);

    useEffect(() => {
        setIsRegistrationPage(false);
        if (location.pathname === paths.REGISTRATION) {
            console.log(location.pathname === paths.REGISTRATION);
            setIsRegistrationPage(true);
        }
    }, [location]);

    const changeLocation = (key: string) => {
        if (key === '1') {
            navigate(paths.AUTH);
        } else {
            navigate(paths.REGISTRATION);
        }
    };

    return (
        <main className={styles.main}>
            <div className={styles.main__body}>
                <div className={styles.main__bodyBlur}>
                    <div className={styles.main__content}>
                        <LogoIcon className={styles.main__logo} />
                        <Tabs
                            activeKey={!isRegistrationPage ? '1' : '2'}
                            className={styles.main__tabs}
                            onTabClick={(key) => changeLocation(key)}
                        >
                            <Tabs.TabPane
                                tab={<div className={styles.innerTab}>Вход</div>}
                                key='1'
                                className={styles.main__tab}
                            />
                            <Tabs.TabPane
                                tab={<div className={styles.innerTab}>Регистрация</div>}
                                key='2'
                                className={styles.main__tab}
                            />
                        </Tabs>
                        <Outlet />
                    </div>
                </div>
            </div>
        </main>
    );
};

export { AuthLayout };
