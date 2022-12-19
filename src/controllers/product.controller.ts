import { RequestHandler } from 'express';
import { promises as fs } from 'fs';
import path from 'path';
import Product from '../models/product.model';
import { ProductI } from '../types/product.types';

export const getAllProducts: RequestHandler = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.json(error);
  }
};
export const getProduct: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const products = await Product.findById(id);
    res.json(products);
  } catch (error) {
    res.json(error);
  }
};
export const createProduct: RequestHandler = async (req, res) => {
  try {
    const { title, price, description } = req.body;
    const newProduct: ProductI = {
      title,
      description,
      price,
      image: req.file?.path
    };

    const product = await Product.create(newProduct);
    res.status(200).json({ code: 200, message: 'Product Create', product: product });
  } catch (error) {
    return res.status(500).json({ code: 500, message: 'There was an error create the product', error });
  }
};
export const updateProduct: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, price } = req.body;

    const updateProduct: Partial<ProductI> = {
      title,
      description,
      price,
      image: req.file?.path
    };

    const product = await Product.findByIdAndUpdate(id, updateProduct, { new: true });
    res.status(200).json({ code: 200, message: 'Product Update', product: product });
  } catch (error) {
    return res.status(500).json({ code: 500, message: 'There was an error updating the product', error });
  }
};
export const deleteProduct: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    let product;
    Product.findByIdAndDelete(id).exec(async (err, doc) => {
      if (err) throw err;
      if (doc) {
        product = doc;
        const baseDir = path.join(process.cwd(), '/');
        await fs.unlink(baseDir + doc.image);
      }
    });
    res.status(200).json({ code: 200, message: 'Product deleted', product: product });
  } catch (error) {
    return res.status(500).json({ code: 500, message: 'There was an error deleting the product', error });
  }
};
