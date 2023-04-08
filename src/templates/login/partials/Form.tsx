'use client'
import { useState } from 'react'
import styles from '../style.module.css'
import { InputText } from "@components/components/input-text"
import { apisFetch } from '@components/services/apis'
import { Button } from '@components/components/button'
import { useRouter } from 'next/navigation'

export const Form = () => {
  const [values, setValeus] = useState({ login: '', password: '' })
  const { login } = apisFetch()
  const redirect = useRouter().push

  function handleChange(e: string, key: string) {
    setValeus({ ...values, [key]: e })
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const auth = await login(values)
    if (auth) {
      redirect('/')
    }

  }

  return (
    <form
      className={styles.form}
      onSubmit={(event) => handleSubmit(event)}
    >
      <InputText
        label='Usuário'
        required
        type="text"
        value={values.login}
        onChange={(e) => handleChange(e.target.value, 'login')}
      />
      <InputText
        label='Senha'
        required
        type="password"
        value={values.password}
        onChange={(e) => handleChange(e.target.value, 'password')}

      />
      <Button type="submit">Entrar</Button>
    </form>
  )
}

