import Lottie from 'lottie-react';
import loader from './loader.json';

import styles from './Loader.module.scss';

const Loader = () => {
    return (
        <div className={styles.body}>
            <div className={styles.loader}>
                <Lottie animationData={loader} loop={true} width={150} height={150} />
            </div>
        </div>
    );
};

export default Loader;
