"use client";
import Link from "next/link";
import styles from "./ResponsiveFooter.module.scss";
import { LuShoppingCart } from "react-icons/lu";
import { GiSettingsKnobs } from "react-icons/gi";
import { useSortStore } from "@/context/SortContext";

interface Props {}

export default function ResponsiveFooter(props: Props) {
  const { showSort, setShowSort } = useSortStore();
  return (
    <div className={styles.main}>
      <Link href="/cartpage" className={styles.navigator}>
        <LuShoppingCart />
      </Link>

      <div className={styles.navigator} onClick={() => setShowSort(!showSort)}>
        <GiSettingsKnobs />
      </div>
    </div>
  );
}
