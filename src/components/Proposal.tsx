import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Proposal = () => {

  const [count, setCount] = useState(false)
  const navigate = useNavigate()

  if (count) navigate('/she-said-yes')

  return (
    <>
      <h1>
        ¿te quieres casar conmigo? 🥺
      </h1>
      <div>
        <button onClick={() => alert("No acepto un no por respuesta")}>No</button>
        <button onClick={() => setCount(!count)}>Si</button>
      </div>
    </>
  )
}
