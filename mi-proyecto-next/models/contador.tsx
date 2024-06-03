import mongoose from "mongoose";

export type Contador = {
    valor: number,
}

const schema = new mongoose.Schema<Contador>({
    valor: Number,
})
export default mongoose.models.Contador || mongoose.model('Contador', schema)