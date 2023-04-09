import styles from '../style.module.css'
import { Table } from './Table'
export const Main =()=>{
  return (
    <main className={styles.main}>
      <h1>Produtos</h1>
      <Table/>
    </main>
  )
}