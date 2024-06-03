'use client'
import { useState, useEffect } from "react";
import { fetchSave } from "./services/contador";

export default function Home() {
  const [contador, setContador] = useState<number | null>(null);

  useEffect(() => {
    async function getData() {
      try {
        const contadores = await fetchSave()
        setContador(contadores);

      } catch (error) {
        console.error("Failed to fetch data:", error);
        setContador(null);
      }
    }

    getData();
  }, []);

  const incrementarContador = () => {
    setContador((prevContador) => prevContador !== null ? prevContador + 1 : 1);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>{contador}</div>
      <button onSubmit={incrementarContador}>Incrementar Contador</button>
    </main>
  );
}