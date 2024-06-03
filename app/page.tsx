'use client'
import { useState, useEffect } from "react";
//import { fetchSave } from "./services/contador";

export default function Home() {
  const [contador, setContador] = useState<number | null>(null);


  useEffect(() => {
    async function getData() {
        const res = await fetch('/pages/api');
        const data = await res.json();
        setContador(data.valor);
    }

    getData();
  }, []);

  const incrementarContador = async () => {
    
    if ( contador !== null){ 
      const res = await fetch('/pages/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      setContador(data.valor);
    }
    
  };
  


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>{contador}</div>
      <button onClick={incrementarContador}>Incrementar Contador</button>
    </main>
  );
}