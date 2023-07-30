import { Schema, model } from "mongoose";
const blog= new Schema({
    name: {
        type: String,
        required: true
    },
    tittle: {
        type: String,
        required: false
    },
   
}, { timestamps: true });
export default model('blog', blog)