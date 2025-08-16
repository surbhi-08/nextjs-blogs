import React from 'react';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <p className={styles.text}>© 2025 Next JS Blog Surbhi. All rights reserved.</p>
            <p className={styles.text}>Built with Next.js & SCSS</p>
        </footer>
    );
};

export default Footer;