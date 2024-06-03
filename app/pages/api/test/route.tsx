import { NextResponse } from 'next/server';

export async function GET() {
  const mongodbUrl = process.env.MONGODB_URL;

  if (!mongodbUrl) {
    return NextResponse.json({ error: 'La variable de entorno MONGODB_URL no está definida' }, { status: 500 });
  }

  return NextResponse.json({ mongodbUrl });
}