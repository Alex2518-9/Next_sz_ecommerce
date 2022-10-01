import { Schema, model, models } from "mongoose";


const productSchema = new Schema({
  img: {
    data: Buffer,
    contentType: String,
  },
  productName: String,
  description: String,
  price: Number,
});

export const Product = models.Product || model('Product', productSchema);