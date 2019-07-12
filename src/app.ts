import express, {Application} from 'express';

//Morgan es un middleware para ver las peticiones del servidor por consola
import morgan from 'morgan'


//importacion de ruta desde index.routes
import IndexRoutes from './routes/index.routes'

//importacion de ruta desde post.routes
import PostRoutes from './routes/post.routes';

//la constante app se inicia dentro de la propiedad de una clase
 export class App {

    private app: Application;

    constructor(private port?: number | string){
        this.app = express();
        this.settings();
        this.middleware();
        this.routes();
    }

     // Metotodo que define el puerto
     settings(){
         this.app.set('port', this.port || process.env.PORT || 3000)
     }
     
     middleware(){
         this.app.use(morgan('dev'));
     }

     //definicion de rutas 

     routes(){
         this.app.use(IndexRoutes)
         this.app.use('/posts', PostRoutes)
     }

     //se crea un metodo llamado listen()
    async listen(){
        await this.app.listen(this.app.get('port'));
        console.log('Servidor en puerto', this.app.get('port'));
        
    }

}