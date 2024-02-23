import { Outlet } from 'react-router-dom';
import styles from './ResultLayout.module.scss';
import AccessDenied from '../../hoc/AccessDenied';

const ResultLayout = () => {
    return (
        <AccessDenied>
            <main className={styles.main}>
                <div className={styles.main__body}>
                    <div className={styles.main__bodyBlur}>
                        <div className={styles.main__content}>
                            <Outlet />
                        </div>
                    </div>
                </div>
            </main>
        </AccessDenied>
    );
};

export { ResultLayout };
