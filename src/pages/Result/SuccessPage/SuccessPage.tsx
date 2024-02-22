import { CheckCircleFilled } from '@ant-design/icons';
import styles from './SuccessPage.module.scss';
import Title from 'antd/lib/typography/Title';
import Text from 'antd/lib/typography/Text';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../../routes/paths';

const SuccessPage = () => {
    const navigate = useNavigate();

    const returnToAuth = () => {
        return navigate(paths.AUTH);
    };

    return (
        <div className={styles.success}>
            <CheckCircleFilled className={styles.success__icon} />
            <Title className={styles.success__title} level={3}>
                Регистрация успешна
            </Title>
            <Text className={styles.success__text} type='secondary'>
                Регистрация прошла успешно. Зайдите в приложение, используя свои e-mail и пароль.
            </Text>
            <Button
                size='large'
                onClick={returnToAuth}
                className={styles.success__button}
                type='primary'
            >
                Войти
            </Button>
        </div>
    );
};

export default SuccessPage;
