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
exports.getPelicula = exports.getUsuario = exports.buscarPeliculasPorGenero = exports.getRecomendacion = void 0;
const express_1 = require("express");
const firestore_1 = require("firebase/firestore");
const firebase_1 = __importDefault(require("../SERVICE/Context/firebase"));
const dbServer_1 = require("../SERVICE/Context/dbServer");
const getRecomendacion = (req = express_1.request, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, dbServer_1.buscarUsuario)("lLNiJOpkG5QJeFpmyj9b30E7jTG2").then((data) => {
            res.json(data);
        });
    }
    catch (error) {
        res.json(error);
    }
});
exports.getRecomendacion = getRecomendacion;
const buscarPeliculasPorGenero = (idGenero) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${idGenero}&api_key=221a5887c176a30296b0e870ada5696c`, {
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjFhNTg4N2MxNzZhMzAyOTZiMGU4NzBhZGE1Njk2YyIsInN1YiI6IjY1YTVlNWYwZWI2NGYxMDEyOGY0ZTgzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OyadVEsT18O5fh26OgN1fVCrTQRsQh7zVgk0Aep30Zo',
            'accept': 'application/json'
        }
    });
    const data = yield res.json();
    return data.results;
});
exports.buscarPeliculasPorGenero = buscarPeliculasPorGenero;
const getUsuario = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const docRef = (0, firestore_1.doc)(firebase_1.default, "_usuario", id);
        const docSnap = yield (0, firestore_1.getDoc)(docRef);
        if (docSnap.exists()) {
            const data = docSnap.data();
            //SERIALIZAR LOS DATOS AL MODELO DE SALIDA
            let dataSalida = {
                _email: data._email,
                _favoritos: data._favoritos,
                _nombre: data._nombre,
                _pais: data._pais,
                _watchlist: data._watchlist
            };
            return dataSalida;
        }
        else {
            return null;
        }
    }
    catch (error) {
        return null;
    }
});
exports.getUsuario = getUsuario;
function getPelicula(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=221a5887c176a30296b0e870ada5696c`, {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjFhNTg4N2MxNzZhMzAyOTZiMGU4NzBhZGE1Njk2YyIsInN1YiI6IjY1YTVlNWYwZWI2NGYxMDEyOGY0ZTgzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OyadVEsT18O5fh26OgN1fVCrTQRsQh7zVgk0Aep30Zo',
                'accept': 'application/json'
            }
        });
        const data = yield res.json();
        return data;
    });
}
exports.getPelicula = getPelicula;
//# sourceMappingURL=recomendacionController.js.map