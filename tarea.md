## Se desarrollará un servidor que contenga los endpoints y servicios necesarios para gestionar los productos y carritos de compra en el e-commerce

[video primera entrega](https://drive.google.com/drive/u/0/folders/1FPVsJRkk1utM4-mNl3vZ8dw54bm7ra1h)

### que entregar
Desarrollar el servidor basado en **Node.JS y express**, que escuche en el **puerto 8080** y disponga de dos grupos de rutas: **/products y /carts**. Dichos endpoints estarán implementados con el router de express, con las siguientes especificaciones:
* productos, router => **/api/roducts/** , con las  rutas:
  * La ruta raíz GET / con parametro limit
  * La ruta GET /:pid
  * La ruta raíz POST / deberá agregar un nuevo **producto**
  * La ruta PUT /:pid deberá tomar un
producto y actualizarlo por los campos
enviados desde body. NUNCA se debe
actualizar o eliminar el id al momento de hacer dicha actualización.
  * La ruta DELETE /:pid deberá eliminar el producto con el pid indicado.
* carrito,  router => **/api/carts/**, configurar dos rutas:
  * aíz POST / deberá
crear un nuevo **carrito**
  * La ruta GET /:cid deberá listar los
productos que pertenezcan al
carrito con el parámetro cid
proporcionados.
  * La ruta POST /:cid/product/:pid
deberá agregar el producto al arreglo
“products” del carrito seleccionado,
agregándose como un objeto bajo el
siguiente formato


### que campos tiene producto?
* id: Number/String (A tu elección, el id
NO se manda desde body, se
autogenera como lo hemos visto
desde los primeros entregables,
asegurando que NUNCA se repetirán
los ids en el archivo.
* title:String,
* description:String
* code:String
* price:Numbe
* status:Boolean / default: true
* stock:Number
* category:String
* (op)thumbnails:Array de Strings
que contenga las rutas
donde están almacenadas
las imágenes referentes a
dicho producto

### que campos tiene carrito?
* Id:Number/String.
* products: Array que
contendrá objetos que
representen cada
producto. 
  * el formato de los elementos de este array son: [**id_carrito**,**cantidad**]
