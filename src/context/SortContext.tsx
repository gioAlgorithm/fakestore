"use client";

import { createContext, useState } from "react";

//interface for contextprovider which is going to be only child
interface ContextProviderProps {
  children: React.ReactNode;
}

interface ContextType {
  sort: string;
  setSort: React.Dispatch<React.SetStateAction<string>>;
  minPrice: number;
  setMinPrice: React.Dispatch<React.SetStateAction<number>>;
  maxPrice: number;
  setMaxPrice: React.Dispatch<React.SetStateAction<number>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  showSort: boolean;
  setShowSort: React.Dispatch<React.SetStateAction<boolean>>;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  sliderValues: [number, number];
  setSliderValues: React.Dispatch<React.SetStateAction<[number, number]>>;
}

export const SortContext = createContext<ContextType>({
  sort: "",
  setSort: () => {},
  minPrice: 0,
  setMinPrice: () => {},
  maxPrice: 0,
  setMaxPrice: () => {},
  loading: false,
  setLoading: () => {},
  showSort: false,
  setShowSort: () => {},
  selected: "",
  setSelected: () => {},
  sliderValues: [0, 0],
  setSliderValues: () => {},
});

export const SortProvider = ({ children }: ContextProviderProps) => {
  const [sort, setSort] = useState<string>("");
  const [showSort, setShowSort] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("");
  const [sliderValues, setSliderValues] = useState<[number, number]>([
    minPrice,
    maxPrice,
  ]);

  return (
    <SortContext.Provider
      value={{
        sort,
        setSort,
        minPrice,
        setMinPrice,
        maxPrice,
        setMaxPrice,
        loading,
        setLoading,
        showSort,
        setShowSort,
        selected,
        setSelected,
        sliderValues,
        setSliderValues,
      }}
    >
      {children}
    </SortContext.Provider>
  );
};
