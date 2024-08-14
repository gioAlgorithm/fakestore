"use client";
import React, { useRef, useEffect, useState, useContext, ChangeEvent } from "react";
import { CartContext } from "@/context/CartItems";
import style from "./Search.module.scss";
import { AiOutlineSearch, AiOutlineArrowLeft } from "react-icons/ai";
import SearchCard from "@/components/SearchCard/SearchCard";
import { StyleContext } from "@/context/StyleContext";
import { usePathname } from "next/navigation";

interface Data {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

interface Props {
  data: Data[];
}

export default function Search({ data }: Props) {
  // show search
  const [showSearch, setShowSearch] = useState(false);
  const { setHideLogo } = useContext(CartContext);
  const { isSticky } = useContext(StyleContext);
  const router = usePathname();

  // declaring states for search
  const [query, setQuery] = useState("");
  const [text, setText] = useState("");
  // drop-down menu div whenever the user types 2 or more characters in input
  const [showMenu, setShowMenu] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (inputValue.length >= 2) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
    setQuery(inputValue.toLowerCase()); // Convert input to lowercase and set as query state
    setText(inputValue);
  };

  const handleSearchShow = () => {
    setShowSearch(true);
    setHideLogo(false);
  };

  // handle focus
  const searchRef = useRef<HTMLInputElement | null>(null);

  const handleFocus = () => {
    searchRef.current?.parentElement?.classList.add("focus");
  };

  // detecting outside click
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let handler = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowSearch(false);
        setHideLogo(true);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [setShowSearch, setHideLogo]);

  // close searchbar
  const handleClose = () => {
    setShowSearch(false);
    setHideLogo(true);
  };

  return (
    <>
      {!showSearch && (
        <button
          style={!isSticky && router === "/" ? { color: "white" } : {}}
          className={style.searchButton}
          onClick={handleSearchShow}
        >
          <AiOutlineSearch />
        </button>
      )}

      <div className={`${style.search} ${showSearch ? style.show : style.hide}`} ref={menuRef}>
        <button className={style.close} onClick={handleClose}>
          <AiOutlineArrowLeft />
        </button>
        <div className={style.innerSearch} onFocus={handleFocus}>
          <input
            ref={searchRef}
            type="text"
            onChange={handleChange}
            value={text}
            placeholder="Search Store"
          />
          <AiOutlineSearch />
        </div>
        {showMenu && showSearch && (
          <div className={style.searchMenu}>
            {data
              .filter((product: Data) =>
                product.title.toLowerCase().startsWith(query)
              )
              .slice(0, 5)
              .map((product: Data) => {
                return (
                  <SearchCard
                    key={product.id}
                    id={product.id}
                    image={product.image}
                    title={product.title}
                    price={product.price}
                    category={product.category}
                    setShowMenu={setShowMenu}
                    setText={setText}
                    setShowSearch={setShowSearch}
                  />
                );
              })}
            {data.filter((product: Data) =>
              product.title.toLowerCase().startsWith(query)
            ).length === 0 && (
              <div className={style.noData}>No matching Products found.</div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
