import styles from './ErrorCheckEmail.module.scss';
import Title from 'antd/lib/typography/Title';
import Text from 'antd/lib/typography/Text';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../../routes/paths';
import { ErrorImageIcon } from '@components/Icons/ErrorImage';

const ErrorCheckEmailPage = () => {
    const navigate = useNavigate();

    const returnToAuth = () => {
        return navigate(paths.AUTH);
    };

    return (
        <div className={styles.error}>
            <ErrorImageIcon className={styles.error__icon} />
            <Title className={styles.error__title} level={3}>
                Что-то пошло не так
            </Title>
            <Text className={styles.error__text} type='secondary'>
                Произошла ошибка, попробуйте отправить форму ещё раз.
            </Text>
            <Button
                size='large'
                onClick={returnToAuth}
                className={styles.error__button}
                type='primary'
            >
                Назад
            </Button>
        </div>
    );
};

export default ErrorCheckEmailPage;
