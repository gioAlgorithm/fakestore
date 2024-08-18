import { createStore } from 'zustand/vanilla';

interface SortState {
  sort: string;
  minPrice: number;
  maxPrice: number;
  loading: boolean;
  showSort: boolean;
  selected: string;
  sliderValues: [number, number];
}

interface SortActions {
  setSort: (sort: string) => void;
  setMinPrice: (minPrice: number) => void;
  setMaxPrice: (maxPrice: number) => void;
  setLoading: (loading: boolean) => void;
  setShowSort: (showSort: boolean) => void;
  setSelected: (selected: string) => void;
  setSliderValues: (sliderValues: [number, number]) => void;
}

export type SortStore = SortState & SortActions;

export const defaultSortState: SortState = {
  sort: '',
  minPrice: 0,
  maxPrice: 0,
  loading: false,
  showSort: false,
  selected: '',
  sliderValues: [0, 0],
};

export const createSortStore = (
  initState: SortState = defaultSortState
) => {
  return createStore<SortStore>()((set) => ({
    ...initState,
    setSort: (sort) => set(() => ({ sort })),
    setMinPrice: (minPrice) => set(() => ({ minPrice })),
    setMaxPrice: (maxPrice) => set(() => ({ maxPrice })),
    setLoading: (loading) => set(() => ({ loading })),
    setShowSort: (showSort) => set(() => ({ showSort })),
    setSelected: (selected) => set(() => ({ selected })),
    setSliderValues: (sliderValues) => set(() => ({ sliderValues })),
  }));
};
