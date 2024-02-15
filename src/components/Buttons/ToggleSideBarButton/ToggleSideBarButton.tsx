import { Button } from 'antd';
import { OpenSideBarIcon } from '@components/Icons/OpenSideBar';
import { CloseSideBarIcon } from '@components/Icons/CloseSideBar';
import { MobileOpenSideBarIcon } from '@components/Icons/MobileOpenSideBar';
import { MobileCloseSideBarIcon } from '@components/Icons/MobileCloseSideBar';

import styles from './ToggleSideBarButton.module.scss';
import React from 'react';

type ToggleSideBarButtonProps = {
    mobile?: boolean;
    collapsed?: boolean;
    setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
};

const ToggleSideBarButton: React.FC<ToggleSideBarButtonProps> = ({
    setCollapsed,
    collapsed,
    mobile,
}) => {
    return (
        <>
            {mobile ? (
                <Button
                    type='text'
                    className={styles.sideBarCloseButton}
                    icon={collapsed ? <OpenSideBarIcon /> : <CloseSideBarIcon />}
                    data-test-id='sider-switch'
                    onClick={() => setCollapsed(!collapsed)}
                />
            ) : (
                <Button
                    type='text'
                    className={styles.sideBarCloseButton}
                    icon={collapsed ? <MobileOpenSideBarIcon /> : <MobileCloseSideBarIcon />}
                    data-test-id='sider-switch-mobile'
                    onClick={() => setCollapsed(!collapsed)}
                />
            )}
        </>
    );
};

export default ToggleSideBarButton;
