import styles from '../style.module.css'
type Div = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const SideBar = (props: Div) => {
  return (
    <div
    className={styles.sidebar}
      {...props}
    >
      {props.children}
    </div>
  )
}