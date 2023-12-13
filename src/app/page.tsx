import SwiperContainer from '@/components/SwiperContainer/SwiperContainer'
import styles from './page.module.scss'
import ProductContainer from './ProductContainer'



export default function Home() {

  return (
    <main className={styles.main}>
      <SwiperContainer />
      <div className={styles.innerMain}>
        
        <div className={styles.categoryName}>
          <h1>All</h1>
        </div>
        <div className={styles.cardContainer}>
          <ProductContainer />
        </div>
      </div>
      
    </main>
  )
}
