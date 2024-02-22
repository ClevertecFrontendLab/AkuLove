import { Outlet } from 'react-router-dom';
import styles from './ResultLayout.module.scss';

const ResultLayout = () => {
    return (
        <main className={styles.main}>
            <div className={styles.main__body}>
                <div className={styles.main__bodyBlur}>
                    <div className={styles.main__content}>
                        <Outlet />
                    </div>
                </div>
            </div>
        </main>
    );
};

export { ResultLayout };
