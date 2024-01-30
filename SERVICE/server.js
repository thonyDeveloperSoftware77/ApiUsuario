"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const usuarioRouter_1 = __importDefault(require("../ROUTES/usuarioRouter"));
const favoritoRouter_1 = __importDefault(require("../ROUTES/favoritoRouter"));
const watchRouter_1 = __importDefault(require("../ROUTES/watchRouter"));
class Server {
    constructor() {
        this.apiPaths = {
            usuario: '/api/usuario',
            favorito: '/api/favorito',
            watchlist: '/api/watchlist'
            //Paths para la aplicacion
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8001';
        //Metodos iniciales
        //Middlewares
        this.middlewares();
        //Definicion de las rutas
        this.routes();
    }
    middlewares() {
        //CORS
        this.app.use((0, cors_1.default)({
            origin: [
                //Añade local host
                'http://localhost:3001',
                'http://localhost:3000',
                'http://localhost:8000',
                //Añade todo
                '*'
            ]
        }));
        //Lectura del body
        this.app.use(express_1.default.json());
        //Carpeta publica
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        //Implementacion de las rutas
        this.app.use(this.apiPaths.usuario, /*this.authMiddleware.bind(this),*/ usuarioRouter_1.default);
        this.app.use(this.apiPaths.favorito, /*this.authMiddleware.bind(this),*/ favoritoRouter_1.default);
        this.app.use(this.apiPaths.watchlist, /*this.authMiddleware.bind(this),*/ watchRouter_1.default);
    }
    //prueba de conexion
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map