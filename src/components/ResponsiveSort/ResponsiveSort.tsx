"use client";
import { useSortStore } from "@/context/SortContext";
import SortContainer from "../SortContainer";
import styles from "./ResponsiveSort.module.scss";

interface Props {}

export default function ResponsiveSort(props: Props) {
  const { showSort } = useSortStore();
  return (
    <div className={`${styles.container} ${showSort ? styles.active : ""}`}>
      <SortContainer />
    </div>
  );
}
