import { CloseCircleFilled } from '@ant-design/icons';
import styles from './ErrorEmailNoExistPage.module.scss';
import Title from 'antd/lib/typography/Title';
import Text from 'antd/lib/typography/Text';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../../routes/paths';

const ErrorEmailNoExistPage = () => {
    const navigate = useNavigate();

    const returnToAuth = () => {
        return navigate(paths.AUTH);
    };

    return (
        <div className={styles.error}>
            <CloseCircleFilled className={styles.error__icon} />
            <Title className={styles.error__title} level={3}>
                Такой e-mail не зарегистрирован
            </Title>
            <Text className={styles.error__text} type='secondary'>
                Мы не нашли в базе вашего e-mail. Попробуйте войти с другим e-mail.
            </Text>
            <Button
                size='large'
                onClick={returnToAuth}
                className={styles.error__button}
                type='primary'
            >
                Попробовать снова
            </Button>
        </div>
    );
};

export default ErrorEmailNoExistPage;
