// components/Footer.tsx
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import styles from "../../styles/Footer.module.css";

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.icons}>
                <Link href="https://github.com/draclyr">
                    <FaFacebookF className={styles.icon} />
                </Link>
                <Link href="https://x.com/Draclyr">
                    <FaTwitter className={styles.icon} />
                </Link>
                <Link href="https://www.linkedin.com/in/draclyr/">
                    <FaLinkedinIn className={styles.icon} />
                </Link>
            </div>
            <hr className={styles.divider} />
            <p className={styles.copyright}>© 2024 Create By Hesam Shahmoradi Draclyr</p>
        </footer>
    );
};

export default Footer;
