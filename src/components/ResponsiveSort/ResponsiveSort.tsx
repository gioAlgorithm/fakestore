'use client'
import { useContext } from 'react'
import SortContainer from '../SortContainer'
import styles from './ResponsiveSort.module.scss'
import { SortContext } from '@/context/SortContext'

interface Props {
  
}

export default function ResponsiveSort(props: Props) {
  const {showSort} = useContext(SortContext)
  return (
    <div className={`${styles.container} ${showSort ? styles.active : ''}`}>
      <SortContainer />
    </div>
  )
}