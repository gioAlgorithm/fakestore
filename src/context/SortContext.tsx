'use client'
import { useStore } from 'zustand';
import { createContext, useRef, useContext } from 'react';
import { createSortStore, SortStore } from '../store/sort-store';

export type SortStoreApi = ReturnType<typeof createSortStore>;

export const SortContext = createContext<SortStoreApi | undefined>(undefined);

interface SortProviderProps {
  children: React.ReactNode;
}

export const SortProvider = ({ children }: SortProviderProps) => {
  const storeRef = useRef<SortStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createSortStore();
  }

  return (
    <SortContext.Provider value={storeRef.current}>
      {children}
    </SortContext.Provider>
  );
};

export const useSortStore = (): SortStore => {
  const sortStoreContext = useContext(SortContext);

  if (!sortStoreContext) {
    throw new Error('useSortStore must be used within SortProvider');
  }

  return useStore(sortStoreContext, (state) => state);
};