"use client";
import { useState } from "react";
import CommitteeSection from "../CommitteeSection/CommitteeSection";
import CoursesSection from "../CoursesSection/CoursesSection";
import EmblemSection from "../EmblemSection/EmblemSection";
import LocationSection from "../LocationSection/LocationSection";
import styles from "./HistorySection.module.css";

const MENU_ITEMS = [
    "ประวัติความเป็นมา",
    "ข้อมูลหลักสูตร",
    "คณะกรรมการบริหาร",
    "ตราสัญลักษณ์",
    "ติดต่อและสถานที่ตั้ง",
];

const TIMELINE_DATA = [
    {
        year: "ก่อนปี 2567",
        title: "ยุคบุกเบิก Precision Medicine",
        description:
            "การวิจัยด้านเภสัชพันธุศาสตร์เริ่มมีบทบาทสำคัญในระบบสาธารณสุขไทย เพื่อลดการแพ้ยารุนแรงและเพิ่มประสิทธิภาพการรักษา",
    },
    {
        year: "2567",
        title: "จุดกำเนิดอย่างเป็นทางการ",
        description:
            "จัดตั้งวิทยาลัยฯ ภายใต้ ราชวิทยาลัยเภสัชกรรมแห่งประเทศไทย ตามข้อบังคับสภาเภสัชกรรม เพื่อรองรับนโยบายการแพทย์สมัยใหม่",
    },
    {
        year: "ปัจจุบัน",
        title: "สร้างมาตรฐานวิชาชีพ",
        description:
            "ยกระดับศักยภาพเภสัชกรให้เชี่ยวชาญการใช้ข้อมูลพันธุกรรม (Pharmacogenomics) ร่วมกับการบริบาลทางเภสัชกรรมในหน้าที่งานจริง",
    },
    {
        year: "อนาคต",
        title: "ความมุ่งมั่นเฉพาะบุคคล",
        description:
            "มุ่งสู่การบูรณาการข้อมูล DNA ในระบบฐานข้อมูลสุขภาพ เพื่อการใช้ยาที่ปลอดภัยและแม่นยำสูงสุดสำหรับคนไทยทุกคน",
    },
];

/* SVG Icons for mission cards */
const ChartIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
);

const SearchIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <line x1="11" y1="8" x2="11" y2="14" />
        <line x1="8" y1="11" x2="14" y2="11" />
    </svg>
);

const ChatIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
);

