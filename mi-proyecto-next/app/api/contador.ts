import { connectDB } from "@/app/libs/coneccion";
import Contador from "@/models/contador";
import { NextResponse } from "next/server";

export async function GET() {
    await connectDB()
    const contador = await Contador.find()
    return NextResponse.json(contador)
}