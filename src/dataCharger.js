import { ProductManager } from "./services/ProductManager.js";
import { CartManager } from "./services/CartManager.js";

import { Product } from "./models/Product.js"
import { Cart } from "./models/Cart.js";



const pm= new ProductManager('./db/product.json',Product)
await pm.checkSettings()


const cm= new CartManager('./db/cart.json',Cart)
await cm.checkSettings()



await pm.add('calabaza','descripcion lalala','001',12,false,['image.jpg','image2.jpg'],20,'nuevo')
await pm.add('Manzanas', 'Dulces y jugosas', '002', 15,true, 'manzana.jpg', 10, 'normal');
await pm.add('Leche', 'Leche fresca y nutritiva', '003', 3,true, 'leche.jpg', 30, 'regular');
await pm.add('Pan integral', 'Pan saludable y nutritivo', '004', 5,false, ['pan.jpg','pan2.jpg'], 15, 'integral');
await pm.add('Yogur', 'Yogur delicioso y cremoso', '005', 2,true, null, 25, 'natural');
await pm.add('Cereal', 'Cereal crujiente y sabroso', '006', 7,false, 'cereal.jpg', 18, 'multigrano');




await cm.add()
await cm.add()
await cm.add()
await cm.add()
await cm.add()

await cm.addProduct(1,2)
await cm.addProduct(1,1)
await cm.addProduct(1,2)

await cm.addProduct(4,1)
await cm.addProduct(4,2)
await cm.addProduct(4,2)
await cm.addProduct(4,5)
await cm.addProduct(4,1)
await cm.addProduct(5,1)
