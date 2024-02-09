import { CloseSideBarIcon } from '@components/Icons/CloseSideBar';
import { OpenSideBarIcon } from '@components/Icons/OpenSideBar';
import { Button, Layout } from 'antd';
import React from 'react';
const { Sider } = Layout;

import styles from './SideBar.module.css';
import { SideBarMenu } from '@components/SideBarMenu/SideBarMenu';
import { SmallLogoIcon } from '@components/Icons/SmallLogo';
import { LogoIcon } from '@components/Icons/Logo';

type SidebarProps = {
    sidebarWidth: number;
    collapsed: boolean;
    setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
};

const SideBar: React.FC<SidebarProps> = ({ collapsed, sidebarWidth, setCollapsed }) => {
    return (
        <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            theme='light'
            width={sidebarWidth}
            collapsedWidth={64}
        >
            <div className={styles.sideBarContent}>
                {collapsed ? (
                    <SmallLogoIcon
                        style={{ paddingTop: '50px', paddingLeft: '17px' }}
                        className={styles.logo}
                    />
                ) : (
                    <LogoIcon style={{ paddingLeft: '28px' }} className={styles.logo} />
                )}
                <SideBarMenu padding={collapsed ? '25px' : '18px'} />
            </div>
            <Button
                type='text'
                className={styles.sideBarCloseButton}
                icon={collapsed ? <OpenSideBarIcon /> : <CloseSideBarIcon />}
                onClick={() => setCollapsed(!collapsed)}
            />
        </Sider>
    );
};

export default SideBar;
