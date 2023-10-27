import clsx from "clsx";
import Link from "next/link";
import styles from "./key-date.module.scss";

interface KeyDateTeaserProps {
  path: string;
  title: string;
  summary: string;
  leading: string;
}

export default function KeyDateTeaser({
  path,
  title,
  summary,
  leading,
}: KeyDateTeaserProps) {
  return (
    <Link href={path} className={clsx(styles.linkContainer)}>
      <span className={clsx(styles.date, "heading-md")}>{leading}</span>
      <div className={styles.content}>
        <h2 className={clsx("heading-sm", styles.title)}>{title}</h2>
        <p className={clsx("text-small", styles.summary)}>{summary}</p>
        <div className={styles.link} aria-hidden>
          <span className="text-button">View event details</span>
          {">"}
        </div>
      </div>
    </Link>
  );
}
