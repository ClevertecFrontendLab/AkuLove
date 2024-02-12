import { Layout, Menu } from 'antd';
import React from 'react';
const { Sider } = Layout;

import styles from './SideBar.module.css';
import { SideBarMenu } from '@components/SideBarMenu/SideBarMenu';
import { FitLogoIcon } from '@components/Icons/FitLogo';
import { LogoIcon } from '@components/Icons/Logo';
import { ExitIcon } from '@components/Icons/ExitIcon';
import { MobileSideBarMenu } from '@components/MobileSideBarMenu/MobileSideBarMenu';
import ToggleSideBarButton from '@components/Buttons/ToggleSideBarButton/ToggleSideBarButton';

type SidebarProps = {
    sidebarWidth: number;
    collapsed: boolean;
    setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
    mobile?: boolean;
};

const SideBar: React.FC<SidebarProps> = ({ collapsed, sidebarWidth, setCollapsed, mobile }) => {
    return (
        <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            theme='light'
            width={sidebarWidth}
            collapsedWidth={mobile ? 64 : 0.1}
            className={styles.sider}
        >
            <div className={styles.sideBarContent}>
                {collapsed && mobile ? (
                    <FitLogoIcon className={styles.logoFit} />
                ) : (
                    <LogoIcon className={styles.logo} />
                )}
                {mobile ? (
                    <SideBarMenu padding={collapsed ? '25px' : '18px'} />
                ) : (
                    <MobileSideBarMenu padding={'8px'} />
                )}
            </div>

            {mobile ? (
                <Menu
                    className={styles.exit}
                    items={[
                        {
                            className: `${styles.exitItem}`,
                            key: 'exit',
                            icon: <ExitIcon />,
                            label: 'Выход',
                        },
                    ]}
                />
            ) : (
                <Menu
                    className={styles.exit}
                    items={[
                        {
                            className: `${styles.exitItem}`,
                            key: 'exit',
                            label: 'Выход',
                        },
                    ]}
                />
            )}
            <ToggleSideBarButton
                mobile={mobile}
                setCollapsed={setCollapsed}
                collapsed={collapsed}
            />
        </Sider>
    );
};

export default SideBar;