export default function HistorySection() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className={styles.historySection}>

            {/* LEFT MENU */}
            <div className={styles.historyMenu}>
                <h3>เกี่ยวกับวิทยาลัยเภสัชพันธุศาสตร์<br />และเภสัชกรรมแม่นยำ (วกพ.)</h3>

                <ul>
                    {MENU_ITEMS.map((item, index) => (
                        <li
                            key={index}
                            className={`${styles.menuItem} ${activeTab === index ? styles.active : ""}`}
                            onClick={() => setActiveTab(index)}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* RIGHT CONTENT */}
            <div className={styles.historyContent}>

                {activeTab === 0 && (
                    <>
                        {/* HEADING */}
                        <h2 className={styles.mainHeading}>
                            ก้าวสำคัญของวิทยาลัยเภสัชพันธุศาสตร์และเภสัชกรรมแม่นยำ
                        </h2>

                        <p className={styles.subText}>
                            เรามุ่งเน้นการประยุกต์ใช้ข้อมูลทางพันธุกรรมของผู้ป่วยมาออกแบบการใช้ยา เพื่อเปลี่ยนการรักษาแบบเดิม ให้เป็นการรักษาที่ &quot;แม่นยำ
                            ถูกขนาด และปลอดภัย&quot; ลดความเสี่ยงจากการแพ้ยารุนแรงและเพิ่มประสิทธิภาพการรักษาในระดับสูงสุด
                        </p>

                        {/* TIMELINE */}
                        <div className={styles.timeline}>
                            {TIMELINE_DATA.map((item, index) => (
                                <div key={index} className={styles.timelineItem}>
                                    <div className={styles.yearBox}>
                                        <span className={styles.yearText}>{item.year}</span>
                                        <span className={styles.titleText}>{item.title}</span>
                                    </div>
                                    <p className={styles.timelineDesc}>{item.description}</p>
                                </div>
                            ))}
                        </div>

                        {/* BADGE */}
                        <div className={styles.badgeRow}>
                            <span className={styles.badge}>
                                <span className={styles.badgeIcon}>◎</span>
                                วัตถุประสงค์การจัดตั้ง
                            </span>
                        </div>

                        {/* MISSION HEADING */}
                        <h2 className={styles.missionHeading}>
                            พันธกิจและบทบาทหน้าที่ (Our Mission &amp; Roles)
                        </h2>
                        <p className={styles.missionSubText}>
                            วิทยาลัยฯ มุ่งมั่นที่จะเป็นกลไกหลักในการขับเคลื่อนนโยบายการแพทย์เฉพาะบุคคล (Personalized Medicine) ของประเทศ ผ่าน 3 เสาหลักสำคัญ
                        </p>

                        {/* MISSION CARDS - 2x2 GRID */}
                        <div className={styles.missionGrid}>
                            {/* Card 1 - top left */}
                            <div className={styles.missionCard}>
                                <div className={styles.missionCardIcon}>
                                    <ChartIcon />
                                </div>
                                <div className={styles.missionCardContent}>
                                    <h4>มาตรฐานวิชาการและวิชาชีพ</h4>
                                    <p>พัฒนาหลักสูตรมาตรการฝึกอบรมและจัดการศึกษาต่อเนื่อง เพื่อสร้างเภสัชกรผู้เชี่ยวชาญที่มีสมรรถนะสูงในการใช้ข้อมูลพันธุกรรม พร้อมกำหนดมาตรฐานแนวทางปฏิบัติหน้าที่งาน (Standard Guidelines) ให้เป็นที่ยอมรับในระดับสากล</p>
                                </div>
                            </div>

                            {/* Card 2 - top right */}
                            <div className={styles.missionCard}>
                                <div className={styles.missionCardIcon}>
                                    <SearchIcon />
                                </div>
                                <div className={styles.missionCardContent}>
                                    <h4>การบูรณาการในเวชปฏิบัติ</h4>
                                    <p>ส่งเสริมการนำองค์ความรู้ทางเภสัชพันธุศาสตร์ไปใช้จริง ในสถานพยาบาล เพื่อให้เกิดการดูแลผู้ป่วยร่วมกับสหสาขาวิชาชีพ อย่างเป็นระบบ ช่วยให้การเลือกใช้ยาและขนาดของยานั้นถูกต้อง แม่นยำตามสภาพร่างกายของผู้ป่วยแต่ละราย</p>
                                </div>
                            </div>

                            {/* Card 3 - bottom left */}
                            <div className={styles.missionCard}>
                                <div className={styles.missionCardIcon}>
                                    <ChatIcon />
                                </div>
                                <div className={styles.missionCardContent}>
                                    <h4>ที่ปรึกษาและเผยแพร่องค์ความรู้</h4>
                                    <p>เป็นศูนย์กลางการให้คำปรึกษาทางวิชาการแก่หน่วยงานสาธารณสุข และเผยแพร่ข้อมูลที่ถูกต้องแก่ประชาชน เพื่อสร้างความเข้าใจ ในนวัตกรรมการใช้ยาอย่างสมเหตุผลและปลอดภัยสูงสุด</p>
                                </div>
                            </div>

                            {/* Quote card - bottom right */}
                            <div className={styles.quoteCard}>
                                <p>
                                    &quot;เรามุ่งมั่นสร้างมาตรฐานใหม่<br />
                                    เพื่อให้ข้อมูลทางพันธุกรรมคือหัวใจสำคัญของการรักษาที่<br />
                                    มีประสิทธิภาพและปลอดภัยสำหรับทุกคน&quot;
                                </p>
                            </div>
                        </div>
                    </>
                )}

                {activeTab === 1 && <CoursesSection />}

                {activeTab === 2 && <CommitteeSection />}

                {activeTab === 3 && <EmblemSection />}

                {activeTab === 4 && <LocationSection />}

            </div>

        </section>
    );
}
