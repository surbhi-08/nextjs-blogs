import styles from './Header.module.scss';
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <p className={styles.blogTitle}>Our Blog</p>
            <h1 className={styles.mainHeading}>Resources and insights</h1>
            <p className={styles.subHeading}>The latest industry news, interviews, technologies, and resources.</p>
            <p className={styles.subHeading}>This is a test blog design showcasing the latest industry news, interviews, technologies, and resources, implemented entirely without any third-party packages.</p>
        </header>
    );
};

export default Header;