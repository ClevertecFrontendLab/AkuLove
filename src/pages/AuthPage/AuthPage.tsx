import { Button, Checkbox, Form, Input, Grid } from 'antd';
import styles from './AuthPage.module.scss';
import { Link } from 'react-router-dom';
import { GooglePlusOutlined } from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';

const { useBreakpoint } = Grid;

const AuthPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const fromPage = location.state?.from?.pathname || '/main';

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
                className={styles.main__item}
                name='password'
                rules={[{ required: true, message: '' }]}
            >
                <Input.Password size='large' placeholder='Пароль' />
            </Form.Item>
            <div className={styles.main__forget}>
                <Form.Item
                    className={styles.main__item_forget}
                    name='remember'
                    valuePropName='checked'
                >
                    <Checkbox className={styles.main__checkbox}>Запомнить меня</Checkbox>
                </Form.Item>
                <Form.Item className={styles.main__item_forget}>
                    <Link to='/main'>
                        <Button className={styles.main__forgetButton} type='link'>
                            Забыли пароль?
                        </Button>
                    </Link>
                </Form.Item>
            </div>

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
                Войти через Google
            </Button>
        </Form>
    );
};

export default AuthPage;