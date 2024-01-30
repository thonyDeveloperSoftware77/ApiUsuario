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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFavorito = exports.postFavorito = void 0;
const express_1 = require("express");
const dbServer_1 = require("../SERVICE/Context/dbServer");
const postFavorito = (req = express_1.request, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //agarrar el body, no params
        const id = req.body.id;
        const id_usuario = req.body.id_usuario;
        (0, dbServer_1.añadirFavorito)(id, id_usuario).then((data) => {
            res.json(data);
        });
    }
    catch (error) {
        res.json(error);
    }
});
exports.postFavorito = postFavorito;
const deleteFavorito = (req = express_1.request, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //agarrar el body, no params
        const id = req.body.id;
        const id_usuario = req.body.id_usuario;
        (0, dbServer_1.eliminarFavorito)(id, id_usuario).then((data) => {
            res.json(data);
        });
    }
    catch (error) {
        res.json(error);
    }
});
exports.deleteFavorito = deleteFavorito;
//# sourceMappingURL=favoritoController.js.map