'use client'
'use client'
import { useMemo, useState } from 'react'
// import Image from 'next/image'
import styles from '../style.module.css'
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
export const Person = () => {
  const [dataUser, setDataUser] = useState({ name: '', role: '' })
  const redrect = useRouter().push

  useEffect(() => {
    const cookie = parseCookies()
    if (cookie) {
      setDataUser({ name: cookie.user, role: cookie.role })
    }
    if (!cookie.token) {
      redrect('/login')
    }

  }, [])

  return (
    <div className={styles.person}>
      <div className={styles.avatar}>
        <img src={'/avatar.png'} alt={dataUser.name} />
      </div>
      <h4>{dataUser.name}</h4>
      <span>{dataUser.role}</span>
    </div>
  )
}