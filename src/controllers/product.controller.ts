import Errors from "../libs/Error";
import {Request, Response} from "express";
import { T } from "../libs/types/common";
import ProductService from "../models/Product.service";


const productService = new ProductService();

const productController: T ={};

productController.getAllProducts = async (req:Request, res: Response) =>{
  try {
    console.log("getAllProducts");
    res.render("products");
  } catch(err) {
    console.log("Error getAllProducts", err);
    if(err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }

};

productController.createNewProduct = async (req: Request, res: Response) =>{
  try {
    console.log("createNewProducts");

  } catch(err) {
    console.log("Error createNewProducts", err);
    if(err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }

};

productController.updateChosenProduct = async (req: Request, res: Response) =>{
  try {
    console.log("updateChosenProduct");

  } catch(err) {
    console.log("Error updateChosenProduct", err);
    if(err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }

};


export default productController;