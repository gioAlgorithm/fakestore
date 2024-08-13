import SortContainer from '@/components/SortContainer'
import styles from './AllContent.module.scss'
import ProductContainer from '@/components/ProductContainer';

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

export default function AllContent(props: Props) {
  const {data} = props
  return (
    <div className={styles.main}>
      <div className={styles.sort}>
        <SortContainer />
      </div>
      <div className={styles.productHolder}>
        
        <div className={styles.categoryName}>
          <h1>All</h1>
        </div>
        <div className={styles.cardContainer}>
          <ProductContainer data={data} />
        </div>
      </div>
    </div>
  )
}