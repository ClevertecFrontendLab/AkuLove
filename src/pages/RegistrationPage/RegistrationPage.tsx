import { Button, Form, Input, Grid } from 'antd';
import styles from './RegistrationPage.module.scss';
import { GooglePlusOutlined } from '@ant-design/icons';
const { useBreakpoint } = Grid;

const RegistrationPage = () => {
    const { sm } = useBreakpoint();

    return (
        <Form name='basic' className={styles.main__form} autoComplete='off'>
            <Form.Item
                className={styles.main__item}
                name='username'
                rules={[
                    {
                        required: true,
                        pattern:
                            /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                        message: '',
                    },
                ]}
            >
                <Input size='large' addonBefore={'e-mail:'} />
            </Form.Item>

            <Form.Item
                className={styles.main__item_password}
                name='password'
                help='Пароль не менее 8 символов, с заглавной буквой и цифрой'
                rules={[
                    {
                        required: true,
                        pattern: /^(?=.*?[A-Z])(?=.*?[0-9]).{8,}$/,
                        message: 'Пароль не менее 8 символов, с заглавной буквой и цифрой',
                    },
                ]}
            >
                <Input.Password size='large' placeholder='Пароль' />
            </Form.Item>
            <Form.Item
                className={styles.main__item_repeat}
                name='confirm'
                dependencies={['password']}
                rules={[
                    { required: true, message: 'Пароли не совпадают' },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('Пароли не совпадают'));
                        },
                    }),
                ]}
            >
                <Input.Password size='large' placeholder='Повторите пароль' />
            </Form.Item>
            <Form.Item className={styles.main__item_submit}>
                <Button
                    size='large'
                    className={styles.main__submitButton}
                    type='primary'
                    htmlType='submit'
                >
                    Войти
                </Button>
            </Form.Item>
            <Button
                size='large'
                className={styles.main__google}
                type='default'
                htmlType='button'
                icon={sm ? <GooglePlusOutlined /> : ''}
            >
                Регистрация через Google
            </Button>
        </Form>
    );
};

export default RegistrationPage;
