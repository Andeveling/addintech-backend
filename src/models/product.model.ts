import { Schema, model } from 'mongoose';
import { ProductI, ProductSchema } from '../types/product.types';

const ProductSchema = new Schema<ProductI>(
  {
    title: { type: String },
    price: { type: Number },
    description: { type: String },
    image: { type: String }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default model<ProductSchema>('Product', ProductSchema);
