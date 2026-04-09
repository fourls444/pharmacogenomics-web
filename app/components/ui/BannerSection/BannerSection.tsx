import styles from "./BannerSection.module.css";

export default function BannerSection() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.logoWrapper}>
                    <img src="/images/favicon.png" alt="Royal College Logo" className={styles.logo} />
                </div>
                <div className={styles.textContent}>
                    <h1 className={styles.titleTh}>วิทยาลัยเภสัชพันธุศาสตร์และเภสัชกรรมแม่นยำ</h1>
                    <h2 className={styles.titleEn}>College of Pharmacogenomics and Precision Pharmacy</h2>
                </div>
            </div>
        </section>
    );
}
