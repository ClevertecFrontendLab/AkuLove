import { WarningFilled } from '@ant-design/icons';
import styles from './ErrorPage.module.scss';
import Title from 'antd/lib/typography/Title';
import Text from 'antd/lib/typography/Text';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../../routes/paths';

const ErrorPage = () => {
    const navigate = useNavigate();

    const returnToAuth = () => {
        return navigate(paths.AUTH);
    };

    return (
        <div className={styles.error}>
            <WarningFilled className={styles.error__icon} />
            <Title className={styles.error__title} level={3}>
                Данные не сохранились
            </Title>
            <Text className={styles.error__text} type='secondary'>
                Что-то пошло не так и ваша регистрация не завершилась. Попробуйте ещё раз.
            </Text>
            <Button
                size='large'
                onClick={returnToAuth}
                className={styles.error__button}
                type='primary'
            >
                Повторить
            </Button>
        </div>
    );
};

export default ErrorPage;
