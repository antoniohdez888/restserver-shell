import express from 'express';
import cors from 'cors';
import { router } from '../routes/users.routes.js'

export class Server {
    
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosRoutePath = '/api/usuarios';

        // * Middlewares
        this.middlewares();

        // * Rutas de mi app
        this.routes();
    }

    middlewares() {

        // * CORS
        this.app.use( cors() );

        // * lectura y parseo del body
        this.app.use( express.json() );

        // * directorio público
        this.app.use( express.static('public') )

    }

    routes() {

        this.app.use(this.usuariosRoutePath, router);

    }

    listen(){
        this.app.listen( this.port, () => {
            console.log(`Servidor corriendo en ${ this.port }`);
        } );
    }

}