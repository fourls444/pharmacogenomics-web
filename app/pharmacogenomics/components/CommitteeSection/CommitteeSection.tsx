import styles from "./CommitteeSection.module.css";

const MEMBERS = [
    {
        image: "/images/committee/member1.png",
        name: "ผศ.ดร.เภสัชกร ชลภัทร สุขเกษม",
        role: "ประธาน",
    },
    {
        image: "/images/committee/member2.png",
        name: "รศ.ดร.ภญ.เมธาวี มาศคำ",
        role: "ตำแหน่ง",
    },
    {
        image: "/images/committee/member3.png",
        name: "ผศ.ดร.ภก.สุรศักดิ์ ชุมนุมวัฒน์",
        role: "เลขาธิการ",
    },
    {
        image: "/images/committee/member4.png",
        name: "ภญ.สิริดา สุวรรณตำรวจ",
        role: "เหรัญญิก",
    },
    {
        image: "/images/committee/member5.png",
        name: "ผศ.ดร.ภก.ธีรศักดิ์ มาแจ้ม",
        role: "บรรณาธิการ.",
    },
    {
        image: "/images/committee/member6.png",
        name: "ผศ.ดร.ภญ.วราลี ยอดสุรางค์",
        role: "กรรมการกลาง",
    },
    {
        image: "/images/committee/member7.png",
        name: "ภก.ณัฐชัญ นันทธีนพงศ์",
        role: "กรรมการกลาง",
    },
];

export default function CommitteeSection() {
    const chairman = MEMBERS[0];
    const row2 = MEMBERS.slice(1, 5);
    const row3 = MEMBERS.slice(5, 7);

    return (
        <section className={styles.section}>

            {/* HEADER */}
            <div className={styles.header}>
                <h2>คณะผู้บริหารวิทยาลัยและทีมงาน</h2>
                <p>
                    &quot;เรามุ่งสร้างมาตรฐานใหม่ของการบริบาลทางเภสัชกรรม ที่ไม่ได้ดูแลแค่ &apos;ยา&apos; แต่ดูแลลึกถึง &apos;พันธุกรรม&apos; ของแต่ละบุคคล&quot;
                </p>
            </div>

            {/* CHAIRMAN - row 1 */}
            <div className={styles.chairmanRow}>
                <div className={`${styles.card} ${styles.chairmanCard}`}>
                    <div className={styles.photoArea}>
                        <img src={chairman.image} alt={chairman.name} className={styles.memberPhoto} />
                    </div>
                    <div className={styles.nameArea}>
                        <span className={styles.memberName}>{chairman.name}</span>
                        <span className={styles.memberRole}>{chairman.role}</span>
                    </div>
                </div>
            </div>

            {/* ROW 2 - 4 members */}
            <div className={styles.membersRow}>
                {row2.map((m, i) => (
                    <div key={i} className={styles.card}>
                        <div className={styles.photoArea}>
                            <img src={m.image} alt={m.name} className={styles.memberPhoto} />
                        </div>
                        <div className={styles.nameArea}>
                            <span className={styles.memberName}>{m.name}</span>
                            <span className={styles.memberRole}>{m.role}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* ROW 3 - 2 members centered */}
            <div className={styles.membersRow}>
                {row3.map((m, i) => (
                    <div key={i} className={styles.card}>
                        <div className={styles.photoArea}>
                            <img src={m.image} alt={m.name} className={styles.memberPhoto} />
                        </div>
                        <div className={styles.nameArea}>
                            <span className={styles.memberName}>{m.name}</span>
                            <span className={styles.memberRole}>{m.role}</span>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
}