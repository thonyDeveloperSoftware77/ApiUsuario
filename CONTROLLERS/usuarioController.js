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
exports.postUsuario = exports.getUsuario = void 0;
const express_1 = require("express");
const dbServer_1 = require("../SERVICE/Context/dbServer");
const getUsuario = (req = express_1.request, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        (0, dbServer_1.buscarUsuario)(id).then((data) => {
            res.json(data);
        });
    }
    catch (error) {
        res.json(error);
    }
});
exports.getUsuario = getUsuario;
const postUsuario = (req = express_1.request, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //agarrar el body, no params
        const id = req.body._id;
        const email = req.body._email;
        const nombre = req.body._nombre;
        const pais = req.body._pais;
        console.log("llego a post usuario");
        console.log(id, email, nombre, pais);
        (0, dbServer_1.registrarUsuario)(id, email, nombre, pais).then((data) => {
            res.json(data);
        });
    }
    catch (error) {
        res.json(error);
    }
});
exports.postUsuario = postUsuario;
//# sourceMappingURL=usuarioController.js.map