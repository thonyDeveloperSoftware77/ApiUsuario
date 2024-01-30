"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const favoritoController_1 = require("../CONTROLLERS/favoritoController");
const router = (0, express_1.Router)();
router.post('/', favoritoController_1.postFavorito);
router.delete('/', favoritoController_1.deleteFavorito);
exports.default = router;
//# sourceMappingURL=favoritoRouter.js.map