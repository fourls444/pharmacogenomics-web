import styles from "./NewsSection.module.css";

const NEWS_ITEMS = [
    {
        image: "/images/news/Container1.png",
        title: "วภพ. จัดอบรมเชิงปฏิบัติการ: การอ่านผลตรวจยีนสำหรับเภสัชกร",
        description:
            "โครงการพัฒนาเภสัชกร: การใช้ยาอย่างมีประสิทธิภาพในผู้ป่วยมะเร็ง",
    },
    {
        image: "/images/news/Container2.png",
        title: "วภพ. เปิดรับสมัคร: หลักสูตรการจัดการข้อมูลเภสัชพันธุศาสตร์ ปี 71",
        description:
            "อบรม 12 สัปดาห์: การให้คำปรึกษาด้านเภสัชพันธุศาสตร์",
    },
    {
        image: "/images/news/Container3.png",
        title: "วภพ. จัดสัมมนา: เทรนด์ใหม่การใช้ยาเฉพาะบุคคล",
        description:
            "อบรมระยะสั้น 16 สัปดาห์: การใช้เทคโนโลยี AI ในร้านยา",
    },
];

export default function NewsSection() {
    return (
        <section className={styles.newsSection}>
            <div className={styles.newsContainer}>
                {/* HIGHLIGHTS */}
                <div className={styles.newsHeader}>
                    <h2>เรื่องเด่นวิทยาลัยเภสัชพันธุศาสตร์และเภสัชกรรมแม่นยำ</h2>
                    <div className={styles.newsNav}>
                        <button className={styles.navBtn}>&lt;</button>
                        <button className={styles.navBtn}>&gt;</button>
                    </div>
                </div>

                <div className={styles.featuredCard}>
                    <div className={styles.featuredImage}>
                        <img src="/images/news/img.png" alt="featured" />
                    </div>
                    <div className={styles.featuredContent}>
                        <div className={styles.tagOlive}>ข่าวประชาสัมพันธ์</div>
                        <h3>วภพ. จัดอบรม: การประยุกต์ใช้ข้อมูลทางพันธุกรรมของผู้ป่วย</h3>
                        <p>
                            เจาะลึกเทคโนโลยีการวิเคราะห์ DNA: สู่การใช้ยาที่แม่นยำ
                        </p>
                        <button className={styles.readMoreBtn}>อ่านเพิ่มเติม</button>
                    </div>
                </div>

                <div className={styles.paginationDots}>
                    <div className={styles.dotActive}></div>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
                </div>

                {/* NEWS */}
                <div className={styles.newsRowHeader}>
                    <h2>ข่าวสารวิทยาลัยเภสัชพันธุศาสตร์และเภสัชกรรมแม่นยำ</h2>
                    <span className={styles.viewAll}>ดูทั้งหมด &gt;</span>
                </div>

                <div className={styles.newsGrid}>
                    {NEWS_ITEMS.map((item, index) => (
                        <div key={index} className={styles.newsCard}>
                            <div className={styles.newsCardImage}>
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div className={styles.newsCardContent}>
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
