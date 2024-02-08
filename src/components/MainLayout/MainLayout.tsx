import { Button, Grid, Layout } from 'antd';
import { Outlet } from 'react-router-dom';
const { Header, Footer, Sider } = Layout;

import styles from './MainLayout.module.css';
import Title from 'antd/lib/typography/Title';
import { SettingOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { OpenSideBarIcon } from '@components/Icons/OpenSideBar';
import { CloseSideBarIcon } from '@components/Icons/CloseSideBar';

const MainLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const { useBreakpoint } = Grid;
    const screens = useBreakpoint();
    const { xs, sm, md, lg, xl, xxl } = screens;

    return (
        <Layout className={styles.layout} style={{ minHeight: '100vh' }}>
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                collapsedWidth={64}
                onCollapse={(value) => setCollapsed(value)}
                width='208px'
                className={styles.sideBar}
            >
                <div className='container'>
                    Sider
                    <Button
                        type='text'
                        className={styles.sideBarCloseButton}
                        icon={collapsed ? <OpenSideBarIcon /> : <CloseSideBarIcon />}
                        onClick={() => setCollapsed(!collapsed)}
                    />
                </div>
            </Sider>
            <Layout>
                <Header className={styles.header}>
                    <Button style={{ height: 22 }} className={styles.linkButton} type='text'>
                        Главная
                    </Button>

                    <div className={styles.content}>
                        <Title level={xl ? 1 : lg ? 2 : md ? 3 : 4}>
                            Приветствуем тебя в CleverFit — приложении, {md ? <br /> : ''} которое
                            поможет тебе добиться своей мечты!
                        </Title>
                        <Button
                            style={
                                lg ? { minWidth: 124 } : md ? { minWidth: 105 } : { minWidth: 32 }
                            }
                            shape={md ? 'default' : 'circle'}
                            icon={lg ? <SettingOutlined /> : md ? '' : <SettingOutlined />}
                            type='text'
                        >
                            {md ? 'Настройки' : ''}
                        </Button>
                    </div>
                </Header>
                <Outlet />
                <Footer className={styles.footer}>Footer</Footer>
            </Layout>
        </Layout>
    );
};

export { MainLayout };
