"use client";
import React from "react";
import style from "./SearchCard.module.scss";
import Link from "next/link";

interface SearchCardProps {
  key: number;
  id: number;
  image: string;
  title: string;
  price: number;
  category: string;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setText: React.Dispatch<React.SetStateAction<string>>;
  setShowSearch: React.Dispatch<React.SetStateAction<boolean>>
}

export default function SearchCard(props: SearchCardProps) {
  // handle click of the link
  const handleLink = () => {
    props.setShowMenu(false);
    props.setText("");
    props.setShowSearch(false)
  };

  return (
    <Link
      key={props.key}
      onClick={handleLink}
      href={`/product/${props.id}`}
      className={style.searchCard}
    >
      <div
        className={style.searchCardImage}
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
      <h4 className={style.searchCardTitle}>{props.title}</h4>
    </Link>
  );
}
