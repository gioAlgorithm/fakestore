import SwiperContainer from '@/components/SwiperContainer';
import styles from './page.module.scss'
import { fetchAllProducts } from '@/utils/fetchAllProducts';
import AllContent from './_components/AllContent/AllContent';


export default async function Home() {
  const data = await fetchAllProducts();

  return (
    <main className={styles.main}>
      <SwiperContainer />
      <AllContent data={data} />
    </main>
  )
}
