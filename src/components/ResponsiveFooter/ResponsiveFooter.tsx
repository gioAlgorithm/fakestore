"use client";
import Link from "next/link";
import styles from "./ResponsiveFooter.module.scss";
import { LuShoppingCart } from "react-icons/lu";
import { GiSettingsKnobs } from "react-icons/gi";
import { useSortStore } from "@/context/SortContext";
import { useCartStore } from "@/context/CartItems";
import { usePathname } from "next/navigation";

interface Props {}

export default function ResponsiveFooter(props: Props) {
  const { showSort, setShowSort } = useSortStore();
  const { cartItems } = useCartStore();
  const router = usePathname();

  // Calculate total quantity
  const safeCartItems = cartItems || [];
  const quantity = safeCartItems.reduce((a, q) => a + (q.qty || 0), 0);

  return (
    router !== "/cartpage" && (
      <div className={styles.main}>
        <Link href="/cartpage" className={styles.navigator}>
          <LuShoppingCart />

          {quantity != 0 && (
            <span className={styles.quantityCircle}>{quantity}</span>
          )}
        </Link>

        <div
          className={styles.navigator}
          onClick={() => setShowSort(!showSort)}
        >
          <GiSettingsKnobs />
        </div>
      </div>
    )
  );
}
