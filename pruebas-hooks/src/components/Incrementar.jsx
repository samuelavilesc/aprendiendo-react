import { memo } from "react"


export const Incrementar = memo(({incrementarPadre}) => {
    console.log("Me estoy renderizando")
  return (
    <button onClick={() => incrementarPadre(10)} className='btn btn-primary'>+1</button>
  )
}
)