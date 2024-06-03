import { Contador } from "../models/contador";


export const fetchSave = async (): Promise<number> => {
      const response = await fetch(`http://localhost:3000/api/saves/`);
      if (response.ok){
      const data: Contador = await response.json()
      
      return data.valor;
      }else {
        return 1;
      }
  };