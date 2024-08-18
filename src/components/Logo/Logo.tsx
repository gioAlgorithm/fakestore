"use client";
import style from "./Logo.module.scss";
import Link from "next/link";
import React from "react";
import { useCartStore } from "@/context/CartItems";

export default function Logo() {
  const { hideLogo } = useCartStore();

  return (
    <>
      {hideLogo && (
        <Link href="/">
          <div className={style.backBag} style={{ userSelect: "none" }}>
            <div className={style.frontBag}>
              <div className={style.halfCircle}></div>
              <div className={style.arrowTop}></div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
}
