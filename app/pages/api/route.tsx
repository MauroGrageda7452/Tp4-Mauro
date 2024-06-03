import { connectDB } from "@/app/libs/coneccion";
import Contador from "@/app/models/contador";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { NextResponse } from "next/server";

export async function POST(req: Request, { params }: { params: Params }) {
  try {
      await connectDB();
      let contador = await Contador.findOne();

      contador.valor += 1;
      await contador.save();

      return NextResponse.json({ valor: contador.valor });
  } catch (error) {
      console.error(error);
      return NextResponse.json({ error: 'Error al incrementar el contador' }, { status: 500 });
  }
}

export async function GET(req: Request, {params}: {params:Params}) {
  try {
    await connectDB();
    let contador = await Contador.findOne();
    if (!contador) {
      contador = new Contador({ valor: 0 });
      await contador.save();
    }
    return NextResponse.json({ valor: contador.valor });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error fetching contador' }, { status: 500 });
  }
}