import styles from "./EmblemSection.module.css";

/* Simple person/user icon — same icon for all info cards */
const InfoIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7a7536" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
    </svg>
);

export default function EmblemSection() {
    return (
        <section className={styles.section}>
            <div className={styles.grid}>

                {/* LOGO CARD — tall, left column, spans 2 rows */}
                <div className={styles.logoCard}>
                    <div className={styles.logoTop}>
                        <img src="/images/emblem/logo.png" alt="CPPGx Logo" className={styles.logoImage} />
                        <span className={styles.quoteIcon}>"</span>
                    </div>
                    <h3 className={styles.logoTitle}>
                        ตราสัญลักษณ์ของเกี่ยวกับวิทยาลัยเภสัชพันธุศาสตร์<br />และเภสัชกรรมแม่นยำ (วกพ.)
                    </h3>
                    <p className={styles.logoDesc}>
                        ตราสัญลักษณ์ของ CPPGx สะท้อนถึงการผสมรวมระหว่าง &quot;ศิลปะแห่งวิชาชีพเภสัชกรรม&quot; และ &quot;นวัตกรรมทางวิทยาศาสตร์ยุคใหม่&quot; เพื่อสร้างมาตรฐานการรักษาที่เป็นเลิศ
                    </p>
                </div>

                {/* INFO CARD 1 — งูพันถ้วยยา */}
                <div className={styles.infoCard}>
                    <div className={styles.infoIcon}><InfoIcon /></div>
                    <h4 className={styles.infoTitle}>งูพันถ้วยยา (Serpent)</h4>
                    <p className={styles.infoDesc}>
                        สื่อถึงพลังของการเยียวยา ความรอบรู้ และทักษะวิชาชีพที่ต้องมีการพัฒนาและปรับตัวอยู่เสมอ
                    </p>
                </div>

                {/* INFO CARD 2 — เกลียว DNA */}
                <div className={styles.infoCard}>
                    <div className={styles.infoIcon}><InfoIcon /></div>
                    <h4 className={styles.infoTitle}>เกลียว DNA (DNA Helix)</h4>
                    <p className={styles.infoDesc}>
                        องค์ประกอบสำคัญที่พันรอบถ้วยยา สื่อถึง เภสัชพันธุศาสตร์ (Pharmacogenomics) ซึ่งเป็นหัวใจหลักของวิทยาลัยฯ ในการใช้รหัสพันธุกรรมเพื่อออกแบบการใช้ยาเฉพาะบุคคล
                    </p>
                </div>

                {/* INFO CARD 3 — ถ้วยยาไฮเจีย */}
                <div className={styles.infoCard}>
                    <div className={styles.infoIcon}><InfoIcon /></div>
                    <h4 className={styles.infoTitle}>ถ้วยยาไฮเจีย (Bowl of Hygieia)</h4>
                    <p className={styles.infoDesc}>
                        สัญลักษณ์สากลของวิชาชีพเภสัชกรรม สื่อถึงบทบาทหน้าที่ในการดูแลสุขภาพ การรักษา และการจัดเตรียมยาเพื่อมวลชน
                    </p>
                </div>

                {/* INFO CARD 4 — ตัวย่อ CPPGx */}
                <div className={styles.infoCard}>
                    <div className={styles.infoIcon}><InfoIcon /></div>
                    <h4 className={styles.infoTitle}>ตัวย่อ CPPGx: * CP: College of Pharmacy (วิทยาลัยเภสัชกรรม)</h4>
                    <p className={styles.infoDesc}>
                        PGx: Pharmacogenomics (เภสัชพันธุศาสตร์) ตัวอักษร &quot;x&quot; สื่อว่าอ่อนสื่อถึงความทันสมัยและการก้าวกระโดดทางเทคโนโลยี
                    </p>
                    <p className={styles.infoQuote}>
                       
                    </p>
                </div>

            </div>
        </section>
    );
}
