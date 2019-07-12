"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//Morgan es un middleware para ver las peticiones del servidor por consola
const morgan_1 = __importDefault(require("morgan"));
//importacion de ruta desde index.routes
const index_routes_1 = __importDefault(require("./routes/index.routes"));
//importacion de ruta desde post.routes
const post_routes_1 = __importDefault(require("./routes/post.routes"));
//la constante app se inicia dentro de la propiedad de una clase
class App {
    constructor(port) {
        this.port = port;
        this.app = express_1.default();
        this.settings();
        this.middleware();
        this.routes();
    }
    // Metotodo que define el puerto
    settings() {
        this.app.set('port', this.port || process.env.PORT || 3000);
    }
    middleware() {
        this.app.use(morgan_1.default('dev'));
    }
    //definicion de rutas 
    routes() {
        this.app.use(index_routes_1.default);
        this.app.use('/posts', post_routes_1.default);
    }
    //se crea un metodo llamado listen()
    listen() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.app.listen(this.app.get('port'));
            console.log('Servidor en puerto', this.app.get('port'));
        });
    }
}
exports.App = App;
