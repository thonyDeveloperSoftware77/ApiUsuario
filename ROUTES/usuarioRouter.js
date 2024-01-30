"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarioController_1 = require("../CONTROLLERS/usuarioController");
const router = (0, express_1.Router)();
router.get('/:id', usuarioController_1.getUsuario);
router.post('/', usuarioController_1.postUsuario);
exports.default = router;
//# sourceMappingURL=usuarioRouter.js.map