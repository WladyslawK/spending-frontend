type InputProps = {
  content: string
}

export const Input = ({content}: InputProps) => {
  return <>
    <input value = {content}/>
  </>
}