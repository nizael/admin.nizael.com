import styles from './style.module.css'
type Button = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
export const Button = (props: Button) => {
  return (
    <button
    className={styles.button}
      {...props}
    >
      {props.children}
    </button>
  )
}