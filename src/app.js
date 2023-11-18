import  express from "express"
import { apiRouter } from "./routers/api.router.js"

const app = express()


app.use(express.json())
app.use('/api', apiRouter)


app.listen(8080, ()=> {console.log('Conected to Port N8080')})



/* 
node src/dataCharger.js 
para cargar algunos datos de prueba
 */


/*
un json de prueb para probar el product PUT

{
    "title": "test1",
    "description": "test1 description",
    "code": "001",
    "price": 20,
    "status": true,
    "thumbnail":  "imgTest.jpg",
    "stock": 14,
    "category": "nuevo"
        }
 */