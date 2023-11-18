import { cm } from "../services/CartManager.js"

await cm.checkSettings()

export async function getController(req, res) {
  const cid=req.params.cid
  console.log(`Mostrar productos de carrito ${cid}`)

  if(cid != null){

    try {
      const carts = await cm.search(cid)
      res.json(carts.products)
    } catch (error) {
      res.json(`El carrito ${cid} no existe`)        
    }

  }else{
    res.json(`no se ha ingresado un indice de carrito`)        
  }
}

  
export async function postController(req, res) {
    const pid = req.params.pid
    const cid = req.params.cid

    if(cid == null || cid == null){
      res.json({errorMessage:'faltan datos'})

    }else{
      console.log('agregar prod a carrito')
      const cart = await cm.idExist(cid)

      if(cart){
        
        cm.addProduct(cid,pid)
        const selected=await cm.search(cid)
        res.json(selected.products)
        
      }else{
        res.json({errorMessage:`El carrito ${cid} no existe`})        
      }   
    }
    
  }