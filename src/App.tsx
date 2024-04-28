import { useState } from "react"
import {Modal} from "./modal/Modal"
import './modal/screens/Animations.css'



function App() {

  const [open, setIsOpen] = useState(false)

  return (
    <>
<button onClick={() => setIsOpen(true)}>Hola</button>
{
  open &&<Modal setIsOpen={setIsOpen} />
}
    </>
  )
}

export default App
