import { connectDB } from "@/app/libs/coneccion";
import Contador from "@/app/models/contador";
import { NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from 'next';

export async function GET(req: Request, res: Response) {
  await connectDB();
  const contador = await Contador.find();
  //res.status(200).json(contador);
  return NextResponse.json(contador);
}