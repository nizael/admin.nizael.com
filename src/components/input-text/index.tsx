import { use, useEffect, useState } from 'react';
import styles from './style.module.css'
import { deleteProps } from '@components/utils/remove-props';
interface InputText {
  label?: string,
}

type Input = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const InputText = (props: InputText & Input) => {

  const keyProps: (keyof InputText)[] = ['label']

  const [isFocused, setIsFocused] = useState(false)

  function handleOnFocus() {
    setIsFocused(true)
  }

  function handleOnBlur() {
    if (!props.value) {
      setIsFocused(false)
    }
  }

  return (
    <div
      className={styles.container}
      tabIndex={0}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
    >
      <label
        className={styles.label}
        style={isFocused ? {
          top: 0,
          fontSize: '14px',
          backgroundColor: 'white'
        } : undefined}
      >{props.label}</label>
      <input
        {...deleteProps(props, keyProps)}
      />
    </div >
  )
}