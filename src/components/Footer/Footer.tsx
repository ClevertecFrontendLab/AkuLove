import { Button, Layout, Typography } from 'antd';
import styles from './Footer.module.scss';
import Paragraph from 'antd/lib/typography/Paragraph';
import { AndroidFilled, AppleFilled } from '@ant-design/icons';

const { Text } = Typography;
const { Footer: F } = Layout;

const Footer = () => {
    return (
        <F className={styles.footer}>
            <Button className={styles.footer__reviews} type='text'>
                Смотреть отзывы
            </Button>
            <div className={styles.footer__downloads}>
                <Paragraph className={styles.footer__info}>
                    <Button type='link' className={styles.footer__mainInfo}>
                        Скачать на телефон{' '}
                    </Button>
                    <Text className={styles.footer__secondaryInfo}>Доступно в PRO-тарифе</Text>
                </Paragraph>
                <div className={styles.footer__buttons}>
                    <Button icon={<AndroidFilled />} type='text'>
                        Android OS
                    </Button>
                    <Button icon={<AppleFilled />} type='text'>
                        Apple iOS
                    </Button>
                </div>
            </div>
        </F>
    );
};

export default Footer;
