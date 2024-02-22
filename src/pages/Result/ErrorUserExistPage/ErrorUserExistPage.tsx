import { CloseCircleFilled } from '@ant-design/icons';
import styles from './ErrorUserExistPage.module.scss';
import Title from 'antd/lib/typography/Title';
import Text from 'antd/lib/typography/Text';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../../routes/paths';

const ErrorUserExitPage = () => {
    const navigate = useNavigate();

    const returnToAuth = () => {
        return navigate(paths.AUTH);
    };

    return (
        <div className={styles.error}>
            <CloseCircleFilled className={styles.error__icon} />
            <Title className={styles.error__title} level={3}>
                Данные не сохранились
            </Title>
            <Text className={styles.error__text} type='secondary'>
                Такой e-mail уже записан в системе. Попробуйте зарегистрироваться по другому e-mail.
            </Text>
            <Button
                size='large'
                onClick={returnToAuth}
                className={styles.error__button}
                type='primary'
            >
                Назад к регистрации
            </Button>
        </div>
    );
};

export default ErrorUserExitPage;
