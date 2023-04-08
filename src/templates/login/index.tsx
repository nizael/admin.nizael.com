'use client'
import styles from './style.module.css'
import { Form } from './partials/Form'

export const Login = () => {

  return (
    <div className={styles.login}>
      <h1>Login</h1>
      <Form />
    </div>
  )
}

