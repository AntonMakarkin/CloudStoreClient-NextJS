import { Layout } from "antd";
import { CloudOutlined } from "@ant-design/icons"
import { FC } from "react";
import styles from './Header.module.scss'

interface headerProps {
    bgColor?: string;
}

export const Header:FC<headerProps> = ({ bgColor }) => {
    return (
        <Layout.Header style={{ backgroundColor: bgColor}} className={styles.root}>
            <div className={styles.headerInner}>
                <div className={styles.headerLeft}>
                    <h2>
                        <CloudOutlined/>
                        CloudStore
                    </h2>
                </div>
            </div>
        </Layout.Header>
    )
}