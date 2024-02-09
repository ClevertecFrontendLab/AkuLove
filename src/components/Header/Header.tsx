import { Button, Layout } from 'antd';
const { Header: H } = Layout;

import styles from './Header.module.css';
import { SettingOutlined } from '@ant-design/icons';
import Title from 'antd/lib/typography/Title';

type HeaderProps = {
    xl: boolean | undefined;
    lg: boolean | undefined;
    md: boolean | undefined;
};

const Header: React.FC<HeaderProps> = ({ lg, md, xl }) => {
    return (
        <H className={styles.header}>
            <Button style={{ height: 22 }} className={styles.linkButton} type='text'>
                Главная
            </Button>

            <div className={styles.content}>
                <Title level={xl ? 1 : lg ? 2 : md ? 3 : 4}>
                    Приветствуем тебя в CleverFit — приложении, {md ? <br /> : ''} которое поможет
                    тебе добиться своей мечты!
                </Title>
                <Button
                    style={lg ? { minWidth: 124 } : md ? { minWidth: 105 } : { minWidth: 32 }}
                    shape={md ? 'default' : 'circle'}
                    icon={lg ? <SettingOutlined /> : md ? '' : <SettingOutlined />}
                    type={md ? 'text' : 'default'}
                >
                    {md ? 'Настройки' : ''}
                </Button>
            </div>
        </H>
    );
};

export default Header;
