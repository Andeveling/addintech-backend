import { Document } from 'mongoose';

export interface ProductI {
  title: string;
  description: string;
  price: number;
  image: string;
}

export interface ProductSchema extends ProductI, Document {}
