"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buscarUsuario = exports.eliminarWatchlist = exports.eliminarFavorito = exports.añadirWatchlist = exports.añadirFavorito = exports.registrarUsuario = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const sequelize_1 = require("sequelize");
//Configuración de las variables de entorno
dotenv_1.default.config();
//Conexión a la base de datos
const db = new sequelize_1.Sequelize(process.env.NAME_DATABASE || "PeliculaUser", process.env.USER_DATABASE || 'DatabaseAdmin', process.env.PASSWORD_DATABASE || 'admin123456', {
    host: 'localhost',
    dialect: 'mssql',
    port: 1433
});
function executeProcedure(procedureName, inputParameters) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let replacements = inputParameters;
            let result = yield db.query(`EXEC ${procedureName} :${Object.keys(replacements).join(', :')}`, { replacements });
            return result[0];
        }
        catch (error) {
            console.log(error);
        }
    });
}
function registrarUsuario(id, email, nombre, pais) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield executeProcedure('RegistrarUsuario', { id, email, nombre, pais });
    });
}
exports.registrarUsuario = registrarUsuario;
function añadirFavorito(id, id_usuario) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield executeProcedure('AñadirFavorito', { id, id_usuario });
    });
}
exports.añadirFavorito = añadirFavorito;
function añadirWatchlist(id, id_usuario) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield executeProcedure('AñadirWatchlist', { id, id_usuario });
    });
}
exports.añadirWatchlist = añadirWatchlist;
function eliminarFavorito(id, id_usuario) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield executeProcedure('EliminarFavorito', { id, id_usuario });
    });
}
exports.eliminarFavorito = eliminarFavorito;
function eliminarWatchlist(id, id_usuario) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield executeProcedure('EliminarWatchlist', { id, id_usuario });
    });
}
exports.eliminarWatchlist = eliminarWatchlist;
function buscarUsuario(id) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield executeProcedure('BuscarUsuario', { id });
        let usuario = result.filter((row) => row.tipo === 'usuario');
        let favoritos = result.filter((row) => row.tipo === 'favorito');
        let watchlist = result.filter((row) => row.tipo === 'watchlist');
        return Object.assign(Object.assign({}, usuario[0]), { _favoritos: favoritos, _watchlist: watchlist // Lista de observación del usuario
         });
    });
}
exports.buscarUsuario = buscarUsuario;
//# sourceMappingURL=dbServer.js.map