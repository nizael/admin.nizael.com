'use client'
import { useRouter } from 'next/navigation'
import styles from '../style.module.css'
export const SideMenu = () => {
  const redrect = useRouter().push

  function handleClick (path: string){
    redrect(`/${path}`)
  }

  return (
    <ul className={styles.sidemenu}>
      <li onClick={()=>(handleClick('sales'))} className={styles.item}>Vendas</li>
      <li onClick={()=>(handleClick('products'))}  className={styles.item}>Produtos</li>
    </ul>
  )
}