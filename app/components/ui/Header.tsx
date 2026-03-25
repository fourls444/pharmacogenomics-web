import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <img src="/images/favicon.png" className={styles.logo} />
        <div>
          <h1>วิทยาลัยเภสัชพันธุศาสตร์และเภสัชกรรมแม่นยำ</h1>
          <p>College of Pharmacogenomics and Precision Pharmacy</p>
        </div>
      </div>

    </header>
  );
}