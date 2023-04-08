
export const deleteProps = (props: { [Key: string]: any }, keys: string[]) => {
  const p = { ...props }
  keys.forEach(key => {
    delete p[key]
  })
  return p
}