import { useState } from 'react';
import Link from 'next/link';
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
      <Link href="/characters">characters</Link>
      <Link href="/harrypotter">harry potter</Link>
    </div>
  )
}
