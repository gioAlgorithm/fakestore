"use client";
import { SortContext } from "@/context/SortContext";
import styles from "./SortContainer.module.scss";
import Slider from "@mui/material/Slider";
import { useContext, useState, useEffect } from "react";
import { AiFillCheckSquare } from "react-icons/ai";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { IoCloseSharp } from "react-icons/io5";

interface Props {}

export default function SortContainer(props: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const {
    minPrice,
    maxPrice,
    setSort,
    setLoading,
    showSort,
    setShowSort,
    selected,
    setSelected,
    sliderValues,
    setSliderValues,
  } = useContext(SortContext);

  // Update slider values when minPrice and maxPrice change
  useEffect(() => {
    setSliderValues([minPrice, maxPrice]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [minPrice, maxPrice]);

  // Reset the selected sort option when pathname changes
  useEffect(() => {
    setSelected("");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Select logic
  const handleSortOptionClick = (option: string) => {
    setLoading(true);
    const newSort = selected === option ? "" : option;
    setSelected(newSort);
    setSort(newSort);
    const params = new URLSearchParams(searchParams.toString());
    if (newSort) {
      params.set("sort", newSort);
    } else {
      params.delete("sort");
    }
    router.replace(pathname + "?" + params.toString(), { scroll: false });
  };

  // User won't be able to type anything except numbers
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = e.target.value.replace(/\D/g, "");
    setLoading(true);
  };

  // Update params
  useEffect(() => {
    const timeOut = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());
      if (sliderValues[0] !== undefined) {
        params.set("minPrice", sliderValues[0].toString());
      }
      if (sliderValues[1] !== undefined) {
        params.set("maxPrice", sliderValues[1].toString());
      }
      router.replace(pathname + "?" + params.toString(), { scroll: false });
    }, 500);
    return () => {
      clearTimeout(timeOut);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sliderValues, pathname, router, searchParams]);

  return (
    <div className={`${styles.container} ${showSort && styles.active}`}>
      <div className={styles.header}>
        <h4>Filter</h4>
        <span onClick={() => setShowSort(false)}>
          <IoCloseSharp />
        </span>
      </div>
      <div className={styles.content}>
        <div className={styles.sliderBox}>
          <Slider
            value={sliderValues}
            onChange={(_, newValues) => {
              const [newMinPrice, newMaxPrice] = newValues as [number, number];
              setSliderValues([newMinPrice, newMaxPrice]);
              setLoading(true);
            }}
            valueLabelDisplay="on"
            aria-labelledby="range-slider"
            min={minPrice}
            max={maxPrice}
            sx={{
              "& .MuiSlider-thumb": {
                backgroundColor: "#1DCF65",
              },
              "& .MuiSlider-rail": {
                backgroundColor: "#1DCF65",
              },
              "& .MuiSlider-valueLabel": {
                visibility: "visible !important", // Make tooltip always visible
              },
              "& .MuiSlider-track": {
                backgroundColor: "#1DCF65",
                border: "1px solid #1DCF65",
              },
            }}
          />
        </div>
        <div className={styles.inputBox}>
          <div className={styles.priceInput}>
            <label htmlFor="minPrice">Min</label>
            <input
              type="text"
              id="minPrice"
              onInput={handleInput}
              value={sliderValues[0]}
              onChange={(e) => {
                const newValue = Number(e.target.value);
                setSliderValues([newValue, sliderValues[1]]);
              }}
            />
            <span>$</span>
          </div>
          <div className={styles.priceInput}>
            <label htmlFor="maxPrice">Max</label>
            <input
              type="text"
              id="maxPrice"
              onInput={handleInput}
              value={sliderValues[1]}
              onChange={(e) => {
                const newValue = Number(e.target.value);
                setSliderValues([sliderValues[0], newValue]);
              }}
            />
            <span>$</span>
          </div>
        </div>
        <div className={styles.sort}>
          <h4 className={styles.sortTitle}>Sort</h4>
          <ul>
            <li onClick={() => handleSortOptionClick("Price: High to Low")}>
              {selected === "Price: High to Low" ? (
                <AiFillCheckSquare />
              ) : (
                <div className={styles.altIcon}></div>
              )}{" "}
              Price: High to Low
            </li>
            <li onClick={() => handleSortOptionClick("Price: Low to High")}>
              {selected === "Price: Low to High" ? (
                <AiFillCheckSquare />
              ) : (
                <div className={styles.altIcon}></div>
              )}{" "}
              Price: Low to High
            </li>
            <li onClick={() => handleSortOptionClick("Name: A-Z")}>
              {selected === "Name: A-Z" ? (
                <AiFillCheckSquare />
              ) : (
                <div className={styles.altIcon}></div>
              )}{" "}
              Name: A-Z
            </li>
            <li onClick={() => handleSortOptionClick("Name: Z-A")}>
              {selected === "Name: Z-A" ? (
                <AiFillCheckSquare />
              ) : (
                <div className={styles.altIcon}></div>
              )}{" "}
              Name: Z-A
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
