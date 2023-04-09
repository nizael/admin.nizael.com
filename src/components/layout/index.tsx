import { Person } from './partials/Person'
import { SideBar } from './partials/SideBar'
import { SideMenu } from './partials/SideMenu'
import styles from './style.module.css'
type Div = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const Layout = (props: Div) => {
  return (
    <div
      className={styles.layout}
      {...props}
    >
      <SideBar>
        <Person />
        <SideMenu />
      </SideBar>
      {props.children}
    </div>
  )
}