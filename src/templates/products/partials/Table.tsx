import { useProductStore } from '../store/useProductStore'
import styles from '../style.module.css'
export const Table = () => {
  const products = useProductStore(s => s.products)
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <td>Código de Barras</td>
          <td>Nome</td>
          <td>Estoque</td>
          <td>Tamanhos</td>
          <td>Cores</td>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => <tr key={index}>
          <td>{product.barCode}</td>
          <td>{product.name}</td>
          <td>{product.stock}</td>
          <td>{product.sizes.join(', ')}</td>
          <td>{product.colors.join(', ')}</td>
        </tr>
        )}

      </tbody>
    </table>
  )
}