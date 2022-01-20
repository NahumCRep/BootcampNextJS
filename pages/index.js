import { useState } from 'react';
import Saludo from './components/Saludo';

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Saludo />
      <button onClick={() => setOpen(!open)} >Press</button>
      {
        open && <p>Bienvenido!!</p>
      }
    </div>
  )
}
