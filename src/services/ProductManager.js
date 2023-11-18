import { FileManagment } from "./../extas/FileManagment.js"
import { Product } from "./../models/Product.js"

export class ProductManager extends FileManagment{
    
    constructor(path,obj){
        super(path,obj)        

    }
    
    async add(title,description,code,price,status,thumbnail,stock,category){
        const created= await super.add([title,description,code,price,status,thumbnail,stock,category])
        console.log( created)
    }


    async update(id,title,description,code,price,status,thumbnail,stock,category){
        const updated= await super.update(id,[title,description,code,price,status,thumbnail,stock,category])
        
        console.log( updated)
    }


}

export const pm= new ProductManager('./db/product.json',Product)