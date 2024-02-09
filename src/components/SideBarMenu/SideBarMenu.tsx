import { CalendarTwoTone, HeartFilled, IdcardOutlined, TrophyFilled } from '@ant-design/icons';
import { Menu } from 'antd';

import styles from './SideBarMenu.module.css';

const SideBarMenu = ({ padding }: { padding: string }) => {
    return (
        <Menu
            theme='light'
            mode='inline'
            className={styles.sideBarMenu}
            items={[
                {
                    key: 'calendar',
                    icon: <CalendarTwoTone />,
                    label: 'Календарь',

                    style: {
                        paddingLeft: `${padding}`,
                    },
                },
                {
                    key: 'trainings',
                    icon: <HeartFilled />,
                    label: 'Тренировки',
                    style: {
                        paddingLeft: `${padding}`,
                    },
                },
                {
                    key: 'achievements',
                    icon: <TrophyFilled />,
                    label: 'Достижения',
                    style: {
                        paddingLeft: `${padding}`,
                    },
                },
                {
                    key: 'profile',
                    icon: <IdcardOutlined />,
                    label: 'Профиль',
                    style: {
                        paddingLeft: `${padding}`,
                    },
                },
            ]}
        />
    );
};

export { SideBarMenu };
