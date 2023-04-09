'use client'
import { useMemo, useState } from 'react'
// import Image from 'next/image'
import styles from '../style.module.css'
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import { useEffect } from 'react'
export const Person = () => {
  const [dataUser, setDataUser] = useState({ name: '', role: '' })
  useEffect(() => {
    const cookieToken = parseCookies()
    if (cookieToken)
      setDataUser({ name: cookieToken.user, role: cookieToken.role })

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