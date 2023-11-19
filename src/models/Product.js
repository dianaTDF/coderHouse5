import * as sec from './../extas/security.js'


export class Product {
    #id
    #thumbnail

    constructor(id,{title,description="Sin descripcion",code,price,status=true,thumbnail=null,stock,category}){
        this.#thumbnail=[]

        this.#id=       sec.requiredValue(id,'id')
        this.title=     sec.stringValue(title, 'title')
        this.description=sec.stringValue(description, 'description')
        this.code=      sec.requiredValue(code,'code')
        this.price =    sec.requiredPositiveValue(price,'precio')
        this.status=    sec.boolValue(status, 'status')
        this.stock =    sec.requiredPositiveValue(stock,'stock')       
        this.category=  sec.stringValue(category, 'category')

        if(thumbnail!=null){
            this.addPicture(thumbnail)
        }
    }

    get id(){
        return this.#id
    }
    
    set thumbnail(value){
        throw new Error('Utilice la funcion addPicture() para ingresar imagenes al thumbnail')
    }

    get thumbnail(){
        return [...this.#thumbnail]
    }

    addPicture(element){

        if(typeof element === 'number'){
            throw new Error('No puedes ingresar numero en thumbnail.')
        }
        
        //considerar si lo que ingresa el usuario es una imagen o multiples imagenes a la vez
        if(typeof element === 'string'){
            element=[element]
        }
        element.forEach(img => {
            if(sec.isImageFormat(img)){

                if(!this.#thumbnail.includes(img)){
                    this.#thumbnail.push(img)  
                }
            }
            else{
                console.log(`${img} no tiene un formato permitido`)
                //throw new Error('La imagen que intenta ingresar no tiene un formato permitido.')
            }
        });
    }

    resetPictures(element=null){
        this.#thumbnail=[]
        if(element!=null){
            this.addPicture(element)
        }
    }

    print(){
        return {
            id:this.id,
            title:this.title,
            description:this.description,
            code:this.code,
            price:this.price,
            status:this.status,
            thumbnail: this.thumbnail,
            stock:this.stock,
            category:this.category
        }
    }


}

