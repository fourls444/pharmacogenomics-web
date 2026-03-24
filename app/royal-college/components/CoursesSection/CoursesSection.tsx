import styles from "./CoursesSection.module.css";
import {
  FaChevronRight
} from "react-icons/fa6";




/* SVG Icons */
const CertIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
    </svg>
);

const MedicalIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
);

const FlaskIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3h6" />
        <path d="M10 3v7.4a2 2 0 0 1-.6 1.4L4 17.2a2 2 0 0 0-.6 1.4V20a2 2 0 0 0 2 2h13.2a2 2 0 0 0 2-2v-1.4a2 2 0 0 0-.6-1.4L14.6 11.8a2 2 0 0 1-.6-1.4V3" />
    </svg>
);

const DownloadIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
);

const PersonIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
    </svg>
);

const ApplyIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
);

export default function CoursesSection() {
    return (
        <div className={styles.coursesWrapper}>

            {/* HEADING */}
            <h2 className={styles.heading}>
                ยกระดับวิชาชีพ สู่ผู้เชี่ยวชาญด้านเภสัชพันธุศาสตร์
            </h2>
            <p className={styles.subHeading}>
                วิทยาลัยเภสัชพันธุศาสตร์และเภสัชกรรมแม่นยำ เปิดรับสมัครเภสัชกรและบุคลากรทางการแพทย์เพื่อเข้าสู่เส้นทางการเรียนรู้ 3 ระดับ
            </p>

            <div className={styles.rowHeader}>
                <h2 className={styles.rowTitle}>หลักสูตรระยะสั้น</h2>

                <button className={styles.viewAllBtn}>ดูทั้งหมด <FaChevronRight style={{ fontSize: '10px', marginLeft: '4px' }} /></button>

            </div>

            {/* 3 COURSE CARDS */}
            <div className={styles.cardsRow}>

                {/* CARD 1 */}
                <div className={styles.courseCard}>
                    <div className={styles.cardHeader}>
                        <div className={styles.cardIcon}><CertIcon /></div>
                        <div>
                            <h3 className={styles.cardTitle}>หลักสูตรระยะสั้น</h3>
                            <p className={styles.cardSubTitle}>(CERTIFICATE IN PHARMACOGENOMICS AND PRECISION MEDICINE)</p>
                        </div>
                    </div>

                    <div className={styles.cardBody}>
                        <p className={styles.cardDesc}>
                            เน้นการปฏิบัติจริงในเวชปฏิบัติ สำหรับเภสัชกรที่ต้องการต่อยอดทักษะการให้คำปรึกษาและแปลผลตรวจ
                        </p>

                        <div className={styles.detailSection}>
                            <h4 className={styles.detailTitle}>รายละเอียด</h4>
                            <ul className={styles.detailList}>
                                <li>16 หน่วยกิต (ทฤษฎี 2 / ปฏิบัติ 14)</li>
                                <li>ฝึกปฏิบัติจริงในสถานพยาบาลจริง</li>
                                <li>ระยะเวลา: 4 เดือน (เต็มเวลา)</li>
                                <li>คุณสมบัติ: เภสัชกรที่มีใบประกอบวิชาชีพ</li>
                            </ul>
                        </div>
                    </div>

                    <button className={styles.downloadBtn}>
                        <DownloadIcon /> ดาวน์โหลด
                    </button>
                </div>

                {/* CARD 2 */}
                <div className={styles.courseCard}>
                    <div className={styles.cardHeader}>
                        <div className={styles.cardIcon}><MedicalIcon /></div>
                        <div>
                            <h3 className={styles.cardTitle}>หลักสูตรแสดง<br />ความรู้ความชำนาญ</h3>
                            <p className={styles.cardSubTitle}>PHARMACY RESIDENCY TRAINING</p>
                        </div>
                    </div>

                    <div className={styles.cardBody}>
                        <p className={styles.cardDesc}>
                            พื้นฐานที่ต้องรู้เพื่อก้าวทันนวัตกรรม สำหรับเภสัชกรทั่วไปและบุคลากรการแพทย์
                        </p>

                        <div className={styles.detailSection}>
                            <h4 className={styles.detailTitle}>หัวข้อสำคัญ</h4>
                            <ul className={styles.detailList}>
                                <li>โครงสร้าง: 134 หน่วยกิต</li>
                                <li>ฝึกระดับเข้มข้นในห้องปฏิบัติการและหอผู้ป่วยเฉพาะทาง</li>
                                <li>คุณสมบัติ: เภสัชกรที่ผ่านเกณฑ์การคัดเลือก ตามมาตรฐานราชวิทยาลัยเภสัชกรรมฯ</li>
                            </ul>
                        </div>
                    </div>

                    <button className={styles.downloadBtn}>
                        <DownloadIcon /> ดาวน์โหลด
                    </button>
                </div>

                {/* CARD 3 */}
                <div className={styles.courseCard}>
                    <div className={styles.cardHeader}>
                        <div className={styles.cardIcon}><FlaskIcon /></div>
                        <div>
                            <h3 className={styles.cardTitle}>หลักสูตรอบรม<br />เชิงปฏิบัติการ</h3>
                            <p className={styles.cardSubTitle}>PHARMACOGENOMICS FOR ALLIED HEALTH</p>
                        </div>
                    </div>

                    <div className={styles.cardBody}>
                        <p className={styles.cardDesc}>
                            พื้นฐานที่ต้องรู้เพื่อก้าวทันนวัตกรรม สำหรับเภสัชกรทั่วไปและบุคลากรการแพทย์
                        </p>

                        <div className={styles.detailSection}>
                            <h4 className={styles.detailTitle}>รายละเอียด</h4>
                            <ul className={styles.detailList}>
                                <li>โครงสร้าง: อบรม 16 ชั่วโมง (2 วัน)</li>
                                <li>ไฮไลท์: บูพื้นฐานความเข้าใจในเภสัชพันธุกรรม, การแพ้ยา, และจริยธรรมการแพทย์เฉพาะบุคคล</li>
                                <li>คุณสมบัติ: เภสัชกร, บุคลากรสหวิชาชีพ</li>
                            </ul>
                        </div>
                    </div>

                    <button className={styles.downloadBtn}>
                        <DownloadIcon /> ดาวน์โหลด
                    </button>
                </div>

            </div>

            {/*หลักสูตรกลาง*/}
            {/* HEADING */}
            <div className={styles.rowHeader}>
                <h2 className={styles.rowTitle}>หลักสูตรระยะกลาง</h2>

                <button className={styles.viewAllBtn}>ดูทั้งหมด <FaChevronRight style={{ fontSize: '10px', marginLeft: '4px' }} /></button>

            </div>

            {/* 3 COURSE CARDS */}
            <div className={styles.cardsRow}>

                {/* CARD 1 */}
                <div className={styles.courseCard}>
                    <div className={styles.cardHeader}>
                        <div className={styles.cardIcon}><CertIcon /></div>
                        <div>
                            <h3 className={styles.cardTitle}>หลักสูตรระยะสั้น</h3>
                            <p className={styles.cardSubTitle}>(CERTIFICATE IN PHARMACOGENOMICS AND PRECISION MEDICINE)</p>
                        </div>
                    </div>

                    <div className={styles.cardBody}>
                        <p className={styles.cardDesc}>
                            เน้นการปฏิบัติจริงในเวชปฏิบัติ สำหรับเภสัชกรที่ต้องการต่อยอดทักษะการให้คำปรึกษาและแปลผลตรวจ
                        </p>

                        <div className={styles.detailSection}>
                            <h4 className={styles.detailTitle}>รายละเอียด</h4>
                            <ul className={styles.detailList}>
                                <li>16 หน่วยกิต (ทฤษฎี 2 / ปฏิบัติ 14)</li>
                                <li>ฝึกปฏิบัติจริงในสถานพยาบาลจริง</li>
                                <li>ระยะเวลา: 4 เดือน (เต็มเวลา)</li>
                                <li>คุณสมบัติ: เภสัชกรที่มีใบประกอบวิชาชีพ</li>
                            </ul>
                        </div>
                    </div>

                    <button className={styles.downloadBtn}>
                        <DownloadIcon /> ดาวน์โหลด
                    </button>
                </div>

                {/* CARD 2 */}
                <div className={styles.courseCard}>
                    <div className={styles.cardHeader}>
                        <div className={styles.cardIcon}><MedicalIcon /></div>
                        <div>
                            <h3 className={styles.cardTitle}>หลักสูตรแสดง<br />ความรู้ความชำนาญ</h3>
                            <p className={styles.cardSubTitle}>PHARMACY RESIDENCY TRAINING</p>
                        </div>
                    </div>

                    <div className={styles.cardBody}>
                        <p className={styles.cardDesc}>
                            พื้นฐานที่ต้องรู้เพื่อก้าวทันนวัตกรรม สำหรับเภสัชกรทั่วไปและบุคลากรการแพทย์
                        </p>

                        <div className={styles.detailSection}>
                            <h4 className={styles.detailTitle}>หัวข้อสำคัญ</h4>
                            <ul className={styles.detailList}>
                                <li>โครงสร้าง: 134 หน่วยกิต</li>
                                <li>ฝึกระดับเข้มข้นในห้องปฏิบัติการและหอผู้ป่วยเฉพาะทาง</li>
                                <li>คุณสมบัติ: เภสัชกรที่ผ่านเกณฑ์การคัดเลือก ตามมาตรฐานราชวิทยาลัยเภสัชกรรมฯ</li>
                            </ul>
                        </div>
                    </div>

                    <button className={styles.downloadBtn}>
                        <DownloadIcon /> ดาวน์โหลด
                    </button>
                </div>

                {/* CARD 3 */}
                <div className={styles.courseCard}>
                    <div className={styles.cardHeader}>
                        <div className={styles.cardIcon}><FlaskIcon /></div>
                        <div>
                            <h3 className={styles.cardTitle}>หลักสูตรอบรม<br />เชิงปฏิบัติการ</h3>
                            <p className={styles.cardSubTitle}>PHARMACOGENOMICS FOR ALLIED HEALTH</p>
                        </div>
                    </div>

                    <div className={styles.cardBody}>
                        <p className={styles.cardDesc}>
                            พื้นฐานที่ต้องรู้เพื่อก้าวทันนวัตกรรม สำหรับเภสัชกรทั่วไปและบุคลากรการแพทย์
                        </p>

                        <div className={styles.detailSection}>
                            <h4 className={styles.detailTitle}>รายละเอียด</h4>
                            <ul className={styles.detailList}>
                                <li>โครงสร้าง: อบรม 16 ชั่วโมง (2 วัน)</li>
                                <li>ไฮไลท์: บูพื้นฐานความเข้าใจในเภสัชพันธุกรรม, การแพ้ยา, และจริยธรรมการแพทย์เฉพาะบุคคล</li>
                                <li>คุณสมบัติ: เภสัชกร, บุคลากรสหวิชาชีพ</li>
                            </ul>
                        </div>
                    </div>

                    <button className={styles.downloadBtn}>
                        <DownloadIcon /> ดาวน์โหลด
                    </button>
                </div>

            </div>
            


            {/*หลักระยะยาว*/}
            <div className={styles.rowHeader}>
                <h2 className={styles.rowTitle}>หลักสูตรระยะสั้น</h2>

                <button className={styles.viewAllBtn}>ดูทั้งหมด <FaChevronRight style={{ fontSize: '10px', marginLeft: '4px' }} /></button>

            </div>

            {/* 3 COURSE CARDS */}
            <div className={styles.cardsRow}>

                {/* CARD 1 */}
                <div className={styles.courseCard}>
                    <div className={styles.cardHeader}>
                        <div className={styles.cardIcon}><CertIcon /></div>
                        <div>
                            <h3 className={styles.cardTitle}>หลักสูตรระยะยาว</h3>
                            <p className={styles.cardSubTitle}>(CERTIFICATE IN PHARMACOGENOMICS AND PRECISION MEDICINE)</p>
                        </div>
                    </div>

                    <div className={styles.cardBody}>
                        <p className={styles.cardDesc}>
                            เน้นการปฏิบัติจริงในเวชปฏิบัติ สำหรับเภสัชกรที่ต้องการต่อยอดทักษะการให้คำปรึกษาและแปลผลตรวจ
                        </p>

                        <div className={styles.detailSection}>
                            <h4 className={styles.detailTitle}>รายละเอียด</h4>
                            <ul className={styles.detailList}>
                                <li>16 หน่วยกิต (ทฤษฎี 2 / ปฏิบัติ 14)</li>
                                <li>ฝึกปฏิบัติจริงในสถานพยาบาลจริง</li>
                                <li>ระยะเวลา: 4 เดือน (เต็มเวลา)</li>
                                <li>คุณสมบัติ: เภสัชกรที่มีใบประกอบวิชาชีพ</li>
                            </ul>
                        </div>
                    </div>

                    <button className={styles.downloadBtn}>
                        <DownloadIcon /> ดาวน์โหลด
                    </button>
                </div>

                {/* CARD 2 */}
                <div className={styles.courseCard}>
                    <div className={styles.cardHeader}>
                        <div className={styles.cardIcon}><MedicalIcon /></div>
                        <div>
                            <h3 className={styles.cardTitle}>หลักสูตรแสดง<br />ความรู้ความชำนาญ</h3>
                            <p className={styles.cardSubTitle}>PHARMACY RESIDENCY TRAINING</p>
                        </div>
                    </div>

                    <div className={styles.cardBody}>
                        <p className={styles.cardDesc}>
                            พื้นฐานที่ต้องรู้เพื่อก้าวทันนวัตกรรม สำหรับเภสัชกรทั่วไปและบุคลากรการแพทย์
                        </p>

                        <div className={styles.detailSection}>
                            <h4 className={styles.detailTitle}>หัวข้อสำคัญ</h4>
                            <ul className={styles.detailList}>
                                <li>โครงสร้าง: 134 หน่วยกิต</li>
                                <li>ฝึกระดับเข้มข้นในห้องปฏิบัติการและหอผู้ป่วยเฉพาะทาง</li>
                                <li>คุณสมบัติ: เภสัชกรที่ผ่านเกณฑ์การคัดเลือก ตามมาตรฐานราชวิทยาลัยเภสัชกรรมฯ</li>
                            </ul>
                        </div>
                    </div>

                    <button className={styles.downloadBtn}>
                        <DownloadIcon /> ดาวน์โหลด
                    </button>
                </div>

                {/* CARD 3 */}
                <div className={styles.courseCard}>
                    <div className={styles.cardHeader}>
                        <div className={styles.cardIcon}><FlaskIcon /></div>
                        <div>
                            <h3 className={styles.cardTitle}>หลักสูตรอบรม<br />เชิงปฏิบัติการ</h3>
                            <p className={styles.cardSubTitle}>PHARMACOGENOMICS FOR ALLIED HEALTH</p>
                        </div>
                    </div>

                    <div className={styles.cardBody}>
                        <p className={styles.cardDesc}>
                            พื้นฐานที่ต้องรู้เพื่อก้าวทันนวัตกรรม สำหรับเภสัชกรทั่วไปและบุคลากรการแพทย์
                        </p>

                        <div className={styles.detailSection}>
                            <h4 className={styles.detailTitle}>รายละเอียด</h4>
                            <ul className={styles.detailList}>
                                <li>โครงสร้าง: อบรม 16 ชั่วโมง (2 วัน)</li>
                                <li>ไฮไลท์: บูพื้นฐานความเข้าใจในเภสัชพันธุกรรม, การแพ้ยา, และจริยธรรมการแพทย์เฉพาะบุคคล</li>
                                <li>คุณสมบัติ: เภสัชกร, บุคลากรสหวิชาชีพ</li>
                            </ul>
                        </div>
                    </div>

                    <button className={styles.downloadBtn}>
                        <DownloadIcon /> ดาวน์โหลด
                    </button>
                </div>

            </div>


            {/* CERTIFICATION FOOTER */}
            <div className={styles.certFooter}>
                <div className={styles.certLeft}>
                    <div className={styles.certIcon}><PersonIcon /></div>
                    <div className={styles.certText}>
                        <h3>การรับรองทักษะ</h3>
                        <p>
                            ผู้ที่ผ่านการอบรมจากวิทยาลัยจะได้รับ <strong>การรับรองทักษะในระดับผู้เชี่ยวชาญเฉพาะทาง</strong> ซึ่งช่วยยกระดับความสามารถของบุคลากรใน<strong>วิทยาลัยเภสัชพันธุศาสตร์และเภสัชกรรมแม่นยำ (วกพ.)</strong>
                        </p>
                    </div>
                </div>
                <div className={styles.certActions}>
                    <button className={styles.certBtn} style={{ backgroundColor: 'white' }}>
                        <ApplyIcon /> สมัครเข้ารับการฝึกอบรม
                    </button>
                    <button className={styles.certBtn} style={{ color:"white" }}>
                        <DownloadIcon /> ดาวน์โหลดรายละเอียดหลักสูตร
                    </button>
                </div>
            </div>

        </div>
    );
}
