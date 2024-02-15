import Title from 'antd/lib/typography/Title';
import styles from './MainPage.module.scss';
import { Button, Grid, Layout, Typography } from 'antd';
import { CalendarTwoTone, HeartFilled } from '@ant-design/icons';
import { ProfileIcon } from '@components/Icons/ProfileIcon';
const { Content } = Layout;
const { Text } = Typography;

export const MainPage = () => {
    const { useBreakpoint } = Grid;
    const screens = useBreakpoint();
    const { lg } = screens;

    return (
        <Content className={styles.main}>
            <div className={styles.main__fitInfo}>
                <Text className={styles.main__text}>С CleverFit ты сможешь:</Text>
                <Text className={styles.main__text}>
                    — планировать свои тренировки на календаре, выбирая тип и уровень нагрузки;
                </Text>
                <Text className={styles.main__text}>
                    — отслеживать свои достижения в разделе статистики, сравнивая свои результаты
                    {lg ? <br /> : ' '}с нормами и рекордами;
                </Text>
                <Text className={styles.main__text}>
                    — создавать свой профиль, где ты можешь загружать свои фото, видео и отзывы
                    {lg ? <br /> : ' '} о тренировках;
                </Text>
                <Text className={styles.main__text}>
                    — выполнять расписанные тренировки для разных частей тела, следуя подробным
                    инструкциям и советам профессиональных тренеров.
                </Text>
            </div>
            <div className={styles.main__whatIsCleverFit}>
                <Title className={styles.main__title} level={4}>
                    CleverFit — это не просто приложение, а твой личный помощник {lg ? <br /> : ' '}
                    в мире фитнеса. Не откладывай на завтра — начни тренироваться уже сегодня!
                </Title>
            </div>
            <div className={styles.main__cards}>
                <div className={styles.main__card}>
                    <Text className={styles.main__cardText}>Расписать тренировки</Text>
                    <Button className={styles.main__cardButton} icon={<HeartFilled />} type='text'>
                        Тренировки
                    </Button>
                </div>
                <div className={styles.main__card}>
                    <Text className={styles.main__cardText}>Назначить календарь</Text>
                    <Button
                        className={styles.main__cardButton}
                        icon={<CalendarTwoTone />}
                        type='text'
                    >
                        Календарь
                    </Button>
                </div>
                <div className={styles.main__card}>
                    <Text className={styles.main__cardText}>Заполнить профиль</Text>
                    <Button className={styles.main__cardButton} icon={<ProfileIcon />} type='text'>
                        Профиль
                    </Button>
                </div>
            </div>
        </Content>
    );
};
