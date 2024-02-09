import { Grid, Layout } from 'antd';
import { Outlet } from 'react-router-dom';
const { Footer } = Layout;

import styles from './MainLayout.module.css';
import { useState } from 'react';
import SideBar from '@components/SideBar/SideBar';
import Header from '@components/Header/Header';

const MainLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const { useBreakpoint } = Grid;
    const screens = useBreakpoint();
    const { md, lg, xl } = screens;

    return (
        <Layout
            className={styles.layout}
            style={{
                minHeight: '100vh',
            }}
        >
            <SideBar collapsed={collapsed} setCollapsed={setCollapsed} sidebarWidth={208} />
            <Layout className={styles.backgroundLayout}>
                <Header lg={lg} md={md} xl={xl} />
                <Outlet />
                <Footer className={styles.footer}>Footer</Footer>
            </Layout>
        </Layout>
    );
};

export { MainLayout };
